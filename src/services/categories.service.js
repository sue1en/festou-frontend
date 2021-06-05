import http from '../config/http';

export const getAllCategories = () => http.get('/categorias');

export const createCategory = (data, config = {}) => http.post('/categorias', data, config);