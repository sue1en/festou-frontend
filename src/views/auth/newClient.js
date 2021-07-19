import React, {useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from '@reach/router'
import { createClientAct } from '../../store/clients/clients.action';
import StatesAndCities from '../../util/states-cities.json'
import {
  Box,
  Grid,
  Select,
  Button,
  Container,
  TextField,
  FormControl,
  InputAdornment,
  makeStyles, 
} from '@material-ui/core'
import InputMask from 'react-input-mask'
//Icons
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import PhotoIcon from '@material-ui/icons/Photo';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

//estilos
import styles from '../../assets/styles/userForm.style'

const useStyles = makeStyles(styles)

const NewClient = () => {
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
    dispatch(createClientAct(newForm))
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
        <h1 className={classes.formTitle}>
          Crie sua conta
        </h1>
        <form className={classes.formStyled}>
          <Box className={classes.textFieldBox}>
            <TextField
              className={classes.textFieldStyle}
              variant="outlined"
              required
              fullWidth
              id='name'
              name='name'
              label='Nome completo'
              value={form.name || ''}
              onChange={handleChange}
              // disabled={loading}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <PersonIcon/>
                  </InputAdornment>
                ),
              }} 
            />
              <TextField
                className={classes.textFieldStyle}
                variant="outlined"
                required
                fullWidth
                id='birthdate'
                name='birthdate'
                label='Data de nascimento'
                type='date'
                value={form.birthdate || ''}
                onChange={handleChange}
                // disabled={loading}
                InputLabelProps={{
                  shrink: true,
                }}
              />
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
                    <HomeIcon/>
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
                  <Box>
                    <img src={preview} className={classes.profilePhoto} alt='Foto do perfil'/>
                  </Box>
                  <Button 
                    fullWidth
                    color="secondary"
                    variant="contained"
                    className={classes.imageButton}
                    onClick={removeImage}
                    component='label'
                    startIcon={<DeleteOutlineIcon/>}
                  >
                    Remover Imagem
                  </Button>
                </div>
                )
              : (
                <div className={classes.imageUploadBox}>
                  <PhotoIcon className={classes.profilePhoto}/>
                  <Button
                    fullWidth
                    variant='contained'
                    size='small'
                    component='label'
                    className={classes.imageButton}
                    startIcon={<CloudUploadIcon />}
                    > 
                    Upload Imagem do perfil
                    <input
                      accept='image/*'
                      type='file'
                      name='image'
                      hidden
                      onChange={previewImg}
                      />
                  </Button>
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
          <div className={classes.redirectBox}>
            <p>
              Já é cadastrado?
              <Link to='/signin' variant='body2'>
                &ensp;Faça seu Login
              </Link>
            </p>
          </div>
        </form>
      </Box>
    </Container>
   )
}
export default NewClient;
