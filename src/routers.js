import React from 'react'
import { Router, Redirect } from '@reach/router'

import PortalView from './views/portal'
import AdminView from './views/admin'
import SignIn from './views/auth/signin'
import { isAuthenticated } from './config/storage'
import CategoryView from './views/portal/categories/categories.details'

// const PrivateRoute = ({ component: Component, ...rest}) => {
//   if (!isAuthenticated()) {
//     return <Redirect to="/signin" noThrow/>
//   }
//   return <Component {...rest}/>
// }

const Routers = () => (
  <>
    <Router>
      <PortalView path="/*"/>
      {/* <PrivateRoute component={AdminView} path="/admin/*"/> */}
      <AdminView path="/admin/*"/>
      {/* <CategoryView path="/categories/:id/*"/> */}
      <SignIn path="signin"/>
    </Router>
  </>
);

export default Routers