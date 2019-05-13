import { treeNormArray, treeFlatnormArray } from './TreePoseData';
import { garlandNormArray, garlandFlatnormArray } from './GarlandPoseData';
import { mountainNormArray, mountainFlatnormArray } from './MountainPose';
import { twistNormArray, twistFlatnormArray } from './ShivaTwist';
export let flatImageData = [];

flatImageData.push(
  treeFlatnormArray,
  garlandFlatnormArray,
  mountainFlatnormArray,
  twistFlatnormArray
);

export let compareObj = [
  {pose:'TreePose',norm:treeNormArray},
  {pose:'GarlandPose',norm:garlandNormArray},
  {pose:'MountainPose',norm:mountainNormArray},
  {pose:'ShivaTwist',norm:twistNormArray}
]

export let parts = ['nose','leftEye','rightEye','leftEar','rightEar','rightShoulder','leftElbow','rightElbow','leftWrist','rightWrist','leftHip','rightHip','leftKnee','rightKnee','leftAnkle','rightAnkle']

export let parts = [
  'nose',
  'leftEye',
  'rightEye',
  'leftEar',
  'rightEar',
  'rightShoulder',
  'leftElbow',
  'rightElbow',
  'leftWrist',
  'rightWrist',
  'leftHip',
  'rightHip',
  'leftKnee',
  'rightKnee',
  'leftAnkle',
  'rightAnkle'
];
