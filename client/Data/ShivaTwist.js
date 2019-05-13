import {normArrGen,flattenArr} from './flatArrGen'

let pose = {score: 0.8849771408473744, keypoints:
  [
    {part: "nose",position: {x: 327.6354735965899, y: 88.75337181249596},score: 0.9827911853790283},
    { part: "leftEye",position: {x: 338.26645304965695, y: 76.8861889344528},score: 0.9745344519615173},
    { part: "rightEye",position: {x: 318.90624637773556, y: 80.04419635440304},score: 0.9400706887245178},
    { part: "leftEar",position: {x: 356.89774238744906, y: 87.90831348213418},score: 0.9438367486000061},
    { part: "rightEar",position: {x: 315.6508403291335, y: 88.9802038422264},score: 0.59493488073349},
    { part: "leftShoulder",position: {x: 378.8495389219562, y: 143.42831180303423},score: 0.9899148941040039},
    { part: "rightShoulder",position: {x: 311.27483243404583, y: 134.1540704624287},score: 0.9755803942680359},
    { part: "leftElbow",position: {x: 443.79969294064125, y: 142.74682642513292},score: 0.9540628790855408},
    { part: "rightElbow",position: {x: 251.00730194182356, y: 140.1714150836359},score: 0.9717085361480713},
    { part: "leftWrist",position: {x: 447.79758170379733, y: 64.10567097644095},score: 0.8621464967727661},
    { part: "rightWrist",position: {x: 240.6400867315004, y: 75.0236036371888},score: 0.8807669281959534},
    { part: "leftHip",position: {x: 368.7600336725705, y: 258.98422937670193},score: 0.9817661046981812},
    { part: "rightHip",position: {x: 327.1623968016854, y: 259.85974197071124},score: 0.9848688840866089},
    { part: "leftKnee",position: {x: 377.4206099241353, y: 308.19803451601405},score: 0.707003653049469},
    { part: "rightKnee",position: {x: 396.96318855625236, y: 307.5288004894969},score: 0.7051727175712585},
    { part: "leftAnkle",position: {x: 351.7470181518917, y: 396.2236143246726},score: 0.8271464705467224},
    { part: "rightAnkle",position: {x: 358.85191784414417, y: 379.69657296461685},score: 0.7683054804801941}
  ]
}

let poses = [pose]
export let twistNormArray = normArrGen(poses)
export let twistFlatnormArray = flattenArr(twistNormArray)
