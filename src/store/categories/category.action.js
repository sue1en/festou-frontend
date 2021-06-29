import TYPES from '../types'
import {
  createCategorySvc,
  getAllCategorySvc,
  getByIdCategorySvc,
  updateCategorySvc,
  deactivateCategorySvc,
  deleteCategorySvc,
} from '../../services/categories.service'
import { toastr } from 'react-redux-toastr'

//TODO: setStatus e remove

export const getAllCategoryAct = () => {
  return async (dispatch) => {
    dispatch({type:TYPES.CATEGORY_LOADING, status:true})
    try {
      const all = await getAllCategorySvc()
      dispatch({
        type: TYPES.CATEGORY_ALL,
        data: all.data
      })
    } catch (error){ 
      toastr.error("temos um error", error)
    }
  }
};

export const getByIdCategoryAct = (categoryId) => {
  return async (dispatch) => {
    try {
      // const { auth } = getState()
      const res = await getByIdCategorySvc(categoryId);
      dispatch ({
        type: TYPES.CATEGORY_BY_ID,
        data:res.data
      })
    } catch (error){
        toastr.error("temos um error", error)
    }
  }
};

export const createCategoryAct = (data) => {
  return async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress: function (progressEvent) {
        const percent = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        )
        dispatch({
          type: TYPES.CATEGORY_UPLOAD,
          upload: {
            finish: percent === 100,
            percent: percent
          }
        })
      }
    }
    try {
      const formData = new FormData()
      Object.keys(data).map((k) => formData.append(k, data[k]))
      const result = await createCategorySvc(formData, config)
      dispatch({ type: TYPES.CATEGORY_CREATE, data: result.data })
      toastr.success("Category", "Success! The new category has been registered.")
    } catch (error) {
      toastr.error("Category", "Error! The new category wasn't registered" )
      console.log(error)
    }
    console.log('disparar...', data)
  }
};


export const editCategoryAct = (categoryId) => {
  return async (dispatch) => {
    dispatch({
      type: TYPES.CATEGORY_UPLOAD,
      upload: 0
    })
    try {
      const result = await getByIdCategorySvc(categoryId)
      dispatch({ type: TYPES.CATEGORY_EDIT, data: result.data })
    } catch (error) {
      toastr.error('temos um erro', error)
    }
  }
}


export const updateCategoryAct = ( data ) => {
  return (dispatch) => {
    console.log(data)
    dispatch({ type: TYPES.CATEGORY_LOADING, status: true })
    dispatch({
      type: TYPES.CATEGORY_UPLOAD,
      upload: 0
    });
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress: function (progressEvent) {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        )
        console.log('percentCompleted', percentCompleted)

        dispatch({
          type: TYPES.CATEGORY_UPLOAD,
          upload: percentCompleted
        })
      }
    };
    const formData = new FormData()
    Object.keys(data).map((k) => formData.append(k, data[k]))
    updateCategorySvc(data.id, formData, config)
      .then((result) => {
        // dispatch(editCategoryAct(categoryId))
        dispatch(getAllCategoryAct())
        toastr.success('Category', 'Categoria atualizada com sucesso')
        dispatch({ type: TYPES.CATEGORY_UPLOAD })
      })
      .catch((error) => {
        console.log(error)
        dispatch({ type: TYPES.SIGN_ERROR, data: error })
        toastr.error('Category', error.toString())
      })
  }
}

export const deleteCategoryAct = (categoryId) => {
  return async (dispatch) => {
    try{
      const result = await deleteCategorySvc(categoryId)
      dispatch({ type: TYPES.CATEGORY_EDIT, data: result.data })
      toastr.success('Category', 'Removido com sucesso')
      dispatch(getAllCategoryAct())
    } catch (error){
      toastr.error('aconteceu um erro', error)
      toastr.error('Category', error.toString())
    }
  }
}