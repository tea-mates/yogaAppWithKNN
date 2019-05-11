mport React from 'react';
import { connect } from 'react-redux';

class AllPoses extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="allPoseImages">
        <div className="poseContainer">
          <img className="posesImage" src={this.props.poses[0].imageUrl} />
          <h1>{this.props.poses[0].name}</h1>
          <div />
          <div />
          <div />
          <img className="posesImage" src={this.props.poses[1].imageUrl} />
          <h1>{this.props.poses[1].name}</h1>
        </div>
        <br />
        <br />
        <div className="poseContainer2">
          <div />
          <div />
          <div />
          <img className="posesImage" src={this.props.poses[3].imageUrl} />
          <h1>{this.props.poses[3].name}</h1>
          <img className="posesImage" src={this.props.poses[4].imageUrl} />
          <h1>{this.props.poses[4].name}</h1>
        </div>
      </div>
    );
  }
}

const mapState = state => ( {
  poses: state.poses,
} );

export default connect( mapState )( AllPoses );
