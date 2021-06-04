import React from 'react'
import { Router } from '@reach/router'
import PortalView from './views/portal/index'
import AdminView from './views/admin/index'


const Routers = () => (
  <>
    <Router>
      <PortalView path='/*'/>
      <AdminView path='/admin/*'/>
    </Router>
  </>
);

export default Routers