const formidable = require('formidable');
const util = require('util');
const uploadDir = require('/public/images');

const uploadImage = function (req, res) {
  try {
    if (req.url == '/upload'){
      var form = new formidable.IncomingForm();
      var fields = [];
      form.uploadDir = uploadDir;
      
      form.on('error', function(error) {
        return HandleError(error);
      })
        .on('field', function(field, value) {
        console.log(field, value);
        fields.push([field, value]);
      })
        .on('end', function() {
          console.log('-> post done');
          return fields;
        });
      form.parse(req);
    }
  }catch (error) {
    
    return HandleError(error);
  }
};

module.exports = {
  uploadImage
};
  
