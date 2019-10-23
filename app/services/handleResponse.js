/* eslint-disable prettier/prettier */
/* eslint-disable radix */
export const isResponseFailed = response => {
  const resStatusFirstDigit = parseInt(response.status.toString()[0]);

  if (resStatusFirstDigit === 4 || resStatusFirstDigit === 5) return true;

  return false;
};
