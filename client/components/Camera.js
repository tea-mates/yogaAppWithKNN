//import { drawKeyPoints, drawSkeleton } from './utils';
import React, { Component } from 'react';
import * as posenet from '@tensorflow-models/posenet';
import { detectPose, poseDetectionFrame } from '../poseNetFunc';

let stream = null;

class PoseNet extends Component {
  static defaultProps = {
    //video sizing variables
    videoWidth: 900,
    videoHeight: 700,
    flipHorizontal: true, // we dont flip, in canvas it is drawing on the other half
    algorithm: 'single-pose',
    showVideo: true,
    showSkeleton: true,
    minPoseConfidence: 0.1, // at what accuracy of estimation you want to draw
    minPartConfidence: 0.5,
    maxPoseDetections: 2,
    nmsRadius: 20,
    outputStride: 16,
    imageScaleFactor: 0.5,
    skeletonColor: '#ffadea',
    skeletonLineWidth: 6,
    loadingText: 'Loading...please be patient...'
  };

  constructor(props) {
    super(props, PoseNet.defaultProps);
    this.state = {
      flag: true
    };
    this.detectPose = detectPose.bind(this);
  }

  getCanvas = elem => {
    this.canvas = elem;
  };

  getVideo = elem => {
    this.video = elem;
  };

  componentWillUnmount() {
    let track = stream.getTracks()[0];
    track.stop();
  }

  async componentDidMount() {
    try {
      await this.setupCamera();
    } catch (error) {
      throw new Error(
        'This browser does not support video capture, or this device does not have a camera'
      );
    }

    try {
      this.posenet = await posenet.load();
    } catch (error) {
      throw new Error('PoseNet failed to load');
    } finally {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 200);
    }

    this.detectPose(this.props,this.canvas,poseDetectionFrame,this.posenet,this.video);
  }

  async setupCamera() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      throw new Error(
        'Browser API navigator.mediaDevices.getUserMedia not available'
      );
    }
    const { videoWidth, videoHeight } = this.props;
    const video = this.video;
    video.width = videoWidth;
    video.height = videoHeight;

    stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        facingMode: 'user',
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

  render() {
    return (
      <div>
        {this.state.flag ? <div>
           <video id="videoNoShow" playsInline ref={this.getVideo} />
           <canvas className="webcam" ref={this.getCanvas} />
        </div> : <div>Result</div>}
      </div>
    );
  }
}

export default PoseNet;
