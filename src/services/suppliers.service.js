import http from '../config/http';

const baseUrl = '/supplier'

export const getAllSupplierSvc = () => http.get(baseUrl);

export const getByIdSupplierSvc = (supplierId) => http.get(`${baseUrl}/${supplierId}`);

export const createSupplierSvc = (data, config = {}) => http.post(baseUrl, data, config);

export const updateSupplierSvc = (supplierId, data, config = {}) => http.put(`${baseUrl}/${supplierId}`, data, config);

export const activateSupplierSvc = (supplierId) => http.put(`${baseUrl}/${supplierId}/ativa`);

export const deactivateSupplierSvc = (supplierId) => http.put(`${baseUrl}/${supplierId}/inativa`);

export const deleteSupplierSvc = (supplierId) => http.delete(`${baseUrl}/${supplierId}/delete`);