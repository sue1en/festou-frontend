import http from '../config/http';

export const getAllCategorySvc = () => http.get('/categorias');

export const createCategorySvc = (data, config = {}) => http.post('/categorias', data, config);