import http from '../config/http'

const baseUrl = '/clients'

export const getAllClientSvc = () => http.get(baseUrl);

export const getByIdClientSvc = (clientId) => http.get(`${baseUrl}/${clientId}`);

export const createClientSvc = (data, config = {}) => http.post(baseUrl, data, config);

export const updateClientSvc = (clientId, data, config = {}) => http.put(`${baseUrl}/${clientId}`, data, config);

export const activateClientSvc = (clientId) => http.put(`${baseUrl}/${clientId}/ativa`);

export const deactivateClientSvc = (clientId) => http.put(`${baseUrl}/${clientId}/inativa`);

export const deleteSupplierSvc = (clientId) => http.delete(`${baseUrl}/${clientId}/delete`);