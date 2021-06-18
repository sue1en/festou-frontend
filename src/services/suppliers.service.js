import http from '../config/http';

const baseUrl = '/supplier'

export const getAllSupplierSvc = () => http.get(baseUrl);

export const getByIdSupplierSvc = (id) => http.get(`${baseUrl}/${id}`);

export const createSupplierSvc = (data, config = {}) => http.post(baseUrl, data, config);

export const updateSupplierSvc = (id, data, config = {}) => http.put(`${baseUrl}/${id}`, data, config);

export const activateSupplierSvc = (id) => http.put(`${baseUrl}/${id}/ativa`);

export const deactivateSupplierSvc = (id) => http.put(`${baseUrl}/${id}/inativa`);

export const deleteSupplierSvc = (id) => http.delete(`${baseUrl}/${id}/delete`);