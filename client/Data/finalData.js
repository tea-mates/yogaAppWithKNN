import {treeNormArray,treeFlatnormArray} from './treePoseData'
import {garlandNormArray,garlandFlatnormArray} from './GarlandPoseData'
export let flatImageData = []

flatImageData.push(treeFlatnormArray,garlandFlatnormArray)

export let compareObj = [
  {pose:'Tree Pose',norm:treeNormArray},
  {pose:'Garland Pose',norm:garlandNormArray}
]

export let parts = ['nose','leftEye','rightEye','leftEar','rightEar','rightShoulder','leftElbow','rightElbow','leftWrist','rightWrist','leftHip','rightHip','leftKnee','rightKnee','leftAnkle','rightAnkle']

