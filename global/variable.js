ErrorCode = {
  API_SUCCESS: 0,
  JWT_EXPIRED: 1000,
  OBJECT_SAVE_FAILED: 1001,
  USERNAME_ALREADY_EXISTS: 1002,
  EMAIL_ALREADY_EXISTS: 1003,
  OTHER_ERROR: 1004,

  USER_NAME_INVALID: 1005,
  USER_PASSWORD_INVALID: 1006,
  USER_ROLE_INVALID: 1007,
  EMAIL_INVALID: 1008,
  USER_GENDER_INVALID: 1009,
  USER_NOT_EXISTS: 1010,
  USER_NAME_OR_PASSWORD_INVALID: 1011,
  TYPE_USER_INVALID: 1012,
  USER_COMPANY_INVALID: 1013,
  PERMISSION_DENIED: 1014,
  URL_PATH_INVALID: 1015,
  
  PROJECT_TITLE_INVALID: 2001,
  PROJECT_DOES_NOT_EXISTS: 2002,
  PROJECT_ID_IS_REQUIRE: 2003,
  PROJECT_ID_OR_COMMENT_ID_IS_REQUIRE: 2004,
  
  COUNTRY_INVALID: 3001,
  COUNTRY_ALREADY_EXISTS: 3002,
  COUNTRY_DOES_NOT_EXISTS: 3003,
  
  CATEGORY_INVALID: 4001,
  CATEGORY_ALREADY_EXISTS: 4002,
  CATEGORY_DOES_NOT_EXISTS: 4003,
  
  PERCENT_DONATE_INVALID: 5001,
  MISSING_MONEY_DONATE: 5002,
  MISSING_PERCENT_DONATE: 5003,
  MISSING_USER_DONATE: 5004,
  MISSING_AMOUNT_DONATE: 5005,
  AMOUNT_DONATE_NOT_SUITABLE: 5006,
  
  TYPE_COMMENT_INVALID: 6001,
  COMMENT_NO_EXITS: 6002,
  
  FOLLOW_NO_EXITS: 7001,
  
  LIKE_NO_EXITS: 8001,
  
  NOTIFICATION_ID_IS_REQUIRE: 9001,
  NOTIFICATION_NO_EXITS: 9002,
  IS_READ_TYPE_BOOLEAN: 9003,
  
  
  AUTHENTICATE: 1999,
};

ErrorMessage = {
  [ErrorCode.API_SUCCESS]: 'API success.',
  [ErrorCode.JWT_EXPIRED]: 'Session token expired.',
  [ErrorCode.OBJECT_SAVE_FAILED]: 'Failed while save object',
  [ErrorCode.USERNAME_ALREADY_EXISTS]: 'username is already exists',
  [ErrorCode.USER_PASSWORD_INVALID]: 'password invalid',
  [ErrorCode.USER_NAME_INVALID]: 'usename invalid',
  [ErrorCode.USER_ROLE_INVALID]: 'user`s role invalid',
  [ErrorCode.EMAIL_INVALID]: 'email invalid',
  [ErrorCode.EMAIL_ALREADY_EXISTS]: 'email is already exists',
  [ErrorCode.USER_GENDER_INVALID]: 'user`s gender invalid',
  [ErrorCode.AUTHENTICATE]: 'uauthenticate failed',
  [ErrorCode.USER_NOT_EXISTS]: 'user`s account not exists',
  [ErrorCode.USER_NAME_OR_PASSWORD_INVALID]: 'username or password invalid',
  [ErrorCode.TYPE_USER_INVALID]: 'type of user invalid',
  [ErrorCode.USER_COMPANY_INVALID]: 'user role invalid',
  [ErrorCode.PERMISSION_DENIED]: 'permission denied',
  [ErrorCode.PROJECT_TITLE_INVALID]: 'title do not blank',
  [ErrorCode.COUNTRY_INVALID]: 'country invalid',
  [ErrorCode.CATEGORY_INVALID]: 'category invalid',
  [ErrorCode.CATEGORY_ALREADY_EXISTS]: 'category is already exists',
  [ErrorCode.COUNTRY_ALREADY_EXISTS]: 'country is already exists',
  [ErrorCode.CATEGORY_DOES_NOT_EXISTS]: 'category does not exists',
  [ErrorCode.COUNTRY_DOES_NOT_EXISTS]: 'country does not exists',
  [ErrorCode.PROJECT_DOES_NOT_EXISTS]: 'project does not exists',
  [ErrorCode.MISSING_MONEY_DONATE]: 'missing money to donate',
  [ErrorCode.MISSING_PERCENT_DONATE]: 'missing percent to donate',
  [ErrorCode.MISSING_AMOUNT_DONATE]: 'missing amount to donate',
  [ErrorCode.AMOUNT_DONATE_NOT_SUITABLE]: 'amount to donate not suitable',
  [ErrorCode.PERCENT_DONATE_INVALID]: 'percent donate invalid',
  [ErrorCode.MISSING_USER_DONATE]: 'missing user donate',
  [ErrorCode.TYPE_COMMENT_INVALID]: 'type comment invalid',
  [ErrorCode.COMMENT_NO_EXITS]: 'comment no exits',
  [ErrorCode.PROJECT_ID_IS_REQUIRE]: 'projectId is require',
  [ErrorCode.PROJECT_ID_OR_COMMENT_ID_IS_REQUIRE]: 'projectId or commentId is require',
  [ErrorCode.FOLLOW_NO_EXITS]: 'follow does not exists',
  [ErrorCode.LIKE_NO_EXITS]: 'like does not exists',
  [ErrorCode.NOTIFICATION_ID_IS_REQUIRE]: 'notificationId is require',
  [ErrorCode.IS_READ_TYPE_BOOLEAN]: 'is_read type is boolean',
  [ErrorCode.NOTIFICATION_NO_EXITS]: 'notification does not exists',
  [ErrorCode.URL_PATH_INVALID]: 'path url invalid',
  
};
