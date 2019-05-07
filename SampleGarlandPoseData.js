const imgScraperLister = require("./utilities/imgScraperUtil");
const deleteBadImgData = require("./utilities/deleteBadImgData");

const garlandPoseSamples = "";

let garlandPoseArrayOfUrls = imgScraperLister(garlandPoseSamples);

const idxToRemove = [];

const garlandPoseUrls = deleteBadImgData(idxToRemove, garlandPoseArrayOfUrls);

export default garlandPoseArrayOfUrls;
// export default garlandPoseUrls;
