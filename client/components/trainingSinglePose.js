import React from 'react';
import CountdownTimer from './CountdownTimer';
import Camera from './Camera';
import { stop } from './Camera';
import {connect} from 'react-redux'
import store from '../store';
import {reset} from '../store/trainer'

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
    store.dispatch(reset())
    setTimeout(this.displayCamera, 8000);
  }

  displayCamera() {
    this.setState({ loadCamera: true });
    setTimeout(this.disableCountdown, 3000);
  }

  render() {
    return (
      <div>
        {!this.props.stop ?
        <div>
          {!this.state.loadCamera ?
          <div className="countdownDiv">
            <div>
              <h1>Get ready!</h1>
              <CountdownTimer />
            </div>
          </div> :
          <div className="cameraDiv">
            <Camera poseName={this.props.match.params.poseName} />
          </div>}
        </div> :
        <div>
          <p>poseName : {this.props.pose}</p>
          {this.props.score > 0 ?
          <p>Score : {parseInt((1-this.props.score)*100)}%</p> :
          <p>Score : 0</p>}
        </div>}
      </div>
    );
  }
}

const mapState = (state)=>({
  pose: state.resultReducer.pose,
  score: state.resultReducer.score,
  stop:state.resultReducer.stop
})

export default connect(mapState)(TrainingSinglePose);
