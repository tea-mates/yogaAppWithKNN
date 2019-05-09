import React from 'react';
import { Button } from './Buttons';
import Camera from './Camera';
import AllPoses from './AllPoses';
import CountdownTimer from './CountdownTimer';

class SelectPose extends React.Component {
  constructor() {
    super();
    this.state = {
      countdown: true,
      loadCamera: false,
    };
    this.displayCamera = this.displayCamera.bind(this);
    this.disableCountdown = this.disableCountdown.bind(this);
    this.scrollToMyRef = this.scrollToMyRef.bind(this);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    setTimeout(this.displayCamera, 8000);
  }

  displayCamera() {
    console.log('lets begin!');
    this.setState({ loadCamera: true });
    setTimeout(this.disableCountdown, 3000);
  }

  disableCountdown() {
    console.log('all done!');
    this.setState({ countdown: false });
    this.scrollToMyRef();
  }

  scrollToMyRef() {
    this.myRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'end',
    });
  }

  render() {
    return (
      <div>
        <div className="countdownDiv">
          {this.state.countdown ? (
            <CountdownTimer />
          ) : (
            <div>
              <h1>Go!</h1>
            </div>
          )}
        </div>
        <AllPoses />
        <div className="timerDiv" ref={this.myRef}>
          {this.state.loadCamera ? <Camera /> : <div />}
        </div>
      </div>
    );
  }
}

export default SelectPose;
