import React from 'react';
import { connect } from 'react-redux';
import { beginCountdown } from '../store/game';

const poses = [
  {
    name: 'MountainPose', //the images need to be updated
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Mr-yoga-mountain-pose-bound_hands.jpg/747px-Mr-yoga-mountain-pose-bound_hands.jpg',
    highlight:
      'https://upload.wikimedia.org/wikipedia/commons/6/69/Mountain_Pose.jpg',
  },
  {
    name: 'HalfMoonPose',
    imageUrl: 'https://i.imgur.com/VKn1Z7q.png',
    highlight: 'https://i.imgur.com/BcCk6qt.png',
  },
  {
    name: 'GarlandPose',
    imageUrl: 'https://i.imgur.com/16JLzA4.png',
    highlight: 'https://i.imgur.com/bhP3AYN.png',
  },
  {
    name: 'TreePose', //the images need to be updated
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tree_pose.JPG/428px-Tree_pose.JPG',
    highlight:
      'https://upload.wikimedia.org/wikipedia/commons/b/ba/Tree_Pose_with_the_trees%21.jpg',
  },
];

class AllPoses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      poseBeingHighlighted: '',
      poseTimeframeMs: 2000, //this controls how long each pose is highlighted for
    };
  }

  componentDidUpdate(prevProps) {
    const poseWasAdded =
      prevProps.poseSequence.length !== this.props.poseSequence.length;
    if (poseWasAdded) {
      this.showSequence();
    }
  }

  highlightPose() {}

  showSequence = () => {
    const { poseSequence, beginCountdown } = this.props;
    const { poseTimeframeMs } = this.state;
    const l = poseSequence.length;
    for (let i = 0; i < l; i++) {
      (i => {
        //this anon fn slows down the for loop
        setTimeout(() => {
          let currPose = poseSequence[i];
          this.setState({ poseBeingHighlighted: currPose });
        }, poseTimeframeMs * i);
      })(i); //this invokes the outer anon fn
    }

    this.setState({ poseBeingHighlighted: '' });

    //will need to state the countdown once sequence of poses is show to the user
    if (this.state.poseBeingHighlighted === '') beginCountdown();
  };

  render() {
    const { gameRound } = this.props;
    const isZero = gameRound ? 0 : 1;

    return (
      <div>
        {gameRound === 0 ? <div /> : <h1>Round {gameRound}</h1>}
        <div className="allPoseImages">
          <div className="poseContainer">
            {poses.map((pose, i) => {
              const { poseBeingHighlighted } = this.state;
              const isPoseHighlighted = poseBeingHighlighted === pose.name;
              return (
                <img
                  className="posesImage"
                  src={isPoseHighlighted ? pose.highlight : pose.imageUrl}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  poseSequence: state.poseSequence,
  gameRound: state.gameRound,
});

const mapDispatchToProps = dispatch => ({
  beginCountdown: () => dispatch(beginCountdown()),
});

export default connect(
  mapState,
  mapDispatchToProps
)(AllPoses);
