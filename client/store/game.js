import history from '../history';

/**
 * ACTION TYPES
 */
const START_GAME = 'START_GAME';
const END_GAME = 'END_GAME';
const SUCCESS = 'SUCCESS';
// const FAILED = "FAILED";
const DISABLE_COUNTDOWN = 'DISABLE_COUNTDOWN';
const UPDATE_SEQUENCE = 'UPDATE_SEQUENCE';

/**
 * ACTION CREATORS
 */
const poseSuccess = () => ({
  type: SUCCESS,
});

const gameOver = () => ({
  type: DISABLE_COUNTDOWN,
});

const updateSequence = () => ({
  type: UPDATE_SEQUENCE,
});

const startCountdown = () => ({
  type: START_GAME,
});

const endCountdown = () => ({
  type: END_GAME,
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
  const poses = ['TreePose', 'GarlandPose', 'MountainPose', 'ShivaTwist'];
  const poseToShowNum = Math.floor(Math.random() * 4);
  const poseToShow = poses[poseToShowNum];
  return poseToShow;
}

export const beginCountdown = () => {
  //this does not have an ACTION type associated, just undefined
  return dispatch => {
    dispatch(startCountdown());
    setTimeout(dispatch(endCountdown()), 10000); //unexpected timeout error
  };
};

export const disableCountdown = () => {
  dispatch(endCountdown()); //why does this one not have a return dispatch fn?
};

export const checkPoseSuccess = (result, confidence, currPose, countdown) => {
  // console.log("You have to do -->", poseToShow);
  return dispatch => {
    // const poseSequenceArr = state.poseSequence;
    // const l = poseSequenceArr.length;
    // for (let i = 0; i < l; i++) {
    // let currPose = poseSequenceArr[i];
    if (currPose === result && confidence > 0.3) {
      //do we need the confidence score for this game???
      // i am not sure if we will want to use the confidence score as a measure of success since it is inconsistent
      console.log('Success.. Pose done! move to next level');
      dispatch(poseSuccess());
    }
    if (!countdown) {
      dispatch(gameOver());
    }
  };
};

export const nextRound = poseSequence => {
  return dispatch => {
    //this did not have an action type associated, it was undefined
    //does this need poseSequence passed in as an argument?
    if (poseSequence.length === 10) {
      console.log('we got into the if the pose sequence is equal to 10');
      dispatch(gameOver());
    } else {
      // console.log("we got into the place where we update the sequence");
      dispatch(updateSequence());
    }
  };
};

/**
 * INITIAL STATE
 */
const defaultGame = {
  poses: ['TreePose', 'GarlandPose', 'MountainPose', 'ShivaTwist'],
  countdown: false,
  gameRound: 0,
  poseSequence: [],
  poseSuccess: false, //did they succeed to do the current pose
  gameOver: false, //set this to true if you reach 10 poses or you fail a pose
};

/**
 * REDUCER
 */
export default function(state = defaultGame, action) {
  switch (action.type) {
    case START_GAME: //starts game or starts checking for next pose
      return { ...state, countdown: true };
    case END_GAME:
      return { ...state, countdown: false };
    case SUCCESS:
      return { ...state, poseSuccess: true };
    case DISABLE_COUNTDOWN:
      return { ...state, gameOver: true };
    case UPDATE_SEQUENCE:
      return {
        ...state,
        poseSequence: [...state.poseSequence, _getRandomPose()],
        gameRound: state.gameRound + 1,
      };
    default:
      return state;
  }
}
