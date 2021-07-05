import http from '../config/http'
const baseUrl = '/products'

export const getAllProductSvc = () => http.get(baseUrl);

export const getByIdProductSvc = (id) => http.get(`${baseUrl}/${id}`);
