import React from "react";
import { connect } from "react-redux";

class RoundPoseDisplay extends React.Component {
  // componentDidUpdate(){
  //     const { poseToDo } = this.props;
  //     poseToDo()
  // }

  render() {
    const { poseSequence, currentPoseInARound } = this.props;
    return (
      <div>
        <h1 className="h2">You're on pose:</h1>
        <p>
          {poseSequence.map((singlePose, idx) => {
            return (
              <div key={idx} poseName={singlePose}>
                {singlePose === currentPoseInARound ? (
                  <button className="button-primary button-round button-small">
                    {singlePose}
                    {idx}
                  </button>
                ) : (
                  <button
                    className="button-primary-outlined button-round button-small"
                    sendTheDispatch={() => this.props.poseToDo(singlePose)}
                  >
                    {singlePose}
                    {idx}
                  </button>
                )}
              </div>
            );
          })}
        </p>
      </div>
    );
  }
}

const mapState = state => ({
  poseSequence: state.gameReducer.poseSequence,
  currentPoseInARound: state.gameReducer.currentPoseInARound
});

const mapDispatch = dispatch => ({
  poseToDo: pose => dispatch(poseToDo(pose))
});

export default connect(
  mapState,
  mapDispatch
)(RoundPoseDisplay);
