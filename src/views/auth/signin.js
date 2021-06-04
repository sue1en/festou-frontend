import React, { useState } from 'react';
import { signInAction } from '../../store/auth/auth.action'
import { useDispatch, useSelector } from 'react-redux'
import { Router } from '@reach/router';
import Layout from '../../components/layout'


export default function SignIn () {
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    email:'suelen@email.com',
    password:'123456'
  });
  
  const loading = useSelector((state) => state.auth.loading);

  const handleChange = (props) => {
    const { value, name } = props.target
    setForm({
      ...form,
      [name]: value
    })
  };

  const submitForm = () => {
    dispatch(signInAction(form))
  };

  return(
    <>
      <Layout path='/'>
        <h1>Login</h1>
        <form>
          <label htmlFor='email'>
            Email:
            <input type='text' id='email' name='email' value={form.email || ''} onChange={handleChange}/>
          </label>
          <label htmlFor='password'>
            Senha:
            <input type='text' id='password' name='password' value={form.password || ''} onChange={handleChange}/>
          </label>
          <button onChange={submitForm}>Entrar</button>
        </form>
      </Layout>
    </>
  )
};