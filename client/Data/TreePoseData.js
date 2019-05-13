import {normArrGen,flattenArr} from './flatArrGen'

let pose ={score: 0.7736789654282963, keypoints: [
  {part: "nose",position: {x: 394.8713664265422, y: 308.3780787244414},
  score: 0.9948116540908813},
  {part: "leftEye",
  position: {x: 411.27406529017856, y: 297.838212989434},
  score: 0.9771174788475037},
  {part: "rightEye",
  position: {x: 383.31181513798697, y: 300.7294576043423},
  score: 0.990624725818634},
  {part: "leftEar",
  position: {x: 426.5251496550324, y: 310.895392947012},
  score: 0.855036199092865},
  {part: "rightEar",
  position: {x: 350.43526785714283, y: 318.7731892423324},
  score: 0.6002976298332214},
  {part: "leftShoulder",
  position: {x: 449.34570312499994, y: 370.3084858834844},
  score: 0.9367169141769409},
  {part: "rightShoulder",
  position: {x: 333.9809823965097, y: 374.85061310998105},
  score: 0.9329831600189209},
  {part: "leftElbow",
  position: {x: 454.2831777597402, y: 261.95472858808495},
  score: 0.6786119937896729},
  {part: "rightElbow",
  position: {x: 449.11947671469153, y: 253.6655471055544},
  score: 0.581453263759613},
  {part: "leftWrist",
  position: {x: 386.4015891335227, y: 149.03009681637332},
  score: 0.4842071533203125},
  {part: "rightWrist",
  position: {x: 383.63268567370125, y: 150.84551188837216},
  score: 0.5610507130622864},
  {part: "leftHip",
  position: {x: 436.56982421874994, y: 645.9566936525084},
  score: 0.9481005668640137},
  {part: "rightHip",
  position: {x: 357.72961901379864, y: 649.2916834093065},
  score: 0.9673815965652466},
  {part: "leftKnee",
  position: {x: 379.13035206980516, y: 861.5458136264228},
  score: 0.6418371200561523},
  {part: "rightKnee",
  position: {x: 379.00079900568176, y: 860.6706744703837},
  score: 0.6279795169830322},
  {part: "leftAnkle",
  position: {x: 407.70742441152595, y: 1049.9263872786678},
  score: 0.6834985017776489},
  {part: "rightAnkle",
  position: {x: 414.24972732345776, y: 1047.8164441267918},
  score: 0.6908342242240906}
  ]}

let poses = [pose]
export let treeNormArray = normArrGen(poses)
export let treeFlatnormArray = flattenArr(treeNormArray)



