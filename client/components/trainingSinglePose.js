import React from 'react';

import CountdownTimer from './CountdownTimer';
import Camera from './Camera';

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
    setTimeout(this.disableCountdown, 3000);
  }

  render() {
    console.log(this.props.location.state);
    return (
      <div>
        <div className="countdownDiv">
          <div>
            <h1>Get ready!</h1>
            <CountdownTimer />
          </div>
        </div>

        <div className="cameraDiv">
          <Camera pose={this.props.location.state} />
        </div>
      </div>
    );
  }
}

export default TrainingSinglePose;
