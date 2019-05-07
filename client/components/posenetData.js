import * as posenet from '@tensorflow-models/posenet';
import poseNet from './Camera'

let poses = []
const knnClassifier = ml5.KNNClassifier();


async function estimatePoseOnImage() {
  // load the posenet model from a checkpoint
  const net = await posenet.load();

  for(let i=0;i<100;i++){
    let pose;
    if(`../Treepose/${i}.jpg`){
      let img = new Image(900,700)
      img.src = `/Treepose/${i}.jpg`
      pose = await net.estimateSinglePose(img, poseNet.defaultProps.imageScaleFactor, poseNet.defaultProps.flipHorizontal, poseNet.defaultProps.outputStride)
      if(await pose.score !== 0.0007498596836847034){

        let poseArray = await pose.keypoints.map(p => [p.score, p.position.x, p.position.y])
        knnClassifier.addExample(await poseArray, 'TreePose');
      }
    }

  }

  await knnClassifier.save()


}

estimatePoseOnImage()


export default knnClassifier



