import axios from 'axios';

export const fetchData = (method, options) =>
  axios
    .request({
      method,
      ...options,
    })
    .then(res => Promise.resolve(res))
    .catch(err => Promise.reject(err));
