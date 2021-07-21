import http from '../config/http';

const baseUrl = '/supplier'

export const getAllSupplierSvc = () => http.get(baseUrl);

export const getByIdSupplierSvc = (supplierId) => http.get(`${baseUrl}/${supplierId}`);

export const createSupplierSvc = (data, config = {}) => http.post(baseUrl, data, config);

export const updateSupplierSvc = (supplierId, data, config = {}) => http.put(`${baseUrl}/${supplierId}`, data, config);

export const activateSupplierSvc = (supplierId) => http.put(`${baseUrl}/${supplierId}/ativa`);

export const deactivateSupplierSvc = (supplierId) => http.put(`${baseUrl}/${supplierId}/inativa`);

export const deleteSupplierSvc = (supplierId) => http.delete(`${baseUrl}/${supplierId}/delete`);

//Produtos do fornecedor
export const getSupplierProductsSvc = (supplierId) => http.get(`${baseUrl}/${supplierId}/products`);

export const getByIdSupplierProductsSvc = (supplierId, productId) => http.get(`${baseUrl}/${supplierId}/products/${productId}`);

export const createProductSvc = (supplierId, data, config = {}) => http.post(`${baseUrl}/${supplierId}/products`, data, config);

export const updateProductSvc = (supplierId, productId, data, config = {}) => http.put(`${baseUrl}/${supplierId}/products/${productId}`, data, config);

export const deleteProductSvc = (supplierId, productId ) => http.delete(`${baseUrl}/${supplierId}/products/${productId}`);

// AINDA NÃO ESTÃO COMPLETAS */

// export const activateProductSvc = (supplierId, productId) => http.put(`${baseUrl}/${supplierId}/products${productId}/ativa`);

// export const deactivateProductSvc = (supplierId, productId) => http.put(`${baseUrl}/${supplierId}/products${productId}/inativa`);