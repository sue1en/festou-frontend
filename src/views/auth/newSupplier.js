import React, {useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from '@reach/router'
import { createSupplierAct } from '../../store/supplier/supplier.action';
import StatesAndCities from '../../util/states-cities.json'
//estilos
import {
  makeStyles, 
  TextField,
  InputAdornment,
  Grid,
  FormControl,
  Select,
  Button,
  Box,
  Container,
} from '@material-ui/core'
import InputMask from 'react-input-mask'
//Icons
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import PhoneIcon from '@material-ui/icons/Phone';
import SubjectIcon from '@material-ui/icons/Subject';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
import PersonIcon from '@material-ui/icons/Person';
import PhotoIcon from '@material-ui/icons/Photo';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import DescriptionIcon from '@material-ui/icons/Description';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import styles from './userForm.style.js'

const useStyles = makeStyles(styles)

const NewSupplier = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [preview, setPreview] = useState('');
  const [uf, setUf] = useState([])
  const [cidades, setCidades] = useState([])
  const [form, setForm] = useState({
    status:false
  })

  const percent = useSelector((state) => state.categories.upload?.percent || 0)
  const loading = useSelector((state) => state.auth.loading);

  const handleChange = (props) => {
    const { name, value } = props.target;
    setForm({
      ...form,
      [name]: value
    })
  };

  const handleSwitch = () => setForm({
    ...form, status: !form.status
  });

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

  const submitForm = () => {
    const newForm = {...form, phoneNumber: parseInt(form.phoneNumber.replace(/[(,),' ',-]/g,''))}
    dispatch(createSupplierAct(newForm))
  };

  useEffect(() => {
    const estados = StatesAndCities.estados.map(({ nome, sigla }) => ({ nome, sigla }))
    setUf(estados)
  }, []);

  useEffect(() => {
    const result = StatesAndCities.estados.find((item) => item.sigla === form.uf)
    if(result){
      setCidades(result.cidades)
    }
  }, [form.uf])
  
   return(
    <Container className={classes.root}>
      <Box className={classes.mainBox}>
        <h1> Crie sua conta </h1>
        <form className={classes.formStyled}>
          <Box className={classes.textFieldBox}>
            <TextField
              className={classes.textFieldStyle}
              variant="outlined"
              required
              fullWidth
              id='tradeName'
              name='tradeName'
              label='Nome do seu negocio'
              value={form.tradeName || ''}
              onChange={handleChange}
              // disabled={loading}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <StoreMallDirectoryIcon/>
                  </InputAdornment>
                ),
              }} 
            />
             <InputMask
              mask="(99) 99999-9999"
              disabled={false}
              maskChar=''
              value={form.cnpj || ''}
              onChange={handleChange}
            >
              {() => (
                <TextField
                  className={classes.textFieldStyle}
                  variant="outlined"
                  required
                  fullWidth
                  id='cnpj'
                  name='cnpj'
                  label='cnpj'
                  // disabled={loading}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <DescriptionIcon/>
                      </InputAdornment>
                    ),
                  }} 
                  />
                  )}
            </InputMask>
            <TextField
              className={classes.textFieldStyle}
              variant="outlined"
              required
              fullWidth
              id='address'
              name='address'
              label='Endereço'
              value={form.address || ''}
              onChange={handleChange}
              // disabled={loading}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <HomeWorkIcon/>
                  </InputAdornment>
                ),
              }} 
              />
            <Grid container spacing={2}>
              <Grid item sm={4} md={4} xl={4}>
                <FormControl
                  fullWidth
                  variant="outlined"
                  required
                  className={classes.textFieldStyle}
                  >
                  <Select
                    native
                    value={form.uf || ''}
                    onChange={handleChange}
                    inputProps={{
                      name: 'uf',
                      id: 'uf'
                    }}
                  >
                    <option disabled value=''>Uf</option>
                    {uf?.map(({ nome, sigla }, i) =>(
                      <option key={i} value={sigla}>
                        {sigla}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item sm={8} md={8} xl={8}>
                <FormControl
                  fullWidth
                  variant="outlined"
                  required
                  className={classes.textFieldStyle}
                  disabled={form.uf ? false : true }
                  >
                  <Select
                    fullWidth
                    native
                    value={form.city || ''}
                    onChange={handleChange}
                    inputProps={{
                      name: 'city',
                      id: 'city'
                    }}
                  >
                    <option value=''>Cidade</option>
                    {cidades?.map((cidade, i) =>(
                      <option key={i} value={cidade}>
                        {cidade}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <InputMask
              mask="(99) 99999-9999"
              disabled={false}
              maskChar=''
              value={form.phoneNumber || ''}
              onChange={handleChange}
            >
              {() => (
                <TextField
                  className={classes.textFieldStyle}
                  variant="outlined"
                  required
                  fullWidth
                  id='phoneNumber'
                  name='phoneNumber'
                  label='Telefone'
                  // disabled={loading}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <PhoneIcon/>
                      </InputAdornment>
                    ),
                  }} 
                  />
                  )}
            </InputMask>
            <TextField
              className={classes.textFieldStyle}
              variant="outlined"
              required
              fullWidth
              id='description'
              name='description'
              label='Descreva suas atividades'
              value={form.description || ''}
              onChange={handleChange}
              // disabled={loading}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <SubjectIcon/>
                  </InputAdornment>
                ),
              }} 
            />
            <TextField
              className={classes.textFieldStyle}
              variant="outlined"
              required
              fullWidth
              id='email'
              name='email'
              label='email'
              value={form.email || ''}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <EmailIcon/>
                  </InputAdornment>
                ),
              }}
            />    
            <TextField
              className={classes.textFieldStyle}
              variant="outlined"
              required
              fullWidth
              id='password'
              name='password'
              label='password' 
              type='password'
              value={form.password || ''}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <LockIcon/>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
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
            onClick={submitForm}
            className={classes.styledButton}
            // disable={loading}
            >
            Enviar
          </Button>
          <Grid container>
            <Grid item>
              Já é cadastrado?
              <Link to='/signin' variant='body2'>
                &ensp;Faça seu Login
              </Link>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
   )
}
export default NewSupplier;
