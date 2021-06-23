import TYPES from '../types'

const INITIAL_STATE = {
  loading: false,
  all: [],
  upload: {},
  selected: {}
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type){
    case TYPES.CLIENT_LOADING:
      state.error = []
      state.loading = action.type
      return state
    case TYPES.CLIENT_ALL:
      state.all = action.data
      state.loading = false
      return state
    case TYPES.CLIENT_BY_ID:
      state.getById = action.data
      state.loading = false
      return state
    case TYPES.CLIENT_CREATE:
      state.loading = false
      return state
    case TYPES.CLIENT_EDIT:
      state.selected = action.data
      state.loading = false
      return state
    case TYPES.CLIENT_UPLOAD:
      state.upload = action.upload
      return state
    default:
      return state
  }
}

export default reducer