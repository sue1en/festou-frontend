import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from '@reach/router';
import {  } from '@material-ui/core'
import {
  makeStyles,
  Box,
  Grid,
  Button,
  List,
  ListItem,
  TextField,
  InputAdornment,
} from '@material-ui/core';
import { signInAction } from '../../store/auth/auth.action'
import Layout from '../../components/layout'
import styles from '../../assets/styles/userForm.style'
//Icons
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles(styles)

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
    <Box className={classes.root}>
      <Box className={classes.mainBox}>
        <div className={classes.formTitleIcon}>
         <PersonIcon/>
        </div>
        <form className={classes.formStyled}>
          <TextField
            id='email'
            name='email'
            label='email'
            value={form.email || ''}
            onChange={handleChange}
            variant="outlined"
            required
            fullWidth
            className={classes.textFieldStyle}
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
            label='password'
            type='password'
            value={form.password || ''}
            onChange={handleChange}
            variant="outlined"
            required
            fullWidth
            className={classes.textFieldStyle}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <LockIcon/>
                </InputAdornment>
              ),
            }}
            // fullWidth={true}
          />
          <Button
            onClick={(e) => submitForm(e)}
            fullWidth
            size='large'
            type='button'
            variant="contained"
            className={classes.styledButton}
          >
            Entrar
          </Button>
          <div className={classes.redirectBox}>
            <p>Ainda não é cadastrado?</p>
            <p>
              cadastre-se como 
              <Link to='/newclient'>
                usuário
              </Link>
              &ensp;/ ou seja um 
              <Link to='/newsupplier'>
                parceiro
              </Link>
            </p>
          </div>
        </form>
      </Box>
    </Box>
  )
};

export default SignIn