const UserHandler = require('express').Router();
const UserController = require('../../controllers/users');

UserHandler.post('/test', UserController.create);



// const logInput = require('../middleware/logInput')
// const passport = require('passport')
// require('./../middleware/passport')(passport)
// const passportAdmin = require('../middleware/passportAdmin')

// const passportActiveUser = require('../middleware/passportActiveUser')

// /**
//  * @api {post} /users/create  Register new user
//  * @apiVersion 1.0.0
//  * @apiName Create user
//  * @apiGroup Users-API
//  * @apiDescription Create user
//     * @apiParam (Request body) {String} phone_number required
//     * @apiParam (Request body) {String} password Password of user requried
//     * @apiParam (Request body) {String} username requried
//     * @apiExample {js} Example post body:
//     * {
//         "username": "thanhtran",
//         "phone_number": "0938081669",
//         "password":"123456"
//     * } 
//     * @apiSuccessExample Success-Response:
//     {
//       "message": "Successfully created new user.",
//       "user": {
//           "id": 1,
//           "fullname": "thanhtran",
//           "phone_number": "0938081669",
//           "updatedAt": "2018-06-27T06:06:21.158Z",
//           "createdAt": "2018-06-27T06:06:21.158Z"
//       },
//       "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkI... ... ..
//       "success": true
//     }
// */
// UserHandler.post('/create', UserController.create)

// /**
//  * @api {get} /users/  Get user info
//  * @apiVersion 1.0.0
//  * @apiName Get user
//  * @apiGroup Users-API
//  * @apiHeader {String} Authorization Bearer eyJhbGciOiJIU...zI1NiIsInR5cCI6IkpXVCJ9...(Access token return from Login)
//  * @apiDescription Get user info
//     * @apiParam {String} noparams API extract user info from current token
//     * @apiSuccessExample Success-Response:
//     {
//       "user": {
//           "id": 1,
//           "name": "Thang",
//           "username": "thangluu",
//           "phone_number": "0938081669",
//           "email": "thang@mail.com",
//           "address": null
//       },
//       "success": true
//     }
//     * @apiError Unauthorized Only for logged user
// */

// UserHandler.get('/', passportActiveUser, UserController.get)

// //UserHandler.post('/verify', passport.authenticate('jwt', { session: false }), UserController.update)

// /**
//  * @api {post} /users/verify  Verify phone number of user to active
//  * @apiVersion 1.0.0
//  * @apiName Verify phone number
//  * @apiHeader {String} Authorization Bearer eyJhbGciOiJIU...zI1NiIsInR5cCI6IkpXVCJ9...(Access token return from Register)
//  * @apiGroup Users-API
//  * @apiDescription API return active_token, it use for users/active API (After send SMS to user)
//     * @apiParam (Request body) {String} phone_number required
//     * @apiExample {js} Example post body:
//     * {
//         "phone_number": "0938081669"
//     * }
//     * @apiSuccessExample Success-Response:
//     {
//         "data": {
//             "CodeResult": "100",
//             "CountRegenerate": 0,
//             "SMSID": "138f4d6c-b48f-4811-95e7-b812335d021269",
//             "active_token": "eyJhbGciOiJIUzI1NiIsInRIjo.....JgFaQAQTfO204iu2yO8AAv5o"
//         },
//         "code": 0,
//         "message": "API success"
//     }
//     * @apiError Unauthorized Only for logged user
// */
// UserHandler.post('/verify', passport.authenticate('jwt', { session: false }), UserController.verify)

// /**
//  * @api {post} /users/active  Actice user by SMS code
//  * @apiVersion 1.0.0
//  * @apiName active user by active_token and active code
//  * @apiHeader {String} Authorization Bearer eyJhbGciOiJIU...zI1NiIsInR5cCI6IkpXVCJ9...(Access token return from Register)
//  * @apiGroup Users-API
//  * @apiDescription API return user actived if success, error if failed 
//     * @apiParam (Request body) {String} code required
//     * @apiParam (Request body) {String} active_token required
//     * @apiExample {js} Example post body:
//     * {
//         "code": 2570,
//         "active_token": "eyJhbGciOiJIUzI1NiIsInRIjo.....JgFaQAQTfO204iu2yO8AAv5o"
//     * }
//     * @apiSuccessExample Success-Response:
//     {
//     "data": {
//         "user": {
//             "id": 1,
//             "username": "thangluu",
//             "phone_number": "0938081669",
//             "email": "thang@mail.com",
//             "address": null,
//             "is_active": 1,
//             "updatedAt": "2018-07-11T06:36:40.762Z"
//         }
//     },
//     "code": 0,
//     "message": "API success"
// }
// */
// UserHandler.post('/active', passport.authenticate('jwt', { session: false }), UserController.active)

// UserHandler.post('/delete', passport.authenticate('jwt', { session: false }), UserController.remove)

// /**
//  * @api {post} /users/login  Login with unique id
//  * @apiVersion 1.0.0
//  * @apiName Login
//  * @apiGroup Users-API
//  * @apiDescription Update user profile

//     * @apiParam {String} phone_number required
//     * @apiParam {String} password required
//     * @apiExample {js} Example post body:
//     * {
//         "phone_number": "0938081669",
//         "password":"123456",
//         "device_info": {                                   // optional
//             "name_os": "android",
//             "version_os": "5.0",
//             "device_token": "ueruunfio9832............",
//             "device_id": "1234"
//         }
//     * } 
//     * @apiSuccessExample Success-Response:
//     {
//     "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQi... ... ...,
//     "user": {
//         "id": 1,
//         "user_type_id": null,
//         "fullname": "thangluu",
//         "identify_number": null,
//         "phone_number": "0938081669",
//         "email": "thang@mail.com",
//         ... ... ...
//         "createdAt": "2018-06-27T06:06:21.000Z",
//         "updatedAt": "2018-06-27T06:06:21.000Z"
//       },
//       "success": true
//     }
//     * @apiError Error login
//     * @apiErrorExample Response (example):
//       {
//       "success": false,
//       "error": "invalid password"
//       }
//     */
// UserHandler.post('/login', UserController.login)

