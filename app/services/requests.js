/* eslint-disable prettier/prettier */
import { requestHelper } from './requestHelper';

export const requests = {
  get(options) {
    return requestHelper({ method: 'GET', options })
  },
  post(options) {
    return requestHelper({ method: 'POST', options })
  },
  put(options) {
    return requestHelper({ method: 'PUT', options })
  },
  patch(options) {
    return requestHelper({ method: 'PATCH', options })
  },
  delete(options) {
    return requestHelper({ method: 'DELETE', options })
  },
}