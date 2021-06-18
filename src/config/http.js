import axios from 'axios';
import { getToken } from './storage';
import store from '../store';
import { signOut } from '../store/auth/auth.action'
import storage from './storage'

const urlApi = process.env.REACT_APP_API;
// const urlApi = "http://localhost:3333/v1";


const http = axios.create({
  baseURL:urlApi
})

http.defaults.headers['content-type'] = 'application/json'
if (getToken()) {
  http.defaults.headers.token = getToken()
}

http.interceptors.response.use(
  (response) => response,
  (error) => {
    switch (error.response.status) {
      case 401:
        store.dispatch(signOut())
        break
      default:
        break
    }
  }
)

export default http;