/* eslint-disable prettier/prettier */
export const subStr = (targetStr, maxLength, prefix = '...') => {
  const validChars = targetStr.split(/\s+/, maxLength);

  const newStr = validChars.join(' ');
  return newStr + (targetStr.length > newStr.length && prefix);
};
