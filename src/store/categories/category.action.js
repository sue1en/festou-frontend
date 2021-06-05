import TYPES from '../types'
import { categoryCreate } from '../../services/categories.service'
import { toastr } from 'react-redux-toastr'

export const crate = (data) => {
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
      Object.keys(data).map((k) => FormData.append(k, data[k]))
      const result = await categoryCreate(formData, config)
      dispatch({ type: TYPES.PRODUCT_CREATE, data: result.data })
      toastr.success("Category", "Successs! The new category has been registered.")
    } catch (error) {
      toastr.error("Category", "Error! The new category wasn't registered" )
    }
    console.log('disparar...', data)
  }
};