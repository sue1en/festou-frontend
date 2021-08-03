import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import multi from 'redux-multi';

import { reducer as toastrReducer } from 'react-redux-toastr';
import SignReducer from './auth/auth.reducer';
import CategoryReducer from './categories/category.reducer';
import SupplierReducer from './supplier/supplier.reducer';
import ProductReducer from './products/products.reducer';
import ClientReducer from './clients/clients.reducer';
import AdminReducer from './admin/admin.reduce'

const reducers = combineReducers({
  auth: SignReducer,
  toastr: toastrReducer,
  categories: CategoryReducer,
  suppliers: SupplierReducer,
  products: ProductReducer,
  clients: ClientReducer,
  admin: AdminReducer,
})

const middleware = [thunk, multi]

const compose = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(reducers, compose);

export default store;