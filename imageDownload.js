var fs = require('fs'),
  request = require('request');

poseUrls = require('./SampleGarlandPoseData.js');

var download = function(uri, filename, callback) {
  request.head(uri, function(err, res, body) {
    request(uri)
      .pipe(fs.createWriteStream(filename))
      .on('close', callback);
  });
};
poseUrls.forEach((image, index) => {
  download(image, `./public/GarlandPose/${index}.jpg`, function() {
    console.log('done');
  });
});
