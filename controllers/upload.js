const {uploadImage} = require('../helper/upload');


const upload = async function (req, res) {
  try {
    
    let images = await uploadImage(req, res);
    
    return ResponeSuccess(req, res, {images});
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};


module.exports = {
  upload
};