// /**
//  * @api {post} /users/resetPassword  user reset password
//  * @apiVersion 1.0.0
//  * @apiName user reset password
//  * @apiGroup Users-API
//  * @apiDescription API return user if success, error if failed 
//     * @apiParam (Request body) {String} phone_number required
//     * @apiExample {js} Example post body:
//     * {
//         "phone_number": "0168974456",
//     * }
//     * @apiSuccessExample Success-Response:
//     {
//     "data": {
//         "user": {
//             "id": 1,
//             "username": "thangluu",
//             "phone_number": "0938081669",
//             "email": "thang@mail.com",
//             "address": null,
//             "is_active": 1
//         }
//     },
//     "code": 0,
//     "message": "API success"
// }
// */
// UserHandler.post('/resetPassword', UserController.resetPassword)

// /**
//  * @api {post} /users/changePassword  user change password after reset
//  * @apiVersion 1.0.0
//  * @apiName user change password after reset
//  * @apiGroup Users-API
//  * @apiDescription API return user if success, error if failed 
//     * @apiHeaderExample {json} Header-Example:
//     *     {
//     *       "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsIn................"
//     *     }
//     * @apiParam (Request body) {String} phone_number required
//     * @apiExample {js} Example post body:
//     * {
//         "password": "0168974456",
//         "confirm_password": "0168974456"
//     * }
//     * @apiSuccessExample Success-Response:
//     {
//     "data": {
//         "user": {
//             "id": 1,
//             "username": "thangluu",
//             "phone_number": "0938081669",
//             "email": "thang@mail.com",
//             "address": null,
//             "is_active": 1
//         }
//     },
//     "code": 0,
//     "message": "API success"
// }
// */
// UserHandler.post('/changePassword', passportActiveUser, UserController.changePassword)

// /**
//  * @api {post} /users/changeNewPassword  user change password
//  * @apiVersion 1.0.0
//  * @apiName user change password
//  * @apiGroup Users-API
//  * @apiDescription API return user if success, error if failed 
//     * @apiHeader {String} Authorization Bearer eyJhbGciOiJIU...zI1NiIsInR5cCI6IkpXVCJ9...(Access token return from Register)
//     * @apiHeaderExample {json} Header-Example:
//     *     {
//     *       "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsIn................"
//     *     }
//     * @apiParam (Request body) {String} phone_number required
//     * @apiExample {js} Example post body:
//     * {
//     *   "old_password": "01234567"
//         "password": "0168974456",
//         "confirm_password": "0168974456"
//     * }
//     * @apiSuccessExample Success-Response:
//     {
//     "data": {
//         "user": {
//             "id": 1,
//             "username": "thangluu",
//             "phone_number": "0938081669",
//             "email": "thang@mail.com",
//             "address": null,
//             "is_active": 1
//         }
//     },
//     "code": 0,
//     "message": "API success"
// }
// */
// UserHandler.post('/changeNewPassword', passportActiveUser, UserController.changeNewPassword)

// /**
//  * @api {post} /users/verifyUpdatePhone  Verify to get phone code for updating.
//  * @apiVersion 1.0.0
//  * @apiName Verify phone number
//  * @apiHeader {String} Authorization Bearer eyJhbGciOiJIU...zI1NiIsInR5cCI6IkpXVCJ9...(Access token return from Login)
//  * @apiGroup Users-API
//  * @apiDescription API return update_phone_Token, it use for Update Phone API (After send SMS to user)
//     * @apiParam (Request body) {String} phone_number old phone number required
//     * @apiExample {js} Example post body:
//     * {
//         "phone_number": "0938081669"
//         "password": "123456",
//         "new_phone": "0369565144"  
//     * }
//     * @apiSuccessExample Success-Response:
//     {
//         "data": {
//             "CodeResult": "100",
//             "CountRegenerate": 0,
//             "SMSID": "138f4d6c-b48f-4811-95e7-b812335d021269",
//             "update_phone_Token": "eyJhbGciOiJIUzI1NiIsInRIjo.....JgFaQAQTfO204iu2yO8AAv5o"
//         },
//         "code": 0,
//         "message": "API success"
//     }
//     * @apiError Unauthorized Only for logged user
// */
// UserHandler.post('/verifyUpdatePhone', passportActiveUser, UserController.verifyUpdatePhone)

// /**
//  * @api {post} /users/updatePhone  Update Phone user by SMS code
//  * @apiVersion 1.0.0
//  * @apiName update phone by update_phone_Token and phone code
//  * @apiHeader {String} Authorization Bearer eyJhbGciOiJIU...zI1NiIsInR5cCI6IkpXVCJ9...(Access token return from Login)
//  * @apiGroup Users-API
//  * @apiDescription API return user updated phone if success, error if failed 
//     * @apiParam (Request body) {String} code required
//     * @apiParam (Request body) {String} new_phone required
//     * @apiParam (Request body) {String} update_phone_Token required
//     * @apiExample {js} Example post body:
//     * {
//         "code": 2570,
//         "new_phone": "0123456789",
//         "password": "123456",
//         "active_token": "eyJhbGciOiJIUzI1NiIsInRIjo.....JgFaQAQTfO204iu2yO8AAv5o"
//     * }
//     * @apiSuccessExample Success-Response:
//     {
//     "data": {
//         "user": {
//             "id": 1,
//             "fullname": "thanh tran",
//             "phone_number": "0123456789",
//             "email": "thanhtran@mail.com",
//             "address": null,
//             "is_deleted": 0,
//             "is_active": 1,
//             "updatedAt": "2018-07-11T06:36:40.762Z"
//         }
//     },
//     "code": 0,
//     "message": "API success"
// }
// */
// UserHandler.post('/updatePhone', passportActiveUser, UserController.updatePhone)

