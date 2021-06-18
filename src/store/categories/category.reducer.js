import TYPES from '../types'

const INITIAL_STATE = {
  loading: false,
  error: [],
  upload: {}
}

const reducer = ( state= INITIAL_STATE, action ) => {
  switch (action.type) {
    case TYPES.CATEGORY_LOADING:
      state.loading = action.status
      state.erro = []
      return state
    case TYPES.CATEGORY_ALL:
      state.all = action.data
      state.loading = false
      return state
    case TYPES.CATEGORY_BY_ID:
      state.getById = action.data
      state.loading = false
      return state
    case TYPES.CATEGORY_CREATE:
      state.loading = false
      return state
    case TYPES.CATEGORY_UPLOAD:
      state.upload = action.upload
      return state
    default:
      return state
  }
}

export default reducer