const formidable = require('formidable');
const util = require('util');
const uploadDir = './public/images';

const uploadFile = async function (req, res) {
  try {
    var form = new formidable.IncomingForm();
    var fields = [];
    var files = [];
    form.uploadDir = uploadDir;
    if (req.url == '/'){
      form = await form.parse(req);
  
      form
        .on('field', function(field, value) {
          fields.push(value);
        })
        .on('file', function(field, file) {
          files.push(file);
        })
        .on('end', function() {
          if (files && files.length) {
            ResponeSuccess(req, res, {files});
          }
        });
    }else {
      res.send(fields) ;
    }
  }catch (error) {
    res.send(error);
  }
};

module.exports = {
  uploadFile
};
  
