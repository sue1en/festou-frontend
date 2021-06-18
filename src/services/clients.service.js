import http from '../config/http'

const baseUrl = '/clients'

export const getAllClientSvc = () => http.get(baseUrl);

export const getByIdClientSvc = (id) => http.get(`${baseUrl}/${id}`);

export const createClientSvc = (data, config = {}) => http.post(baseUrl, data, config);

export const updateClientSvc = (id, data, config = {}) => http.put(`${baseUrl}/${id}`, data, config);

export const activateClientSvc = (id) => http.put(`${baseUrl}/${id}/ativa`);

export const deactivateClientSvc = (id) => http.put(`${baseUrl}/${id}/inativa`);

export const deleteSupplierSvc = (id) => http.delete(`${baseUrl}/${id}/delete`);