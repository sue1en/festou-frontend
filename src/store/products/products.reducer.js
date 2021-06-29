import TYPES from '../types';

const INITIAL_STATE = {
  loading: false,
  all: [],
  upload: {},
  selected: {},
  getById:{}
}

const reducer = (state= INITIAL_STATE, action) => {
  switch(action.type){
    case TYPES.PRODUCT_LOADING:
      state.error = []
      state.loading = action.status
      return state
    case TYPES.PRODUCT_ALL:
      state.all = action.data
      state.loading = false
      return state
    case TYPES.PRODUCT_BY_ID:
      state.getById = action.data
      state.loading = false
      return state
    case TYPES.PRODUCT_CREATE:
      state.loading = false
      return state
    case TYPES.PRODUCT_EDIT:
      state.selected = action.data
      state.loading = false
      return state
    case TYPES.PRODUCT_UPLOAD:
      state.upload = action.upload
      return state
    default:
      return state
  }
}

export default reducer