import React, { useState, useEffect } from 'react';
import { signInAction } from '../../store/auth/auth.action'
import { useDispatch, useSelector } from 'react-redux'
import { Router } from '@reach/router';
import Layout from '../../components/layout'
import { Container, Paper } from '@material-ui/core';

const SignIn = () => {
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
    <Container >
      <Paper>
        <h1> SignIn</h1>
        <form>
          <label htmlFor='email'>
            Email:
            <input type='text' id='email' name='email' value={form.email || ''} onChange={handleChange}/>
          </label>
          <label htmlFor='password'>
            Senha:
            <input type='text' id='password' name='password' value={form.password || ''} onChange={handleChange}/>
          </label>
          <button onClick={(e) => submitForm(e)}>Entrar</button>
        </form>
      </Paper>
    </Container>
  )
};

export default SignIn