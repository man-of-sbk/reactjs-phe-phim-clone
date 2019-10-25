export const compareToPwd = (rule, value, callback) => {
  if (value && value !== form.getFieldValue('password')) {
    callback('Mật khẩu không chính xác');
  } else {
    callback();
  }
};
