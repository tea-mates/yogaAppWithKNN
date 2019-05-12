import React from "react";
import CountdownTimer from "./CountdownTimer";
import ResultPage from "./ResultPage";
import { connect } from "react-redux";
import { createSequence, nextRound, beginCountdown } from "../store/game";

class GameFunctions extends React.Component {
  constructor(props) {
    super(props);

    this.beginNextRound = this.beginNextRound.bind(this);
  }

  componentDidMount() {
    // 1. begin the first round
    // 2. make a sequence of 1 pose, and increment game round from 0 to 1
    // 3. display the sequence to the player
    //    - this happens in AllPoses.js
    // 4. once displayed, start countdown timer
    // 5. during the countdown, user does the pose
    //    a. complete successfully
    //    b. timeout / failure

    // this.props.createSequence();
    this.startFirstRound();
  }

  componentDidUpdate() {
    if (this.props.poseSuccess) {
      this.props.beginCountdown();
    }
  }

  startFirstRound() {
    // this.props.createSequence();
    this.props.nextRound(this.props.poseSequence);
  }

  beginNextRound() {
    if (!this.props.countdown && !this.props.gameOver) {
      this.props.nextRound(this.props.poseSequence);
    }
  }

  render() {
    return (
      <div>
        {this.props.gameOver ? <ResultPage /> : <div />}

        {this.props.countdown ? (
          <div className="countdownDiv">
            <CountdownTimer />
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

const mapState = state => ({
  countdown: state.countdown,
  poseSuccess: state.poseSuccess,
  gameOver: state.gameOver,
  poseSequence: state.poseSequence
});

const mapDispatch = dispatch => ({
  createSequence: () => dispatch(createSequence()),
  nextRound: poseSequence => dispatch(nextRound(poseSequence)),
  beginCountdown: () => dispatch(beginCountdown())
});

export default connect(
  mapState,
  mapDispatch
)(GameFunctions);
