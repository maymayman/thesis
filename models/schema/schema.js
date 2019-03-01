const {STATUS} = require('../../config/const').USER;

const validateEmail = function (email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

module.exports = {
  users: {
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    status: {type: String, required: true, default: STATUS.ACTIVE},
    role: {type: String, required: true},
    firstName: {type: String},
    lastName: {type: String},
    birthDay: {type: Date},
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: true
      // required: 'Email address is required',
      // validate: [validateEmail, 'Please fill a valid email address'],
      // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    phoneNumber: {type: String},
    gender: {type: String},
    position: {type: String},
    information: {
      nameCompany: {type: String},
      address: {type: String},
      taxCode: {type: String}
    }
    
  },
  
  project:{
    title: {type: String,unique: true, required: true},
    about: {type: String},
    status: {type: String, default: STATUS.ACTIVE},
    personResponsible: {
      firstName: {type: String},
      lastName: {type: String},
      birthday: {type: Date},
      phone:{type: String},
    },
    userDonate:[],
    donations: {type: Number},
    totalMoney: {type: Number},
    created_at:{type: Date}
  }
};
