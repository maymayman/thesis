ErrorCode = {
  API_SUCCESS: 0,
  JWT_EXPIRED: 1000,
  OBJECT_SAVE_FAILED: 1001,
  USERNAME_ALREADY_EXISTS: 1002,
  EMAIL_ALREADY_EXISTS: 1003,
  OTHER_ERROR: 1004,
  PERMISSION_DENIED: 1005,

  USER_NAME_INVALID: 2005,
  USER_PASSWORD_INVALID: 2006,
  USER_ROLE_INVALID: 2007,
  EMAIL_INVALID: 2008,
  USER_GENDER_INVALID: 2009,
  USER_NOT_EXISTS: 2010,
  USER_NAME_OR_PASSWORD_INVALID: 2011,

  AUTHENTICATE: 1999,
}

ErrorMessage = {
  [ErrorCode.API_SUCCESS]: 'API success.',
  [ErrorCode.JWT_EXPIRED]: 'Session token expired.',
  [ErrorCode.PERMISSION_DENIED]: 'Permission denied.',
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
  [ErrorCode.USER_NAME_OR_PASSWORD_INVALID]: 'username or password invalid'
}
