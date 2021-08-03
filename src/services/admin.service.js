import http from '../config/http'

const baseURL = '/systemadmin'

export const getAllAdminSvc = () => http.get(baseURL);
export const getByIdAdminSvc = (adminId) => http.get(`${baseURL}/${adminId}`);
