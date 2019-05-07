import * as posenet from '@tensorflow-models/posenet';


const imageArr = ['https://www.yogajournal.com/.image/t_share/MTQ3MTU0OTQxNTE2MTk1NjMx/hp_291_1842_gn_bjk.jpg', 'https://www.gaia.com/wp-content/uploads/vrksasana-tree-pose.jpg, https://i.ytimg.com/vi/wdln9qWYloU/maxresdefault.jpg', 'https://www.styleoga.it/wp-content/uploads/2017/11/posizione-dell-albero-vrksana.jpg', 'http://www.theyogaposes.com/images/p/yoga-tree-pose.jpg']

const imageScaleFactor = 0.5;
const outputStride = 16;
const flipHorizontal = false;
let result = []
const knnClassifier = ml5.KNNClassifier();

imageArr.forEach(image=>{
  let img = new Image(900,700)
  img.crossOrigin = 'anonymous'
  img.src = image
})

posenet.load().then(function(net){
  return net.estimateSinglePose(img, imageScaleFactor, flipHorizontal, outputStride)
  }).then(function(pose){
      result.concat(pose)
   }).then(function addExample(label){
    console.log(result[0].keypoints)
    const poseArray = result.keypoints.map(p =>{
      console.log('hello')
      return [p.score, p.position.x, p.position.y]
    })
    knnClassifier.addExample(poseArray, label);
    addExample('Tree Pose')
   })






