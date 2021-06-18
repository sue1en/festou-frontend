import http from '../config/http';
const baseUrl = '/categorias'

//as rotas "/categorias irão mudar para "/categories" (a fazer)
//rodas ativar, desativar e eletar categoria ainda não foram feitas

export const getAllCategorySvc = () => http.get(baseUrl);

export const getByIdCategorySvc = (categoryId) => http.get(`${baseUrl}/${categoryId}`);

export const createCategorySvc = (data, config = {}) => http.post(baseUrl, data, config);

export const updateCategorySvc = (id, data, config = {}) => http.put(`${baseUrl}/${id}`, data, config);

export const activateCategorySvc = (id) => http.put(`${baseUrl}/${id}/ativa`);

export const deactivateCategorySvc = (id) => http.put(`${baseUrl}/${id}/inativa`);

export const deleteCategorySvc = (id) => http.delete(`${baseUrl}/${id}/delete`);
