import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Box,
  Grid,
  Select,
  Switch,
  Button,
  Container,
  TextField,
  Typography,
  FormControl,
  InputAdornment,
  FormControlLabel,
  makeStyles, 
} from '@material-ui/core'
//ICONS
import PhotoIcon from '@material-ui/icons/Photo';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
//STYLES
import modalStyle from '../../../assets/styles/toModalForm.style'

const useStyled = makeStyles(modalStyle)

const Form = ({submit, ...props}) => {
  const classes = useStyled()
  const [ preview, setPreview ] = useState('')
  const [form, setForm ] = useState({
    status:false
  });
  const [isEdit, setIsEdit] = useState(false)
  const percent = useSelector((state) => state.suppliers.upload?.percent || 0)
  const loading = false;

  if(Object.keys(props).length > 0 && !isEdit){
    setPreview(process.env.REACT_APP_API + props?.data?.image)
    setForm(props.data)
    setIsEdit(true)
  };

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
    <Box className={classes.mainBox}>
      <h2>Suppliers</h2>
      <form className={classes.textFieldStyle}>
        <TextField
          className={classes.textFieldStyle}
          variant="outlined"
          required
          fullWidth
          id='name'
          name='name'
          label='Nome da Categoria'
          value={form.name || ''}
          onChange={handleChange}
          // disabled={loading}
        />
        <TextField
          className={classes.textFieldStyle}
          required
          multiline
          fullWidth
          rows={4}
          variant="outlined"
          id='name'
          name='name'
          label='Descrição da categoria'
          value={form.description || ''}
          onChange={handleChange}
          // disabled={loading}
        />
        <div>
          <Typography>Status da categoria:</Typography>
          <FormControlLabel
            control={
              <Switch
                name="status"
                color="primary"
                // disabled={loading}
                checked={form.status}
                onChange={handleSwitch}
              />
            }
            label={form.status ? 'ativo' : 'inativo'}
          />
        </div>
        <Box className={classes.imageMainBox}>
          {preview.length > 0
            ? (
              <div className={classes.imageUploadBox}>
                <Button 
                  fullWidth
                  color="secondary"
                  variant="contained"
                  className={classes.styledButton}
                  onClick={removeImage}
                  component='label'
                  startIcon={<DeleteOutlineIcon/>}
                >
                  Remover Imagem
                </Button>
                <Box>
                  <img src={preview} className={classes.profilePhoto} alt='Foto do perfil'/>
                </Box>
              </div>
              )
            : (
              <div className={classes.imageUploadBox}>
                <Button
                  fullWidth
                  variant='contained'
                  size='small'
                  component='label'
                  className={classes.styledButton}
                  startIcon={<CloudUploadIcon />}
                  > 
                  Upload Imagem
                  <input
                    accept='image/*'
                    type='file'
                    name='image'
                    hidden
                    onChange={previewImg}
                    />
                </Button>
                <PhotoIcon className={classes.profilePhoto}/>
              </div>
            )} 
        </Box>
        <Button
          variant="contained"
          fullWidth
          size='large'
          type='button'
          onClick={handleSubmit}
          className={classes.styledButton}
        >
          {isEdit ? 'Atualizar' : 'Enviar'}
        </Button>
      </form>
    </Box>
  )
};

export default Form;