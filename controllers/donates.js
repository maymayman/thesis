const DonateService = require('../service/donates.js');
const {validateDonate} = require('../helper/validation');
const notificationsService = require('../service/notifications');
const {validateNotifications} = require('../helper/validation');


const getByProjectId = async function (req, res) {
  try {
    const user = req.user;
    const projectId = req.params.projectId;
    if (!user || !projectId){
      
      return ResponeSuccess(req, res, {});
    }
    
    const donate = await DonateService.getDonate(projectId);
  
    return ResponeSuccess(req, res, {donate});
  
  }catch (error) {
    return ResponeError(req, res, error, error.message);
  }
};

const create = async function (req, res) {
  try {
    const data = req.body;
    const user = req.user;
  
    const {result, error } = await validateDonate(data, user);
  
    if (error) {
      return ResponeError(req, res, null, error);
    }
  
    const donate = await DonateService.create(result);
    
    await notificationsService.create(donate, user);
  
    return ResponeSuccess(req, res, {donate});
  }catch (error) {
    return ResponeError(req, res, error, error.message);
  }
};

const update = async function (req, res) {
  try {
  
  }catch (error) {
    return ResponeError(req, res, error, error.message);
  }
};

module.exports = {
  getByProjectId,
  create,
  update
};