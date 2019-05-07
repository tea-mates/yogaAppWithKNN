//utility function to quickly remove the indexes that were combed through

function deleteBadImgData(indexes, urlArr) {
  return urlArr.filter((url, idx) => {
    return !indexes.includes(idx);
  });
}

module.exports = deleteBadImgData;
