import React, { useState, useEffect } from 'react';
import { signInAction } from '../../store/auth/auth.action'
import { useDispatch, useSelector } from 'react-redux'
import { Router } from '@reach/router';
import Layout from '../../components/layout'
import {  } from '@material-ui/core'
import {
  makeStyles,
  Container,
  Paper,
  TextField,
  InputAdornment,
} from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';


const useStyles = makeStyles((theme) => ({
  root:{
    flexGrow:1,
    height: '100vh',
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
  },
  signBox:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    minWidth: 300,
    maxWidth: 450,
    padding: 16,
    margin: 16,
  },
  formRoot: {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    '& > *':{
      margin:theme.spacing(2),
      width: '35ch'
    },
  },
}))


const SignIn = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    email:'',
    password:''
  });
  
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector(state => state.auth.error);

  // const [visible, setVisible] = useState(true);
  // const onDismiss = () => setVisible(false);

  // const closeError = () => setVisible(false);

  const handleChange = (props) => {
    const { value, name } = props.target
    setForm({
      ...form,
      [name]: value
    })
  };

  const submitForm = (e) => {
    e.preventDefault()
    dispatch(signInAction(form))
  };

  // useEffect(()=> {
  //   setVisible(error.length > 0)
  //   setTimeout(() => setVisible(false), 5000);
  // }, [error])


  return(
    <div className={classes.root}>
      <Paper className={classes.signBox}>
        <h1> SignIn</h1>
        <form className={classes.formRoot}>
          <TextField
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
            id='password'
            name='password'
            label='pasword' 
            value={form.password || ''}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <LockIcon/>
                </InputAdornment>
              ),
            }}
            // fullWidth={true}
          />
          <button onClick={(e) => submitForm(e)}>Entrar</button>
        </form>
      </Paper>
    </div>
  )
};

export default SignIn