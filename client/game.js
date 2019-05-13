const POSES = ['MountainPose', 'HalfMoonPose', 'GarlandPose', 'TreePose'];
//Above has to be standardised. As in 0 is always MountainPose.
//this has to exactly match our labels in KNN json file
export let poseToShow = Math.floor(Math.random() * 4);
let level = 0;
// --- Level 0 ---- //

//--------------- Render the select pose page -------------//
// renders allposes the countdown component, and loads camera

// logic to check if the user came to that position.
export const checkPoseSuccess = (result, confidence) => {
  console.log('You have to do -->', POSES[poseToShow]);
  if (result === POSES[poseToShow] && confidence > 0.6) {
    console.log('Success.. Pose done! move to next level');
  }
};
