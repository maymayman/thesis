ErrorCode = {
  API_SUCCESS: 0,
  JWT_EXPIRED: 1000,
  OBJECT_SAVE_FAILED: 1001,
  USERNAME_ALREADY_EXISTS: 1002,
  EMAIL_ALREADY_EXISTS: 1003,
  OTHER_ERROR: 1004
}

ErrorMessage = {
  [ErrorCode.API_SUCCESS]: 'API success.',
  [ErrorCode.JWT_EXPIRED]: 'Session token expired.',
  [ErrorCode.OBJECT_SAVE_FAILED]: 'Failed while save object',
  [ErrorCode.USERNAME_ALREADY_EXISTS]: 'username is already exists',
  [ErrorCode.EMAIL_ALREADY_EXISTS]: 'email is already exists',
}
