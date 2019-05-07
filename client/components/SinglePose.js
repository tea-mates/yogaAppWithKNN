import React from 'react';
import Camera from './Camera';

class SinglePose extends React.Component {
  render() {
    console.log('props are ', this.props);
    const poseName = this.props.location.pathname.slice(1);
    return (
      <div>
        <Camera />
        {`${poseName} Pose`}
      </div>
    );
  }
}

export default SinglePose;
