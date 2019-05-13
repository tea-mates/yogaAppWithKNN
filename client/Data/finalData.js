import {treeNormArray,treeFlatnormArray} from './TreePoseData'
import {garlandNormArray,garlandFlatnormArray} from './GarlandPoseData'
import {mountainNormArray,mountainFlatnormArray} from './MountainPose'
import {twistNormArray,twistFlatnormArray} from './ShivaTwist'
export let flatImageData = []

flatImageData.push(treeFlatnormArray,garlandFlatnormArray,mountainFlatnormArray,twistFlatnormArray)

export let compareObj = [
  {pose:'Tree Pose',norm:treeNormArray},
  {pose:'Garland Pose',norm:garlandNormArray},
  {pose:'Mountain Pose',norm:mountainNormArray},
  {pose:'Shiva Twist',norm:twistNormArray}
]

export let parts = ['nose','leftEye','rightEye','leftEar','rightEar','rightShoulder','leftElbow','rightElbow','leftWrist','rightWrist','leftHip','rightHip','leftKnee','rightKnee','leftAnkle','rightAnkle']

