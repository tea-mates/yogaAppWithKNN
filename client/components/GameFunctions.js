import React from 'react';
import CountdownTimer from './CountdownTimer';
import ResultPage from './ResultPage';
import { connect } from 'react-redux';
import { createSequence, nextRound } from '../store/game';

class GameFunctions extends React.Component {
  constructor(props) {
    super(props);
    this.beginNextRound = this.beginNextRound.bind(this);
  }

  componentDidMount() {
    this.props.createSequence();
  }

  beginNextRound() {
    if (!this.props.countdown && !this.props.gameOver) {
      this.props.nextRound();
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
});

const mapDispatch = dispatch => ({
  createSequence: () => dispatch(createSequence()),
  nextRound: () => dispatch(nextRound()),
});

export default connect(
  mapState,
  mapDispatch
)(GameFunctions);
