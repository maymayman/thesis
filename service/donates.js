const {Donates} = require('../models');

const getDonate = async function (projectId) {
  try{
    
    const donate = await Donates.findOne({projectId: projectId});
  
    return donate;
    
  }catch (error) {
    return HandleError(error);
  
  }
};

const create = async function (donate) {
  try{
  
    const DonatesModel = new Donates(donate);
  
    const donateSaved= await DonatesModel.save();
    
    return donateSaved;
    
  }catch (error) {
    return HandleError(error);
  
  }
};





module.exports = {
  getDonate,
  create,
};