// /**
//  * @api {post} /users/loginAdmin  Login admin with unique id
//  * @apiVersion 1.0.0
//  * @apiName Login Admin
//  * @apiGroup Users-API
//  * @apiDescription Login Admin
//     * @apiExample {js} Example post body:
//     * {
//         "phone_number": "0938081669", // required
//         "password":"123456"           // required
//     * } 
//     * @apiSuccessExample Success-Response:
//     {
//         "data": {
//             "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE1MzI5MzE2MzIsImV4cCI6MTUzMjk0MTYzMn0.CmuK9Q1shNPhGmSMHzyfVdoBkBj2Vaoov799oFNYiFw",
//             "user": {
//                 "id": 1,
//                 "fullname": "Admin",
//                 "phone_number": "0123456789",
//                 "email": "admin@gvs.technology",
//                 "address": null,
//                 "is_active": 1,
//                 "is_deleted": 0,
//                 "default_bank_account_id": null,
//                 "user_type_id": 1,
//                 "name": "Admin"
//             }
//         },
//         "code": 0,
//         "message": "API success"
//     }
// */
// UserHandler.post('/loginAdmin', logInput, UserController.loginAdmin)

// /**
//  * @api {post} /users/overview_of_user  overview_of_user
//  * @apiVersion 1.0.0
//  * @apiName overview_of_user
//  * @apiGroup Users-API
//  * @apiDescription overview_of_user
//  * @apiHeader {String} Authorization Bearer eyJhbGciOiJIU...zI1NiIsInR5cCI6IkpXVCJ9...(Access token return from Login)
//     * @apiSuccessExample Success-Response:
//     {
//         "data": {
//             "loanAmount": 38000000,
//             "loanForAmount": 0,
//             "lastLoan": {
//                 "id": 7,
//                 "loan_application_status_id": 8,
//                 "locale": "vi",
//                 "name": "Đã Nhận Tiền"
//             },
//             "lastForLoan": null,
//             "lastContract": null,
//             "lastContractForLoan": null,
//             "percentLoanApproved": 60,
//             "total_disbursement": 38000000,
//             "account_balances": 480380000,
//             "percentProfile": 60,
//             "levelAccount": 2,
//             "name": "Vàng"
//         },
//         "code": 0,
//         "message": "Thay đổi Số điện thoại đăng nhập thành công"
//     }
// */
// UserHandler.post('/overview_of_user', passportActiveUser, logInput, UserController.overviewOfUser)

// /**
//  * @api {post} /users/updatePersonalInfor Update Personal infor
//  * @apiVersion 1.0.0
//  * @apiName Update Personal infor
//  * @apiGroup Users-API
//  * @apiDescription overview_of_user
//  * @apiHeader {String} Authorization Bearer eyJhbGciOiJIU...zI1NiIsInR5cCI6IkpXVCJ9...(Access token return from Login)
    
//  * @apiGroup Users-API
//  * @apiDescription API return user updated phone if success, error if failed 
//     * @apiExample {js} Example post body:
//     * {
//         "gender": 1, // 1: Ông, 2: Bà
//         "fullname": "tran thanh",
//         "phone_number2": "0123456987",
//         "email": "tranthanh@gmail.com",
//         "birthday": "1992-08-08T01:38:4",
//         "identify_number": "31212345678",
//         "identify_date": "2009-08-08T01:38:4",
//         "address": "123 Hưng Phú",
//         "country_id": 1, // truyền theo id
//         "city_id": 1,
//         "district_id": 1,
//         "document_links": { // json
//             "identity": ["cmnd_truoc.png", "cmnd_sau.png"], // nếu có chưng minh nhân dân.(không bắt buộc.)
//             "home": ["cutru1.png", "cutru2.png"] // nếu có hình ảnh cư trú. (ko bắt buộc)
//         }// nếu object rỗng truyền document_links = null.

//         // document type:
//         //identity: Chứng minh nhân dân.
//         //home: Hình Ảnh cư trú

//     * }
//     * @apiSuccessExample Success-Response:
//     {
//     "data": {
//         "personal_infor": {}
//     },
//     "code": 0,
//     "message": "API success"
// }
// */
// UserHandler.post('/updatePersonalInfor', passportActiveUser, logInput, UserController.updatePersonalInfor)

// /**
//  * @api {get} /users/getPersonalInfor/:id  get personal information for user
//  * @apiVersion 1.0.0
//  * @apiName get personal information for user
//  * @apiGroup Users-API
//  * @apiDescription get personal information for user
//     * @apiExample {js} Example post body:
//     * {
//         // param id: là user id.
//     * } 
//     * @apiSuccessExample Success-Response:
//     {
//         "data": {
//             "personal_infor": {
//                 "gender": 1,
//                 "gender_name": "Ông",
//                 "fullname": "tran thanh",
//                 "phone_number2": "0123456987",
//                 "email": "tranthanh@gmail.com",
//                 "birthday": null,
//                 "country_id": 1,
//                 "country_name": "Vietnamese",
//                 "identify_number": "31212345678",
//                 "identify_date": null,
//                 "address": "123 Hưng Phú",
//                 "city_id": 1,
//                 "city_name": "Hà Nội",
//                 "district_id": 1,
//                 "district_name": "Hoàng Mai",
//                 "document_links": [
//                     {
//                         "name": "Hình Ảnh Nhân Thân",
//                         "key": "identity",
//                         "images": [
//                             "cmd1.png",
//                             "cmd2.png"
//                         ],
//                         "description": "CMND, Hộ chiếu, Thẻ căn cước"
//                     },
//                     {
//                         "name": "Hình Ảnh Cư Trú",
//                         "key": "home",
//                         "images": [
//                             "cutru1.png",
//                             "cutru2.png",
//                             "cutr4.png"
//                         ],
//                         "description": "Hộ khẩu, KT3, Tạm trú, tạm vắng"
//                     }
//                 ]
//             }
//         },
//         "code": 0,
//         "message": "API success"
//     }
// */
// UserHandler.get('/getPersonalInfor/:id', passportActiveUser, logInput, UserController.getPersonalInfor)

