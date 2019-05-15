import React from 'react';
import CountdownTimer from './CountdownTimer';
import Camera from './Camera';
import { stop } from './Camera';
import { connect } from 'react-redux';

class TrainingSinglePose extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stopTraining: false,
      loadCamera: false
    };
    this.displayCamera = this.displayCamera.bind(this);
  }

  componentDidMount() {
    setTimeout(this.displayCamera, 8000);
  }

  displayCamera() {
    this.setState({ loadCamera: true });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.state.loadCamera ? (
          <div className="webcam">
            <Camera poseName={this.props.match.params.poseName} />
          </div>
        ) : (
          <div className="countdownDiv">
            <div>
              <h1>Get ready!</h1>
              <CountdownTimer />
            </div>
          </div>
        )}
        {stop ? (
          <div>
            <p>poseName : {this.props.pose}</p>
            {this.props.score > 0 ? (
              <p>Score : {parseInt((1 - this.props.score) * 100)}</p>
            ) : (
              <p>Score : 0</p>
            )}
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

const mapState = state => ({
  pose: state.resultReducer.pose,
  score: state.resultReducer.score
});

export default connect(mapState)(TrainingSinglePose);
