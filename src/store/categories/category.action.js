import TYPES from '../types'
import { createCategory } from '../../services/categories.service'
import { toastr } from 'react-redux-toastr'

export const create = (data) => {
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
      const result = await createCategory(formData, config)
      dispatch({ type: TYPES.CATEGORY_CREATE, data: result.data })
      toastr.success("Category", "Success! The new category has been registered.")
    } catch (error) {
      toastr.error("Category", "Error! The new category wasn't registered" )
      console.log(error)
    }
    console.log('disparar...', data)
  }
};