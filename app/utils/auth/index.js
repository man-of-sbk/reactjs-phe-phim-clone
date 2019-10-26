/* eslint-disable prettier/prettier */
import { accessToken } from 'services/constants';

export const setToken = token => localStorage.setItem(accessToken, token);
