import {normArrGen,flattenArr} from './flatArrGen'

let pose = {
  score: 0.9002335913041059,
  keypoints:[
    {part: "nose",position: {x: 339.08906025419606, y: 117.18218307495115},score: 0.9976848363876343},
    {part: "leftEye",position: {x: 356.6766710592661, y: 103.19666434393987},score: 0.9969457983970642},
    {part: "rightEye",position: {x: 331.1975903610094, y: 105.95841593424478},score: 0.9901502132415771},
    {part: "leftEar",position: {x: 381.4403998038182, y: 113.56095842149522},score: 0.9428313970565796},
    {part: "rightEar",position: {x: 318.7839043954006, y: 116.78992853800455},score: 0.5983890295028687},
    {part: "leftShoulder",position: {x: 412.56144266100245, y: 183.2037712605794},score: 0.9879165291786194},
    {part: "rightShoulder",position: {x: 310.689619386939, y: 190.132445441352},score: 0.9871805310249329},
    {part: "leftElbow",position: {x: 464.4776115077894, y: 276.0442333306206},score: 0.9651904106140137},
    {part: "rightElbow",position: {x: 250.72415632027196, y: 284.65920138888885},score: 0.9720149040222168},
    {part: "leftWrist",position: {x: 385.79130540615733, y: 292.89190694173175},score: 0.9286813735961914},
    {part: "rightWrist",position: {x: 303.10828324949, y: 284.3765741644965},score: 0.826602578163147},
    {part: "leftHip",position: {x: 409.18096887605486, y: 326.80384847005206},score: 0.8336300253868103},
    {part: "rightHip",position: {x: 319.1733068811434, y: 318.4010408528646},score: 0.8560683727264404},
    {part: "leftKnee",position: {x: 486.4201214617721, y: 279.1029667833116},score: 0.8608286380767822},
    {part: "rightKnee",position: {x: 227.96016432764978, y: 298.17561720106335},score: 0.7698932886123657},
    {part: "leftAnkle",position: {x: 473.8034936016321, y: 429.49988986545134},score: 0.9009473323822021},
    {part: "rightAnkle",position: {x: 267.86086085288395, y: 429.5596837022569},score: 0.889015793800354}
  ]
}


let poses = [pose]
export let garlandNormArray = normArrGen(poses)
export let garlandFlatnormArray = flattenArr(garlandNormArray)
