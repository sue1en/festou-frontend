import React, { useState, useEffect, useCallback } from 'react'
import { create as CategoryAction } from '../../../store/categories/category.action'
import { useDispatch, useSelector } from 'react-redux'


const TesteForm = ({submit}) => {
  const [ preview, setPreview ] = useState('')
  const percent = useSelector((state) => state.categories.upload?.percent || 0)
  const loading = false

  const [form, setForm ] = useState({
    status:false
  });

  const handleChange = (props) => {
    const {value, name } = props.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSwitch = () => setForm({ ...form, status: !form.status })

  const handleSubmit = () => {
    const newForm = {
      ...form,
      status: form.status.toString()
    }
    submit(newForm)
  };

  const cleanup = useCallback(() => {
    setTimeout(() => {
      setForm({ status:false})
      setPreview('')
    }, 2000)
  }, [])

  useEffect(() => {
    if(!loading){
      cleanup()
    }
  }, [loading, cleanup])

  const removeImage = () => {
    delete form.removeImage
    setForm(form)
    setPreview('')
  }

  const previewImg = (props) => {
    const image = props.target.files[0]
    const url = URL.createObjectURL(image)
    setPreview(url)
    setForm({
      ...form,
      image
    })
  }
  return (
    <form>
      <label>
        Name
        <input type="text" name="name" id="name" value={form.name || ''} onChange={handleChange} />
      </label>
      <br/>
      <br/>
      <label>
        Description
        <input type="text" name="description" id="description" value={form.description || ''} onChange={handleChange} />
      </label>
      <br/>
      <br/>
      <label>
        Status da categoria
        <input type="checkbox" name="status" id="status" value={form.status} onChange={handleSwitch} />
      </label>
      <br/>
      <br/>
      <label>
        Imagem da categoria
        {preview.length > 0 
          ? ( 
              <div>
                <img src={preview}/>
                <button onClick={removeImage}>Remove</button>
              </div>
            ) : ( 
                <button onClick={removeImage}>
                  <input accept="image/*" type="file" name="image" id="image" 
                  onChange={previewImg} />
                </button>
            )}
      </label>
      <br/>
      <br/>
      <input type="submit" value="enviar" onChange={handleSubmit}/>
    </form>
  )
}


function Categories () {
  const dispatch = useDispatch();
  const [modal, setModal] = React.useState({
    status: false
  })

  const handleSubmit = (form) => dispatch(CategoryAction(form))

   return (
    <div>
      <h1>Categories Categories Categories</h1>
      <br/>
      <br/>
      <TesteForm submit={handleSubmit}/>

      {/* <form>
        <label>
          Name
          <input type="text" name="name" id="name" value={form.name || ''} onChange={handleChange} />
        </label>
        <br/>
        <br/>
        <label>
          Description
          <input type="text" name="description" id="description" value={form.description || ''} onChange={handleChange} />
        </label>
        <br/>
        <br/>
        <label>
          Status da categoria
          <input type="checkbox" name="status" id="status" value={form.status} onChange={handleSwitch} />
        </label>
        <br/>
        <br/>
        <label>
          Imagem da categoria
          {preview.length > 0 
            ? ( 
                <div>
                  <img src={preview}/>
                  <button onClick={removeImage}>Remove</button>
                </div>
              ) : ( 
                  <button onClick={removeImage}>
                    <input accept="image/*" type="file" name="image" id="image" 
                    onChange={previewImg} />
                  </button>
              )}
        </label>
        <br/>
        <br/>
        <input type="submit" value="enviar" onChange={handleSubmit}/>
      </form> */}
      <hr/>
      <br/>
      <br/>
    </div>
   )
}
export default Categories
