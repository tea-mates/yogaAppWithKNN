/* eslint-disable no-inner-declarations */
import { drawKeyPoints, drawSkeleton } from "./utils";
import React, { Component } from "react";
import * as posenet from "@tensorflow-models/posenet";
import AllPoses from "./AllPoses";
import { connect } from "react-redux";
import GameFunctions from "./GameFunctions";
import { checkPoseSuccess } from "../store/game";

//export let video;
let result = "";
let confidence = 0;
class PoseNet extends Component {
  static defaultProps = {
    //video sizing variables
    videoWidth: 900,
    videoHeight: 700,
    flipHorizontal: true, // we dont flip, in canvas it is drawing on the other half
    algorithm: "single-pose",
    showVideo: true,
    showSkeleton: true,
    //showPoints: true, // this is for face
    minPoseConfidence: 0.1, // at what accuracy of estimation you want to draw
    minPartConfidence: 0.5,
    maxPoseDetections: 2,
    nmsRadius: 20,
    outputStride: 16,
    imageScaleFactor: 0.5,
    skeletonColor: "#ffadea",
    skeletonLineWidth: 6,
    loadingText: "Loading...please be patient..."
  };

  constructor(props) {
    super(props, PoseNet.defaultProps);
    this.state = {
      result: "",
      confidence: 0,
      countdown: true
    };
    this.poseDetectionFrame = this.poseDetectionFrame.bind(this);
    this.checkPose = this.checkPose.bind(this);
  }
  disableCountdown() {
    console.log("all done!");
    this.setState({ countdown: false });
  }
  getCanvas = elem => {
    this.canvas = elem;
  };

  getVideo = elem => {
    this.video = elem;
  };

  async componentDidMount() {
    try {
      await this.setupCamera();
    } catch (error) {
      throw new Error(
        "This browser does not support video capture, or this device does not have a camera"
      );
    }

    try {
      this.posenet = await posenet.load();
    } catch (error) {
      throw new Error("PoseNet failed to load");
    } finally {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 200);
    }

    this.detectPose();
  }

  async setupCamera() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      throw new Error(
        "Browser API navigator.mediaDevices.getUserMedia not available"
      );
    }
    const { videoWidth, videoHeight } = this.props;
    const video = this.video;
    video.width = videoWidth;
    video.height = videoHeight;

    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        facingMode: "user",
        width: videoWidth,
        height: videoHeight
      }
    });

    video.srcObject = stream;

    return new Promise(resolve => {
      video.onloadedmetadata = () => {
        video.play();
        resolve(video);
      };
    });
  }
  // this is setting up the canvas
  detectPose() {
    const { videoWidth, videoHeight } = this.props;
    const canvas = this.canvas;
    const canvasContext = canvas.getContext("2d");

    canvas.width = videoWidth;
    canvas.height = videoHeight;

    this.poseDetectionFrame(canvasContext);
  }

  poseDetectionFrame(canvasContext) {
    const {
      algorithm,
      imageScaleFactor,
      flipHorizontal,
      outputStride,
      minPoseConfidence,
      minPartConfidence,
      maxPoseDetections,
      nmsRadius,
      videoWidth,
      videoHeight,
      showVideo,
      showPoints,
      showSkeleton,
      skeletonColor,
      skeletonLineWidth
    } = this.props;

    const posenetModel = this.posenet;
    const video = this.video;

    const findPoseDetectionFrame = async () => {
      let poses = [];

      switch (algorithm) {
        case "multi-pose": {
          poses = await posenetModel.estimateMultiplePoses(
            video,
            imageScaleFactor,
            flipHorizontal,
            outputStride,
            maxPoseDetections,
            minPartConfidence,
            nmsRadius
          );
          break;
        }
        case "single-pose": {
          const knnClassifier = ml5.KNNClassifier();

          //let poseNetml = ml5.poseNet(video, knnClassifier);
          const pose = await posenetModel.estimateSinglePose(
            video,
            imageScaleFactor,
            flipHorizontal,
            outputStride
          );
          poses.push(pose);
          //console.log('hello')
          knnClassifier.load("/myKNN.json", classify);

          async function classify() {
            //console.log('hellow')
            const numLabels = knnClassifier.getNumLabels();
            if (numLabels <= 0) {
              console.error("There is no examples in any label");
              return;
            }

            const poseArray = poses[0].keypoints.map(p => [
              p.score,
              p.position.x,
              p.position.y
            ]);

            let resultModel = await knnClassifier.classify(poseArray);
            function gotResults(resultModel) {
              result = "";
              confidence = 0;

              result = resultModel.label;
              // this.setState({result: resultModel.label}) //this wasn't working
              confidence = resultModel.confidencesByLabel[result];
              console.log(`here ${result} ${confidence}`);
              this.checkPose(result, confidence);
            }
            gotResults(resultModel);
          }
          break;
        }
      }
      canvasContext.clearRect(0, 0, videoWidth, videoHeight);

      if (showVideo) {
        canvasContext.save();
        canvasContext.scale(-1, 1);
        canvasContext.translate(-videoWidth, 0);
        canvasContext.drawImage(video, 0, 0, videoWidth, videoHeight);
        canvasContext.restore();
      }

      poses.forEach(({ score, keypoints }) => {
        if (score >= minPoseConfidence) {
          if (showPoints) {
            drawKeyPoints(
              keypoints,
              minPartConfidence,
              skeletonColor,
              canvasContext
            );
          }
          if (showSkeleton) {
            drawSkeleton(
              keypoints,
              minPartConfidence,
              skeletonColor,
              skeletonLineWidth,
              canvasContext
            );
          }
        }
      });
      requestAnimationFrame(findPoseDetectionFrame);
    };
    findPoseDetectionFrame();
  }

  checkPose(result, confidence) {
    const { poseSequence } = this.props;
    // start checking the pose once the countdown for the round/level of the game has begun
    if (this.props.countdown) {
      //if there's game-time left
      for (let i = 0; i < poseSequence.length; i++) {
        let currentPose = poseSequence[i];
        this.props.checkPoseSuccess(result, confidence, currentPose);
      }
    }
  }

  render() {
    return (
      <div>
        <div>
          <video id="videoNoShow" playsInline ref={this.getVideo} />
          <canvas className="webcam" ref={this.getCanvas} />
          <p id="result">{this.state.result}</p>
          <p id="confidence">{this.state.confidence}</p>
        </div>
      </div>
    );
  }
}

const mapState = (state, ownProps) => ({
  countdown: state.countdown,
  poseSequence: state.poseSequence
});

const mapDispatch = dispatch => ({
  checkPoseSuccess: (result, confidence) =>
    dispatch(checkPoseSuccess(result, confidence))
});

export default connect(
  mapState,
  mapDispatch
)(PoseNet);
