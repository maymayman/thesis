const formidable = require('formidable');
const util = require('util');
const fs = require('fs');
const public = process.env.PUBLIC_FOLDER || '/public';
const uploadDir = `.${public}/images`;
const numberSlice = public.length;

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
          let type = file.type.split('/')[1];
          let newPath = file.path + "." + type;
          fs.renameSync(file.path, newPath);
          let link = newPath.slice(numberSlice);
          files.push(link);
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
  
