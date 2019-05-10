import React from "react";
import CountdownTimer from "./CountdownTimer";
import ResultPage from "./ResultPage";
import AllPoses from "./AllPoses";

class GameFunctions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countdown: false,
      poseSequence: ["MountainPose"],
      poseSuccess: false, //did they succeed to do the current pose
      poseBeingHighlighted: "",
      gameOver: false //set this to true if you reach 10 poses or you fail a pose
    };
    this.showSequence = this.showSequence.bind(this);
    this.checkPose = this.checkPose.bind(this);
    this.nextRound = this.nextRound.bind(this);
  }

  componentDidMount() {
    if (this.props.countdown === false) {
      this.showSequence();
    }
  }

  startCountdown() {
    this.setState({ countdown: true });
    this.checkPose(this.props.result);
    setTimeout();
  }
  disableCountdown() {
    this.setState({ countdown: false });
  }
  showSequence() {
    const poseSequenceArr = this.state.poseSequence;
    const l = poseSequenceArr.length;
    for (let i = 0; i < l; i++) {
      let currPose = poseSequenceArr[i];
      this.setState({ poseBeingHighlighted: currPose });
    }
    this.setState({ poseBeingHighlighted: "" });
    this.startCountdown();
  }

  checkPose(currentResult) {
    const poseSequenceArr = this.state.poseSequence;
    const l = poseSequenceArr.length;
    for (let i = 0; i < l; i++) {
      let currPose = poseSequenceArr[i];
      if (currPose === currentResult) {
        this.setState({ poseSuccess: true });
      }
      if (this.state.poseSuccess === false) {
        this.setState({ gameOver: true });
      }
      if (this.state.countdown === false) {
        this.setState({ gameOver: true });
      }
    }
  }

  nextRound() {
    if (this.state.poseSequence.length === 10) {
      this.setState({ gameOver: true });
    }
    let poses = ["MountainPose", "HalfMoonPose", "GarlandPose", "TreePose"];
    let aRandomPoseIdx = Math.floor(Math.random() * 4);
    this.setState({
      poseSequence: [...this.state.poseSequence, poses[aRandomPoseIdx]]
    });
  }

  render() {
    let result = this.props.result;
    let confidence = this.props.confidence;
    return (
      <div>
        {this.state.gameOver ? (
          <ResultPage />
        ) : (
          <div>
            <div className="countdownDiv">
              <CountdownTimer />
            </div>
            <div className="allPosesDiv">
              <AllPoses
                poseBeingHighlighted={this.state.poseBeingHighlighted}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default GameFunctions;
