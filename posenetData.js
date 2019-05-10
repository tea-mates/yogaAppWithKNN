import * as posenet from '@tensorflow-models/posenet';
import poseNet from './client/components/Camera';

let poses = [];
const knnClassifier = ml5.KNNClassifier();

async function estimatePoseOnImage() {
  // load the posenet model from a checkpoint
  const net = await posenet.load();

  for (let i = 0; i < 100; i++) {
    let pose;

    if (`../Warrior2Pose/${i}.jpg`) {
      let img = new Image(900, 700);
      img.src = `/Warrior2POSE/${i}.jpg`;
      pose = await net.estimateSinglePose(
        img,
        poseNet.defaultProps.imageScaleFactor,
        poseNet.defaultProps.flipHorizontal,
        poseNet.defaultProps.outputStride
      );
      if ((await pose.score) !== 0.0007498596836847034) {
        let poseArray = await pose.keypoints.map(p => [
          p.score,
          p.position.x,
          p.position.y
        ]);
        knnClassifier.addExample(await poseArray, 'Warrior2Pose');
      }
    }
    if (`../MountainPose/${i}.jpg`) {
      let img = new Image(900, 700);
      img.src = `/MountainPose/${i}.jpg`;
      pose = await net.estimateSinglePose(
        img,
        poseNet.defaultProps.imageScaleFactor,
        poseNet.defaultProps.flipHorizontal,
        poseNet.defaultProps.outputStride
      );
      if ((await pose.score) !== 0.0007498596836847034) {
        let poseArray = await pose.keypoints.map(p => [
          p.score,
          p.position.x,
          p.position.y
        ]);
        knnClassifier.addExample(await poseArray, 'MountainPose');
      }
    }
    if (`../HalfMoon/${i}.jpg`) {
      let img = new Image(900, 700);
      img.src = `/HalfMoon/${i}.jpg`;
      pose = await net.estimateSinglePose(
        img,
        poseNet.defaultProps.imageScaleFactor,
        poseNet.defaultProps.flipHorizontal,
        poseNet.defaultProps.outputStride
      );
      if ((await pose.score) !== 0.0007498596836847034) {
        let poseArray = await pose.keypoints.map(p => [
          p.score,
          p.position.x,
          p.position.y
        ]);
        knnClassifier.addExample(await poseArray, 'HalfMoonPose');
      }
    }
    if (`../GarlandPose/${i}.jpg`) {
      let img = new Image(900, 700);
      img.src = `/GarlandPose/${i}.jpg`;
      pose = await net.estimateSinglePose(
        img,
        poseNet.defaultProps.imageScaleFactor,
        poseNet.defaultProps.flipHorizontal,
        poseNet.defaultProps.outputStride
      );
      if ((await pose.score) !== 0.0007498596836847034) {
        let poseArray = await pose.keypoints.map(p => [
          p.score,
          p.position.x,
          p.position.y
        ]);
        knnClassifier.addExample(await poseArray, 'GarlandPose');
      }
    }
  }

  await knnClassifier.save();

  console.log('done saving KNN');
}

estimatePoseOnImage();

export default knnClassifier;
