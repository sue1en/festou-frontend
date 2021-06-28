import http from '../config/http'
const baseUrl = '/products'

export const getAllProductSvc = () => http.get(baseUrl);

export const getByIdProductSvc = (id) => http.get(`${baseUrl}/${id}`);

export const createProductSvc = (supplierId, data, config = {}) => http.post(`${baseUrl}/${supplierId}/products`, data, config);

export const updateProductSvc = (supplierId, productId, data, config = {}) => http.put(`${baseUrl}/${supplierId}/products${productId}`, data, config);

// AINDA NÃO ESTÃO COMPLETAS */

// export const activateProductSvc = (supplierId, productId) => http.put(`${baseUrl}/${supplierId}/products${productId}/ativa`);

// export const deactivateProductSvc = (supplierId, productId) => http.put(`${baseUrl}/${supplierId}/products${productId}/inativa`);

export const deleteProductSvc = (supplierId, productId) => http.delete(`${baseUrl}/${supplierId}/products${productId}/delete`);