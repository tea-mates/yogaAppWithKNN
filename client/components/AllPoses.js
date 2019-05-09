import React from 'react';

const poses = [
  {
    name: 'Garland',
    imageUrl:
      'https://media.istockphoto.com/vectors/manga-style-cartoon-yoga-garland-pose-vector-id1093813776?k=6&m=1093813776&s=612x612&w=0&h=YcZSUe1Sr-tiYGpQ7JZ6F2NY4ducTjl5GpcSs4UpfaA=',
  },
  {
    name: 'Tree',
    imageUrl:
      'https://media.istockphoto.com/vectors/cartoon-yoga-couple-vector-id979681068?k=6&m=979681068&s=612x612&w=0&h=n4XmgEKy54gXVxp045621dq37eAF6fHD7X1umcl65gM=',
  },
  {
    name: 'Half Moon',
    imageUrl:
      'https://st4.depositphotos.com/5130171/19866/v/1600/depositphotos_198661934-stock-illustration-child-doing-yoga-half-moon.jpg',
  },
  {
    name: 'Half Moon',
    imageUrl:
      'https://st4.depositphotos.com/5130171/19866/v/1600/depositphotos_198661934-stock-illustration-child-doing-yoga-half-moon.jpg',
  },
  {
    name: 'Half Moon',
    imageUrl:
      'https://st4.depositphotos.com/5130171/19866/v/1600/depositphotos_198661934-stock-illustration-child-doing-yoga-half-moon.jpg',
  },
  {
    name: 'Half Moon',
    imageUrl:
      'https://st4.depositphotos.com/5130171/19866/v/1600/depositphotos_198661934-stock-illustration-child-doing-yoga-half-moon.jpg',
  },
];

class AllPoses extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      poses: poses,
    };
  }

  render() {
    return (
      <div className="allPosesDiv">
        <div className="row">
          {this.state.poses.map((pose, i) => {
            return <img className="posesImage" src={pose.imageUrl} key={i} />;
          })}
        </div>
      </div>
    );
  }
}

export default AllPoses;