// /**
//  * @api {get} /users/getTimeWorkAndIncome get working time and income monthly
//  * @apiVersion 1.0.0
//  * @apiName get working time and income monthly
//  * @apiGroup Users-API
//  * @apiDescription get working time and income monthly
//     * @apiExample {js} Example post body:
//     * {
//     * } 
//     * @apiSuccessExample Success-Response:
//     {
//         "data": {
//            "workingTimes": [
//                 {
//                     "rank": "Từ 1 - dưới 3 tháng"
//                 },
//                 {
//                     "rank": "Từ 3 - dưới 12 tháng"
//                 },
//                 {
//                     "rank": "Từ 1 - dưới 3 năm"
//                 },
//                 {
//                     "rank": "Từ 3 - dưới 5 năm"
//                 },
//                 {
//                     "rank": "Từ 5 năm trở lên"
//                 }
//             ],
//             "incomeMonthlys": [
//                 {
//                     "rank": "Dưới 6 Triệu"
//                 },
//                 {
//                     "rank": "Từ 6 - dưới 18 Triệu"
//                 },
//                 {
//                     "rank": "Từ 18 Triệu trở lên"
//                 }
//             ]
//         },
//         "code": 0,
//         "message": "API success"
//     }
// */
// UserHandler.get('/getTimeWorkAndIncome', logInput, UserController.getTimeWorkAndIncome)

// /**
//  * @api {post} /users/updateJobInfor update job information for user
//  * @apiVersion 1.0.0
//  * @apiName get job information for user
//  * @apiGroup Users-API
//  * @apiDescription get job information for user
//     * @apiExample {js} Example post body:
//     * {
//         "career": "IT",
//         "company_name": "tran thanh",
//         "company_address": "Bùi thị xuân",
//         "company_phone": "083456789",
//         "working_time": "Từ 1 - dưới 3 tháng",
//         "monthly_income": "Dưới 6 Triệu",
//         "document_job_links": { // json
//             "labor_contact": ["hdld1.png", "hdld2.png"], // nếu có hợp đồng lao động.(không bắt buộc.)
//             "salary_report": ["saokeluong1.png", "saokeluong2.png"] // nếu có sao kê lương. (ko bắt buộc)
//         }// nếu object rỗng truyền document_job_links = null.

//         // document type:
//         //labor_contact: Hợp đồng lao động.
//         //salary_report: Sao kê lương
//     * } 
//     * @apiSuccessExample Success-Response:
//     {
//         "data": {
//             "job_infor": {}
//         },
//         "code": 0,
//         "message": "API success"
//     }
// */
// UserHandler.post('/updateJobInfor', passportActiveUser, logInput, UserController.updateJobInfor)

// /**
//  * @api {get} /users/getJobInfor/:id  get job information for user
//  * @apiVersion 1.0.0
//  * @apiName get job information for user
//  * @apiGroup Users-API
//  * @apiDescription get job information for user
//     * @apiExample {js} Example post body:
//     * {
//         // param id: là user id.
//     * } 
//     * @apiSuccessExample Success-Response:
//     {
//         "data": {
//             "job_infor": {
//                 "id": 6,
//                 "career": "IT",
//                 "company_name": "tran thanh",
//                 "company_address": "Bùi thị xuân",
//                 "company_phone": "083456789",
//                 "working_time": "Từ 1 - dưới 3 tháng",
//                 "monthly_income": "Dưới 6 Triệu",
//                 "document_job_links": [
//                     {
//                         "name": "Hợp Đồng Lao Động",
//                         "key": "labor_contact",
//                         "images": [
//                             "hdld1.png",
//                             "hdld2.png"
//                         ],
//                         "description": ""
//                     },
//                     {
//                         "name": "Sao Kê Lương",
//                         "key": "salary_report",
//                         "images": [
//                             "saokeluong1.png",
//                             "saokeluong2.png"
//                         ],
//                         "description": ""
//                     }
//                 ]
//             }
//         },
//         "code": 0,
//         "message": "API success"
//     }
// */
// UserHandler.get('/getJobInfor/:id', passportActiveUser, logInput, UserController.getJobInfor)

// /**
//  * @api {get} /users/getSettingNotify  [GET SETTING NOTIFY] get setting notify
//  * @apiVersion 1.0.0
//  * @apiName get setting notify
//  * @apiGroup Users-API
//  * @apiDescription  get setting notify
//     * @apiExample {js} Example post body:
//     * {
//     * } 
//     * @apiSuccessExample Success-Response:
//     {
//         "data": {
//             "setings_notify": [
//                 {
//                     "enable_notify": 0, // 0: OFF, 1: ON
//                     "notify_type": 1,
//                     "message": "Thông báo khi đơn vay của tôi thay đổi thông tin"
//                 },
//                 {
//                     "enable_notify": 0,
//                     "notify_type": 2,
//                     "message": "Thông báo khi đơn cho vay của tôi thay đổi thông tin"
//                 },
//                 {
//                     "enable_notify": 0,
//                     "notify_type": 3,
//                     "message": "Thông báo khi có đơn vay mới phù hợp với cài đặt của tôi"
//                 }
//             ]
//         },
//         "code": 0,
//         "message": "API success"
//     }
// */
// UserHandler.get('/getSettingNotify', passportActiveUser, logInput, UserController.getSettingNotify)

