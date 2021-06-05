import http from '../config/http';

export const getAllCategories = () => http.get('/categories');

export const createCategory = (data, config = {}) => http.post('/categories', data, config);