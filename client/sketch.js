
import {video} from './components/Camera'
import pose from './posenetData'

const knnClassifier = ml5.KNNClassifier();



let poseNet;
let poses = [];
export let yoga;

function setup(){
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', function(results) {
    poses = results;
  });
}

// function addExample(label) {

//   const poseArray = poses[0].pose.keypoints.map(p => [p.score, p.position.x, p.position.y]);

//   knnClassifier.addExample(poseArray, label);

// }
// Predict the current frame.
function classify() {

  const numLabels = knnClassifier.getNumLabels();
  if (numLabels <= 0) {
    console.error('There is no examples in any label');
    return;
  }

  const poseArray = poses[0].pose.keypoints.map(p => [p.score, p.position.x, p.position.y]);

  // Use knnClassifier to classify which label do these features belong to
  // You can pass in a callback function `gotResults` to knnClassifier.classify function

  knnClassifier.classify(poseArray, gotResults);
}

function gotResults(err, result) {

  // Display any error
  if (err) {
    console.error(err);
  }

  console.log(result)
  if (result.confidencesByLabel) {
    const confidences = result.confidencesByLabel;
    // result.label is the label that has the highest confidence
    console.log(result);
    if (result.label) {
      // select('#result').html(result.label);
      // select('#confidence').html(`${confidences[result.label] * 100} %`);
      yoga = result.label

    }

    // select('#confidenceA').html(`${confidences['A'] ? confidences['A'] * 100 : 0} %`);
    // select('#confidenceB').html(`${confidences['B'] ? confidences['B'] * 100 : 0} %`);
  }

  classify();

}

//adding our sample

// function sample(){

//     addExample('Tree Pose')

// }