// /**
//  * @api {post} /users/updateSettingNotify  [UPDATE SETTING NOTIFY] update setting notify
//  * @apiVersion 1.0.0
//  * @apiName update setting notify
//  * @apiGroup Users-API
//  * @apiDescription update setting notify
//     * @apiExample {js} Example post body:
//     * {
//         "notify_type": 1, // 1: Thông báo khi đơn vay của tôi thay đổi thông tin.
//                  // 2: Thông báo khi đơn cho vay của tôi thay đổi thông tin.
//                  // 3: Thông báo khi có đơn vay mới phù hợp với cài đặt của tôi.
//         "enable_notify": 1 // 1: On, 0: Off
//     * } 
//     * @apiSuccessExample Success-Response:
//     {
//         "data": {
//             "seting_notify": {
//                 "id": 3,
//                 "notify_type": 2,
//                 "enable_notify": 1,
//                 "user_id": 6,
//                 "createdAt": "2018-08-23T07:22:55.000Z",
//                 "updatedAt": "2018-08-23T07:37:28.673Z"
//             }
//         },
//         "code": 0,
//         "message": "API success"
//     }
// */
// UserHandler.post('/updateSettingNotify', passportActiveUser, logInput, UserController.updateSettingNotify)

// /**
//  * @api {post} /users/admin/rateUserByAdmin  [ADMIN] rating user
//  * @apiVersion 1.0.0
//  * @apiName [ADMIN] rating user
//  * @apiGroup Users-API
//  * @apiHeader {String} Authorization Bearer eyJhbGciOiJIU...zI1NiIsInR5cCI6IkpXVCJ9...(Access token return from Login)
//  * @apiDescription rating user
//     * @apiExample {js} Example post body:
//     * {
//         "user_id": 1,                               // user_id     required       
//         "rating_infor": {
//             "title":''                              // not require
//             "description": "người vay uy tín, tốt", // required
//             "rating": 5,                            // required   
//             "files" : ["abc.jpg"]
//         }
//     * } 
//     * @apiSuccessExample Success-Response:
//     {
//         "data": {
//             "user_rating": {
//                 "is_deleted": "0",
//                 "id": 8,
//                 "user_id": 6,
//                 "type": 2,
//                 "rating": 5,
//                 "rating_date": "2018-08-24T07:13:56.520Z",
//                 "description": "người vay uy tín, tốt",
//                 "files": "cmd1.png,cmd2.png",
//                 "updated_user_id": 1,
//                 "updatedAt": "2018-08-24T07:13:56.521Z",
//                 "createdAt": "2018-08-24T07:13:56.521Z"
//             }
//         },
//         "code": 0,
//         "message": "Đánh giá thành công"
//     }
//     * @apiError Unauthorized Only for logged user
// */

// UserHandler.post('/admin/rateUserByAdmin', passportAdmin, logInput, UserController.rateUserByAdmin)

// /**
//  * @api {post} /users/admin/updateRateUserByAdmin  [ADMIN] update rating user
//  * @apiVersion 1.0.0
//  * @apiName [ADMIN] update rating user
//  * @apiGroup Users-API
//  * @apiHeader {String} Authorization Bearer eyJhbGciOiJIU...zI1NiIsInR5cCI6IkpXVCJ9...(Access token return from Login)
//  * @apiDescription update rating user
//     * @apiExample {js} Example post body:
//     * {
//         "user_id": 1,                               // user_id     required       
//         "rating_infor": {
//             "title": 'Megalend đánh giá'            // not require
//             "description": "người vay uy tín, tốt", // required
//             "rating": 5,                            // required   
//             "files" : ["abc.jpg"]                   // not require
//         }
//     * } 
//     * @apiSuccessExample Success-Response:
//     {
//         "data": {
//             "user_rating": {
//                 "is_deleted": "0",
//                 "id": 8,
//                 "user_id": 6,
//                 "type": 2,
//                 "rating": 5,
//                 "rating_date": "2018-08-24T07:13:56.520Z",
//                 "description": "người vay uy tín, tốt",
//                 "files": "cmd1.png,cmd2.png",
//                 "updated_user_id": 1,
//                 "updatedAt": "2018-08-24T07:13:56.521Z",
//                 "createdAt": "2018-08-24T07:13:56.521Z"
//             }
//         },
//         "code": 0,
//         "message": "Cập nhật đánh giá người dùng thành công"
//     }
//     * @apiError Unauthorized Only for logged user
// */

// UserHandler.post('/admin/updateRateUserByAdmin', passportAdmin, logInput, UserController.updateRateUserByAdmin)

