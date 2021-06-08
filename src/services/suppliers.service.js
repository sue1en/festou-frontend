import http from '../config/http';

export const getAllSupplierSvc = () => http.get('/supplier');