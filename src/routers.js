import React from 'react'
import { Router, Redirect } from '@reach/router'

import Layout from './components/layout'
import PortalView from './views/portal'
import AdminView from './views/admin'
import SignIn from './views/auth/signin'
import { isAuthenticated } from './config/auth'
import CategoryView from './views/portal/categories/index'

const PrivateRoute = ({ component: Component, ...rest}) => {
  if (!isAuthenticated()) {
    return <Redirect to="/signin" noThrow/>
  }
  return <Component {...rest}/>
}

const Routers = () => (
  <>
    <Router>
      <Layout path='/'>
        <SignIn path="/signin"/>
        <PortalView path="/*"/>
        <PrivateRoute component={AdminView} path="/admin/*"/>
        {/* <AdminView path="/admin/*"/> */}
        {/* <CategoryView path="/categories/:id/*"/> */}
      </Layout>
    </Router>
  </>
);

export default Routers