// /**
//  * @api {post} /users/admin/getRateByAdmin  [ADMIN] get rating by admin
//  * @apiVersion 1.0.0
//  * @apiName [ADMIN] get rating by admin
//  * @apiGroup Users-API
//  * @apiHeader {String} Authorization Bearer eyJhbGciOiJIU...zI1NiIsInR5cCI6IkpXVCJ9...(Access token return from Login)
//  * @apiDescription get rating by admin
//     * @apiExample {js} Example post body:
//     * {
//         "user_id": 5 // user được đánh giá
//     * } 
//     * @apiSuccessExample Success-Response:
//     {
//         "data": {
//             "rating": {
//                 "user_infor": [
//                     {
//                         "address": null,
//                         "district_id": 1,
//                         "district_name": "Hoàng Mai",
//                         "city_id": 1,
//                         "city_name": "Hà Nội",
//                         "fullname": "Nguoi di mượn",
//                         "phone_number": "0123456788"
//                     }
//                 ],
//                 "admin_rating": [
//                     {
//                         "id": 8,
//                         "rating": 5,
//                         "rating_date": "2018-08-24T07:47:55.000Z",
//                         "title": "dfsdfsdf",
//                         "description": "rat te",
//                         "files": [
//                             "http://qc.megalend.tk:3000/file/cmd1.png",
//                             "http://qc.megalend.tk:3000/file/cmd3.png"
//                         ]
//                     }
//                 ],
//                 "user_rating": [
//                     {
//                         "id": 9,
//                         "rating": 4,
//                         "rating_date": "2018-08-22T15:19:58.000Z",
//                         "title": null,
//                         "description": "tot",
//                         "files": null,
//                         "fullname": "Nguoi di m***",
//                         "phone_number": "0123456***"
//                     },
//                     {
//                         "id": 10,
//                         "rating": 3,
//                         "rating_date": "2018-08-23T15:23:38.000Z",
//                         "title": null,
//                         "description": "tam on",
//                         "files": [
//                             "http://qc.megalend.tk:3000/file/cmd2.png"
//                         ],
//                         "fullname": "Nguoi di v**",
//                         "phone_number": "0123456***"
//                     },
//                     {
//                         "id": 11,
//                         "rating": 1,
//                         "rating_date": "2018-08-08T15:25:33.000Z",
//                         "title": null,
//                         "description": "nguoi dung tot",
//                         "files": null,
//                         "fullname": "Lưu Ngọc Ý",
//                         "phone_number": "098800039***"
//                     }
//                 ]
//             }
//         },
//         "code": 0,
//         "message": "Cập nhật đánh giá người dùng thành công"
//     }
//     * @apiError Unauthorized Only for logged user
// */

// UserHandler.post('/admin/getRateByAdmin', passportAdmin, logInput, UserController.getRateByAdmin)

// /**
//  * @api {post} /users/admin/deleteRateUserByAdmin/:id [ADMIN] delete rating user by admin
//  * @apiVersion 1.0.0
//  * @apiName delete rating user by admin
//  * @apiGroup Users-API
//  * @apiHeader {String} Authorization Bearer eyJhbGciOiJIU...zI1NiIsInR5cCI6IkpXVCJ9...(Access token return from Login)
//  * @apiDescription delete rating user by admin
//     * @apiExample {js} Example post body:
//     * {
//     * } 
//     * @apiSuccessExample Success-Response:
//     {
//         "data": {
//             "user_rating": {
//                "id": 16,
//                 "user_id": 5,
//                 "type": 2,
//                 "target_id": null,
//                 "rating": 4,
//                 "rating_date": "2018-08-27T03:13:25.468Z",
//                 "description": "hehe",
//                 "files": "",
//                 "updated_user_id": 6,
//                 "is_deleted": 1,
//                 "createdAt": "2018-08-27T02:52:03.000Z",
//                 "updatedAt": "2018-08-27T03:13:25.471Z"
//             }
//         },
//         "code": 0,
//         "message": "Xóa đánh giá người dùng thành công"
//     }
//     * @apiError Unauthorized Only for logged user
// */

// UserHandler.post('/admin/deleteRateUserByAdmin/:id', passportAdmin, logInput, UserController.deleteRateUserByAdmin)

// /**
//  * @api {post} /users/getRatingByUser get rating by user
//  * @apiVersion 1.0.0
//  * @apiName get rating by user
//  * @apiGroup Users-API
//  * @apiHeader {String} Authorization Bearer eyJhbGciOiJIU...zI1NiIsInR5cCI6IkpXVCJ9...(Access token return from Login)
//  * @apiDescription get rating by user
//     * @apiExample {js} Example post body:
//     * {
//         "user_id": 1,               // user_id     required    user bị xem thông tin đánh giá
//         "loan_id": 2                // loan_id lấy đánh giá trên đơn id: 2
//     * } 
//     * @apiSuccessExample Success-Response:
//     {
//         "data": {
//             "rating": {
//                 "isContact": true, // true: user từng giao dịch, false: user chưa từng giao dịch
//                 "user_infor": [
//                     {
//                         "address": null,
//                         "district_id": null,
//                         "district_name": null,
//                         "city_id": null,
//                         "city_name": null,
//                         "fullname": "Nguoi di mượn",
//                         "phone_number": "0123456788"
//                     }
//                 ],
//                 "admin_rating": [
//                     {
//                         "id": 8,
//                         "rating": 5,
//                         "rating_date": "2018-08-24T07:47:55.000Z",
//                         "title": "dfsdfsdf",
//                         "description": "rat te",
//                         "files": [
//                             "http://qc.megalend.tk:3000/file/cmd1.png",
//                             "http://qc.megalend.tk:3000/file/cmd3.png"
//                         ]
//                     }
//                 ],
//                 "user_rating": [
//                     {
//                         "id": 9,
//                         "rating": 4,
//                         "rating_date": "2018-08-22T15:19:58.000Z",
//                         "title": null,
//                         "description": "tot",
//                         "files": null,
//                         "phone_number": "0123456***"
//                     },
//                     {
//                         "id": 10,
//                         "rating": 3,
//                         "rating_date": "2018-08-23T15:23:38.000Z",
//                         "title": null,
//                         "description": "tam on",
//                         "files": [
//                             "http://qc.megalend.tk:3000/file/cmd2.png"
//                         ],
//                         "phone_number": "0123456***"
//                     },
//                     {
//                         "id": 11,
//                         "rating": 1,
//                         "rating_date": "2018-08-08T15:25:33.000Z",
//                         "title": null,
//                         "description": "nguoi dung tot",
//                         "files": null,
//                         "phone_number": "098800039***"
//                     }
//                 ],
//                 "loans_completed": [ // danh sách đơn mà borrower và lender từng hoàn tất và chưa được đánh giá
//                     {
//                         "loan_id": 2
//                     },
//                     {
//                         "loan_id": 3
//                     }
//                 ]
//             }
//         },
//         "code": 0,
//         "message": "API thành công"
//     }
//     * @apiError Unauthorized Only for logged user
// */

