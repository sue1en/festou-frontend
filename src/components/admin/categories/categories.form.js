import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const Form = ({submit}) => {
  const [ preview, setPreview ] = useState('')
  // const percent = useSelector((state) => state.categories.upload?.percent || 0)
  const loading = false;
  const [form, setForm ] = useState({
    status:false
  });

  const handleChange = (props) => {
    const {value, name } = props.target
    setForm({
      ...form,
      [name]: value,
    })
  };

  const handleSwitch = () => setForm({
    ...form, status: !form.status
  });

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
  }, []);

  useEffect(() => {
    if(!loading){
      cleanup()
    }
  }, [loading, cleanup]);

  const removeImage = () => {
    delete form.removeImage
    setForm(form)
    setPreview('')
  };

  const previewImg = (props) => {
    const image = props.target.files[0]
    const url = URL.createObjectURL(image)
    setPreview(url)
    setForm({
      ...form,
      image
    })
  };

  return (
    <div>
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
      <button type="button" onClick={handleSubmit}>Enviar</button>
    </div>
  )
};

export default Form;