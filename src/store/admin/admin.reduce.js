import TYPES from '../types'

const INITIAL_STATE = {
  loading: false,
  all:[],
  getById:{}
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.ADMIN_LOADING:
      state.loading = action.status
      state.error = []
      return state
    case TYPES.ADMIN_ALL:
      state.all = action.data
      state.loading = false
      return state
    case TYPES.ADMIN_BY_ID:
      state.getById = action.data
      state.loading = false
      return state
    default:
      return state
  }
};

export default reducer;