// UserHandler.post('/getRatingByUser', passportActiveUser, logInput, UserController.getRatingByUser)

// /**
//  * @api {post} /users/rateUserByUser rate user by another user
//  * @apiVersion 1.0.0
//  * @apiName rate user by another user
//  * @apiGroup Users-API
//  * @apiHeader {String} Authorization Bearer eyJhbGciOiJIU...zI1NiIsInR5cCI6IkpXVCJ9...(Access token return from Login)
//  * @apiDescription rate user by another user
//     * @apiExample {js} Example post body:
//     * {
//         "user_id": 1,                               // user_id     required : user bị đánh giá
//         "loan_id": 3,                               // don vay can danh gia
//         "rating_infor": {
//             "title":''                              // not require
//             "description": "người vay uy tín, tốt", // required
//             "rating": 5,                            // required   
//             "files" : ["abc.jpg"]                   // not require
//         }
//     * } 
//     * @apiSuccessExample Success-Response:
//     {
//         "data": {
//             "user_rating": {
//                 "is_deleted": "0",
//                 "id": 16,
//                 "user_id": 5,
//                 "type": 2,
//                 "rating": 5,
//                 "rating_date": "2018-08-28T04:18:39.503Z",
//                 "title": "",
//                 "description": "người vay uy tín, tốt",
//                 "files": "abc.jpg",
//                 "updated_user_id": 6,
//                 "target_id": 3,
//                 "updatedAt": "2018-08-28T04:18:39.506Z",
//                 "createdAt": "2018-08-28T04:18:39.506Z"
//             }
//         },
//         "code": 0,
//         "message": "Đánh giá người dùng thành công"
//     }
//     * @apiError Unauthorized Only for logged user
// */

// UserHandler.post('/rateUserByUser', passportActiveUser, logInput, UserController.rateUserByUser)

// /**
//  * @api {post} /users/updateRateUserByUser  update rating user by another user
//  * @apiVersion 1.0.0
//  * @apiName update rating user by another user
//  * @apiGroup Users-API
//  * @apiHeader {String} Authorization Bearer eyJhbGciOiJIU...zI1NiIsInR5cCI6IkpXVCJ9...(Access token return from Login)
//  * @apiDescription update rating user by another user
//     * @apiExample {js} Example post body:
//     * {
//         "user_id": 1,                               // user_id     required    user bị đánh giá 
//         "loan_id": 3,                               // don vay can update
//         "rating_infor": {
//             "title": 'Megalend đánh giá'            // not require
//             "description": "người vay uy tín, tốt", // required
//             "rating": 5,                            // required   
//             "files" : ["abc.jpg"]                   // not require
//         }
//     * } 
//     * @apiSuccessExample Success-Response:
//     {
//         "data": {
//             "user_rating": {
//                 "id": 16,
//                 "user_id": 5,
//                 "type": 2,
//                 "target_id": null,
//                 "rating": 4,
//                 "rating_date": "2018-08-27T03:13:25.468Z",
//                 "description": "hehe",
//                 "files": "",
//                 "updated_user_id": 6,
//                 "is_deleted": 0,
//                 "createdAt": "2018-08-27T02:52:03.000Z",
//                 "updatedAt": "2018-08-27T03:13:25.471Z"
//             }
//         },
//         "code": 0,
//         "message": "Cập nhật đánh giá người dùng thành công"
//     }
//     * @apiError Unauthorized Only for logged user
// */

// UserHandler.post('/updateRateUserByUser', passportActiveUser, logInput, UserController.updateRateUserByUser)

// /**
//  * @api {post} /users/deleteRateUserByUser/:id delete rating user by user
//  * @apiVersion 1.0.0
//  * @apiName delete rating user by user
//  * @apiGroup Users-API
//  * @apiHeader {String} Authorization Bearer eyJhbGciOiJIU...zI1NiIsInR5cCI6IkpXVCJ9...(Access token return from Login)
//  * @apiDescription delete rating user by user
//     * @apiExample {js} Example post body:
//     * {
//     * } 
//     * @apiSuccessExample Success-Response:
//     {
//         "data": {
//             "user_rating": {
//                "id": 16,
//                 "user_id": 5,
//                 "type": 2,
//                 "target_id": null,
//                 "rating": 4,
//                 "rating_date": "2018-08-27T03:13:25.468Z",
//                 "description": "hehe",
//                 "files": "",
//                 "updated_user_id": 6,
//                 "is_deleted": 1,
//                 "createdAt": "2018-08-27T02:52:03.000Z",
//                 "updatedAt": "2018-08-27T03:13:25.471Z"
//             }
//         },
//         "code": 0,
//         "message": "Xóa đánh giá người dùng thành công"
//     }
//     * @apiError Unauthorized Only for logged user
// */

// UserHandler.post('/deleteRateUserByUser/:id', passportActiveUser, logInput, UserController.deleteRateUserByUser)

// /**
//  * @api {post} /users/admin/getUserNameByPhone  [ADMIN] get username by phone
//  * @apiVersion 1.0.0
//  * @apiName [ADMIN] get username by phone
//  * @apiGroup Users-API
//  * @apiHeader {String} Authorization Bearer eyJhbGciOiJIU...zI1NiIsInR5cCI6IkpXVCJ9...(Access token return from Login)
//  * @apiDescription get username by phone
//     * @apiExample {js} Example post body:
//     * {
//         "phone_number": "0123456789",                               // phome_number     required       
//     * } 
//     * @apiSuccessExample Success-Response:
//     {
//         "data": {
//             "user_infor": {
//                 fullname: "ThanhTran"
//             }
//         },
//         "code": 0,
//         "message": "API thành công"
//     }
// */
// UserHandler.post('/admin/getUserNameByPhone', passportAdmin, logInput, UserController.getUserNameByPhone)

