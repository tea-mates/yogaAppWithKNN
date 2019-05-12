import history from "../history";

/**
 * ACTION TYPES
 */
const START_GAME = "START_GAME";
const END_GAME = "END_GAME";
const LEVEL_UP = "LEVEL_UP";
const SUCCESS = "SUCCESS";
const FAILED = "FAILED";
const DISABLE_COUNTDOWN = "DISABLE_COUNTDOWN";
const UPDATE_SEQUENCE = "UPDATE_SEQUENCE";

/**
 * ACTION CREATORS
 */
const poseSuccess = () => ({
  type: SUCCESS,
  poseSuccess: true
});

const gameOver = () => ({
  type: DISABLE_COUNTDOWN,
  gameOver: true
});

const updateSequence = () => ({
  type: UPDATE_SEQUENCE,
  pose: _getRandomPose()
});

const startCountdown = () => ({
  type: START_GAME
});

const endCountdown = () => ({
  type: END_GAME,
  countdown: false
});

const nextGameRound = round => ({
  type: LEVEL_UP,
  gameRound: round
});

/**
 * THUNKS
 */
// export const createSequence = currentSequence => {
//   const randoPose = _getRandomPose();
//   //this is not working bc state is only defined within the reducer...how can we get this to work??

//   const poseToShowNum = Math.floor(Math.random() * 4);
//   const poseToShow = state.poses[poseToShowNum];
//   const poseSequenceArr = [];

//   if (state.gameRound === 1 && !poseSequenceArr) {
//     poseSequenceArr = poseToShow;
//   } else {
//     for (let i = 0; i <= state.gameRound; i++) {
//       poseToShowNum = Math.floor(Math.random() * 4);
//       poseToShow = state.poses[poseToShowNum];
//       if (!poseSequenceArr) {
//         poseSequenceArr = poseToShow;
//       } else {
//         poseSequenceArr.push(poseToShow);
//       }
//     }
//   }
//   showSequence(poseSequenceArr);
//   //increase the round by 1
//   const nextRound = state.gameRound + 1;
//   nextGameRound(nextRound);
// };

function _getRandomPose() {
  const poses = ["MountainPose", "HalfMoonPose", "GarlandPose", "TreePose"];
  const poseToShowNum = Math.floor(Math.random() * 4);
  const poseToShow = poses[poseToShowNum];
  return poseToShow;
}

export const beginCountdown = () => {
  return dispatch => {
    dispatch(startCountdown());
    // WHERE TO GO FROM HERE ???
    setTimeout(dispatch(endCountdown()), 10000);
  };
};

// export const disableCountdown = () => {
//   dispatch(endCountdown());
// };

export const checkPoseSuccess = (result, confidence) => {
  console.log("You have to do -->", poseToShow);
  return dispatch => {
    const poseSequenceArr = state.poseSequence;
    const l = poseSequenceArr.length;
    for (let i = 0; i < l; i++) {
      let currPose = poseSequenceArr[i];
      if (currPose === result && confidence > 0.6) {
        // i am not sure if we will want to use the confidence score as a measure of success since it is inconsistent
        console.log("Success.. Pose done! move to next level");
        dispatch(poseSuccess());
      }
      if (!state.poseSuccess || !state.countdown) {
        dispatch(gameOver());
      }
    }
  };
};

export const nextRound = () => {
  return dispatch => {
    if (state.poseSequence.length === 10) {
      dispatch(gameOver());
    } else {
      dispatch(updateSequence());
    }
  };
};

/**
 * INITIAL STATE
 */
const defaultGame = {
  poses: ["MountainPose", "HalfMoonPose", "GarlandPose", "TreePose"],
  countdown: false,
  gameRound: 0,
  poseSequence: [],
  poseSuccess: false, //did they succeed to do the current pose
  gameOver: false //set this to true if you reach 10 poses or you fail a pose
};

/**
 * REDUCER
 */
export default function(state = defaultGame, action) {
  switch (action.type) {
    case START_GAME:
      return { ...state, countdown: true };
    case END_GAME:
      return { ...state, countdown: action.countdown };
    case LEVEL_UP:
      return { ...state, gameRound: action.gameRound };
    case SUCCESS:
      return { ...state, poseSuccess: action.poseSuccess };
    case DISABLE_COUNTDOWN:
      return { ...state, gameOver: action.gameOver };
    case UPDATE_SEQUENCE:
      return {
        ...state,
        poseSequence: [...state.poseSequence, action.pose],
        gameRound: state.gameRound + 1
      };
    default:
      return state;
  }
}
