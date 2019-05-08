import React from 'react';
import { Button } from './Buttons';
import Camera from './Camera';
import PoseCarousel from './Carousel';
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
    setTimeout(this.displayCamera, 7000);
  }

  displayCamera() {
    console.log('lets begin!');
    this.setState({ loadCamera: true });
    setTimeout(this.disableCountdown, 5000);
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
        <div>
          {this.state.countdown ? <CountdownTimer /> : <div />}
          <PoseCarousel />
        </div>
        <div ref={this.myRef}>
          {this.state.loadCamera ? <Camera /> : <div />}
        </div>
      </div>
    );
  }
}

export default SelectPose;