// /**
//  * @api {post} /users/admin/createOrUpdate [Admin] create or update user
//  * @apiVersion 1.0.0
//  * @apiName [Admin] create or update user
//  * @apiGroup Users-API
//  * @apiHeader {String} Authorization Bearer eyJhbGciOiJIU...zI1NiIsInR5cCI6IkpXVCJ9...(Access token return from Login)
//  * @apiDescription [Admin] create or update user
//     * @apiExample {js} Example post body:
//     *{
//         "id": 13,
//         "email": "tlvduc@gmail.com",
//         "password": "123456",
//         "phone_number": "0844727252",
//         "fullname": "Trần Đức",
//         "gender": 1,
//         "phone_number2": "0123456987",
//         "birthday": "1992-08-08T01:38:4",
//         "identify_number": "31212345678",
//         "identify_date": "2009-08-08T01:38:4",
//         "address": "123 Hưng Phú",
//         "country_id": 1,
//         "city_id": 1,
//         "district_id": 1,
//         "document_links": { 
//             "identity": ["cmnd_truoc.png", "cmnd_sau.png"], 
//             "home": ["cutru1.png", "cutru2.png"] 
//         },
//         "career": "IT",
//         "company_name": "tran thanh",
//         "company_address": "Bùi thị xuân",
//         "company_phone": "083456789",
//         "working_time": "Từ 1 - dưới 3 tháng",
//         "monthly_income": "Dưới 6 Triệu",
//         "document_job_links": {
//             "labor_contact": ["hdld1.png", "hdld2.png"],
//             "salary_report": ["saokeluong1.png", "saokeluong2.png"]
//         }
//     }
//     * @apiSuccessExample Success-Response:
//     {
//       "message": "Successfully created new user.",
//       "user": {
//           "id": 1,
//           "fullname": "thanhtran",
//           "phone_number": "0938081669",
//           "updatedAt": "2018-06-27T06:06:21.158Z",
//           "createdAt": "2018-06-27T06:06:21.158Z"
//       },
//       "code": 0
//     }
// */

// UserHandler.post('/admin/createOrUpdate', passportAdmin, logInput, UserController.adminCreateOrUpdateUser)

// /**
//  * @api {post} /users/admin/userDetail  [Admin] get user info by id
//  * @apiVersion 1.0.0
//  * @apiName [Admin] get user info by id
//  * @apiGroup Users-API
//  * @apiHeader {String} Authorization Bearer eyJhbGciOiJIU...zI1NiIsInR5cCI6IkpXVCJ9...(Access token return from Login)
//  * @apiDescription [Admin] get user info by id
//     * @apiExample {js} Example post body:
//     * {
//     *   "id": 1,                      // required
//     * } 
//     * @apiSuccessExample Success-Response:
//     {
//       "user": {
//           "id": 1,
//           "name": "Thang",
//           "username": "thangluu",
//           "phone_number": "0938081669",
//           "email": "thang@mail.com",
//           "address": null
//       },
//       "success": true
//     }
//     * @apiError Unauthorized Only for logged user
// */

// UserHandler.post('/admin/userDetail', passportAdmin, logInput, UserController.adminGetUserDetail)

// /**
//  * @api {post} /users/admin/getUsers  [Admin] get users 
//  * @apiVersion 1.0.0
//  * @apiName [Admin] get users
//  * @apiGroup Users-API
//  * @apiHeader {String} Authorization Bearer eyJhbGciOiJIU...zI1NiIsInR5cCI6IkpXVCJ9...(Access token return from Login)
//  * @apiDescription [Admin] get users
//     * @apiExample {js} Example post body:
//     * {
//     *   "keyword": "fullname || phone"
//     *   "page": 1,
//     *   "limit": 12,
//     *   "filter": { 
//     *      "is_deleted": 1,
//     *      "user_type_id": 1,
//     *      "gender": 1,
//     *      "is_active": 1,
//     *      "city_id": 1,
//     *      "district_id": 1,
//     *      "country_id": 1
//     *   }
//     * } 
//     * @apiSuccessExample Success-Response:
//     {
//       "users": [{
//           "id": 1,
//           "name": "Thang",
//           "username": "thangluu",
//           "phone_number": "0938081669",
//           "email": "thang@mail.com",
//           "address": null
//       }],
//       "success": true
//     }
//     * @apiError Unauthorized Only for logged user
// */

// UserHandler.post('/admin/getUsers', passportAdmin, logInput, UserController.adminGetUsers)

// /**
//  * @api {post} /users/admin/removeUser  [Admin] remove user
//  * @apiVersion 1.0.0
//  * @apiName [Admin] remove user
//  * @apiGroup Users-API
//  * @apiHeader {String} Authorization Bearer eyJhbGciOiJIU...zI1NiIsInR5cCI6IkpXVCJ9...(Access token return from Login)
//  * @apiDescription [Admin] remove user
//     * @apiExample {js} Example post body:
//     * {
//     *   "id": 1
//     * } 
//     * @apiSuccessExample Success-Response:
//     {
//       "user": {
//           "id": 1,
//           "name": "Thang",
//           "username": "thangluu",
//           "phone_number": "0938081669",
//           "email": "thang@mail.com",
//           "address": null,
//           "is_deleted": 1
//       },
//       "success": true
//     }
//     * @apiError Unauthorized Only for logged user
// */

// UserHandler.post('/admin/removeUser', passportAdmin, logInput, UserController.adminRemoveUser)

module['exports'] = UserHandler
