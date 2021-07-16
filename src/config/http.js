import axios from 'axios';
import { getToken } from './auth';
import store from '../store';
import { signOutAction } from '../store/auth/auth.action'

const urlApi = process.env.REACT_APP_API + '/v1';
// const urlApi = "http://localhost:3333/v1";

const http = axios.create({
  baseURL:urlApi
});

http.defaults.headers['content-type'] = 'application/json'
if (getToken()) {
  http.defaults.headers['token'] = getToken()
};

http.interceptors.response.use(
  (response) => response,
  (error) => {
    switch (error.response.status) {
      case 401:
        store.dispatch(signOutAction())
        break
        default:
          break
        }
    return Promise.reject(error.response);
  }
);
  
export default http;