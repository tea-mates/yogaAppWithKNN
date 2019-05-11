import React from 'react';
import { connect } from 'react-redux';

const poses = [
  {
    name: 'MountainPose',
    imageUrl:
      'https://live.staticflickr.com/65535/33935797398_279eda570c_z.jpg',
    highlight:
      'https://live.staticflickr.com/65535/33935797398_279eda570c_z.jpg',
  },
  {
    name: 'HalfMoonPose',
    imageUrl:
      'https://live.staticflickr.com/65535/47812849101_0fba3078a6_z.jpg',
    highlight:
      'https://live.staticflickr.com/65535/47812849101_0fba3078a6_z.jpg',
  },
  {
    name: 'GarlandPose',
    imageUrl: 'https://i.imgur.com/16JLzA4.png',
    highlight: 'https://i.imgur.com/bhP3AYN.png',
  },
  {
    name: 'TreePose',
    imageUrl:
      'https://st4.depositphotos.com/5130171/19866/v/1600/depositphotos_198661934-stock-illustration-child-doing-yoga-half-moon.jpg',
    highlight:
      'https://st4.depositphotos.com/5130171/19866/v/1600/depositphotos_198661934-stock-illustration-child-doing-yoga-half-moon.jpg',
  },
];

class AllPoses extends React.Component {
  constructor() {
    super();
  }

  // export const showSequence = () => {
  //   //we first need to determine how many poses we will show the user/will be in the sequence which is depenedent on which round of the game the user is on
  //   //this is happening in createSequence function above
  //   const poseSequenceArr = createSequence( defaultGame.gameRound );
  //   const l = poseSequenceArr.length;
  //   for ( let i = 0; i < l; i++ ) {
  //     let currPose = poseSequenceArr[i];
  //     highlightPose( currPose );
  //   }

  //   highlightPose( '' );

  //   //will need to state the countdown once sequence of poses is show to the user
  //   beginCountdown();
  // };

  render() {
    return (
      <div className="allPoseImages">
        <div className="poseContainer">
          {poses.map((pose, i) => {
            return <img className="posesImage" src={pose.imageUrl} key={i} />;
          })}
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  poseSequence: state.poseSequence,
});

export default connect(mapState)(AllPoses);
