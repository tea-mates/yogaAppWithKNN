import React from 'react';

const poses = [
  {
    name: 'Garland',
    imageUrl:
      'https://media.istockphoto.com/vectors/manga-style-cartoon-yoga-garland-pose-vector-id1093813776?k=6&m=1093813776&s=612x612&w=0&h=YcZSUe1Sr-tiYGpQ7JZ6F2NY4ducTjl5GpcSs4UpfaA='
  },
  {
    name: 'Tree',
    imageUrl: 'https://live.staticflickr.com/65535/33935797398_279eda570c_z.jpg'
  },
  {
    name: 'Half Moon',
    imageUrl: 'https://live.staticflickr.com/65535/47812849101_0fba3078a6_z.jpg'
  },
  {
    name: 'Half Moon',
    imageUrl:
      'https://st4.depositphotos.com/5130171/19866/v/1600/depositphotos_198661934-stock-illustration-child-doing-yoga-half-moon.jpg'
  }
];

class AllPoses extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      poses: poses
    };
  }

  render() {
    return (
      <div className="allPoseImages">
        <div className="poseContainer">
          <img id="pose0" className="posesImage" src={poses[0].imageUrl} />
          <img />
          <img />
          <img />

          <img id="pose1" className="posesImage" src={poses[1].imageUrl} />
        </div>
        <br />
        <br />
        <div className="poseContainer2">
          <img id="pose2" className="posesImage" src={poses[2].imageUrl} />
          <img />
          <img />
          <img />

          <img id="pose4" className="posesImage" src={poses[3].imageUrl} />
        </div>
      </div>
    );
  }
}

export default AllPoses;
