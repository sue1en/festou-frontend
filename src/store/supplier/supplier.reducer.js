import TYPES from '../types'

const INITIAL_STATE = {
  loading: false,
  all: [],
  upload: {},
  selected: {},
  getById: {},
}

const reducer = ( state = INITIAL_STATE, action) => {
  switch (action.type){
    case TYPES.SUPPLIER_LOADING:
      state.loading = action.status
      state.erro = []
      return state
    case TYPES.SUPPLIER_ALL:
      state.all = action.data
      state.loading = false
      return state
    case TYPES.SUPPLIER_BY_ID:
      state.getById = action.data
      state.loading = false
      console.log("###___REDUCER___" + state.getById)
      return state
    case TYPES.SUPPLIER_CREATE:
      state.loading = false
      return state
    case TYPES.SUPPLIER_EDIT:
      state.selected = action.data
      return state
    case TYPES.SUPPLIER_UPLOAD:
      state.upload = action.upload
      return state
    default:
      return state
  }
}

export default reducer;