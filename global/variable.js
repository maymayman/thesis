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

  AUTHENTICATE: 1999,
}

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
  [ErrorCode.USER_COMPANY_INVALID]: 'company do not blank',
  [ErrorCode.PERMISSION_DENIED]: 'permission denied'
}
