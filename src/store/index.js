import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import multi from 'redux-multi';

import { reducer as toastrReducer } from 'react-redux-toastr';
import SignReducer from './auth/auth.reducer'

const reducers = combineReducers({
  auth: SignReducer,
  toastr: toastrReducer,
})

const middleware = [thunk, multi]

const compose = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(reducers, compose);

export default store;