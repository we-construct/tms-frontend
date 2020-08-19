export const RESET_PASSWORD = 'RESET_PASSWORD';
export const IS_PASSWORD_RESET = 'IS_PASSWORD_RESET';

export const resetPassword = (email) => ({ type: RESET_PASSWORD, email });
export const setIsPasswordReset = (isReset) => ({
  type: IS_PASSWORD_RESET,
  isReset,
});
