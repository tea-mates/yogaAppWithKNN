import * as posenet from "@tensorflow-models/posenet";
import PoseNet from "./Camera";
import mountainPoseUrls from "../../SampleMountainPoseData";

let poses = [];
const knnClassifier = ml5.KNNClassifier();
console.log("the estimatePoseOnImage is running");
async function estimatePoseOnImage() {
  // load the posenet model from a checkpoint
  const net = await posenet.load();
  console.log("the estimatePoseOnImage is running");

  const arrLength = mountainPoseUrls.length;
  for (let i = 0; i < arrLength; i++) {
    let pose;
    if (`../mountainPose/${i}.jpg`) {
      let img = new Image(900, 700);
      console.log("the img that was scaled is: ", img);
      img.src = `/mountainpose/${i}.jpg`;
      pose = await net.estimateSinglePose(
        img,
        PoseNet.defaultProps.imageScaleFactor,
        PoseNet.defaultProps.flipHorizontal,
        PoseNet.defaultProps.outputStride
      );
      if ((await pose.score) !== 0.0007498596836847034) {
        let poseArray = await pose.keypoints.map(p => [
          p.score,
          p.position.x,
          p.position.y
        ]);
        knnClassifier.addExample(await poseArray, "mountainPose");
      }
    }
  }

  await knnClassifier.save();
}

estimatePoseOnImage();

export default knnClassifier;
