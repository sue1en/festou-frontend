import http from '../config/http';
const baseUrl = '/categorias'

//as rotas "/categorias irão mudar para "/categories" (a fazer)
//rodas ativar, desativar e eletar categoria ainda não foram feitas

export const getAllCategorySvc = () => http.get(baseUrl);

export const getByIdCategorySvc = (categoryId) => http.get(`${baseUrl}/${categoryId}`);

export const createCategorySvc = (data, config = {}) => http.post(baseUrl, data, config);

export const updateCategorySvc = (categoryId, data, config = {}) => http.put(`${baseUrl}/${categoryId}`, data, config);

export const activateCategorySvc = (categoryId) => http.put(`${baseUrl}/${categoryId}/ativa`);

export const deactivateCategorySvc = (categoryId) => http.put(`${baseUrl}/${categoryId}/inativa`);

export const deleteCategorySvc = (categoryId) => http.delete(`${baseUrl}/${categoryId}/delete`);
