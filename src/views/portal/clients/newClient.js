import React, {useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from '@reach/router'
import { createClientAct } from '../../../store/clients/clients.action';
import StatesAndCities from '../../../util/states-cities.json'

//estilos
import {
  makeStyles, 
  withStyles,
  TextField,
  InputAdornment,
  Grid,
  FormControl,
  Select,
  Button,
} from '@material-ui/core'
import InputMask from 'react-input-mask'
//Icons
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import PhotoIcon from '@material-ui/icons/Photo';


const useStyles = makeStyles({
  root:{
    flexGrow:1,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
  },
  formStyled: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',  
  },
  profilePhoto: {
    maxHeight:80,
  }
})
  

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
    dispatch(createClientAct(form))
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
    <div className={classes.root}>
      <h1> Cadastro </h1>
      <form className={classes.formStyled}>
        {preview.length > 0
          ? (
            <Grid conteiner direction='column'>
              <Grid item sm={1} md={1} xl={1}>
                <img src={preview} className={classes.profilePhoto} alt='Foto do perfil'/>
                <Button onClick={removeImage} component='label'>
                  Remove
                </Button>
              </Grid>
            </Grid>
            )
          : (
            <Button
              variant='contained'
              color='primary'
              size='small'
              component='label'
            >
              Upload Foto
              <input
                accept='image/*'
                type='file'
                name='image'
                hidden
                onChange={previewImg}
              />
            </Button>
          )}
        <TextField
          required
          fullWidth
          id='name'
          name='name'
          label='Nome completo'
          value={form.name || ''}
          onChange={handleChange}
          disabled={loading}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <PersonIcon/>
              </InputAdornment>
            ),
          }} 
        />
          <TextField
            required
            fullWidth
            id='birthdate'
            name='birthdate'
            label='Data de nascimento'
            type='date'
            value={form.birthdate || ''}
            onChange={handleChange}
            disabled={loading}
            InputLabelProps={{
              shrink: true,
            }}
          />
        <TextField
          required
          fullWidth
          id='address'
          name='address'
          label='Endereço'
          value={form.address || ''}
          onChange={handleChange}
          disabled={loading}
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
            >
              <Select
                native
                value={form.uf || ''}
                onChange={handleChange}
                inputProps={{
                  name: 'uf',
                  id: 'outlined-native-simple'
                }}
              >
                <option value=''>Uf</option>
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
              disabled={!form.uf}
            >
              <Select
                fullWidth
                native
                value={form.cidades || ''}
                onChange={handleChange}
                inputProps={{
                  name: 'uf',
                  id: 'outlined-native-simple'
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
              required
              fullWidth
              id='phoneNumber'
              name='phoneNumber'
              label='Telefone'
              disabled={loading}
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
        <Button
          fullWidth
          type='submit'
          onClick={submitForm}
          disable={loading}
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
    </div>
   )
}
export default NewClient;
