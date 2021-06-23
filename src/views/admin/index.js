import { Router } from '@reach/router';
import PainelLayout from '../../components/layout/painel-layout.js'
import Home from './home';
import Categories from './categories';
import Products from './products';
import Suppliers from './suppliers';
import Clients from './clients';

const Menu = [
  {
    title: 'Home',
    icons: '',
    route: '/',
    visubleMenu:true,
    enabled: true,
    component: Home
  },
  {
    title: 'Categories',
    icons: '',
    route: '/categories',
    visubleMenu:true,
    enabled: true,
    component: Categories
  },
  {
    title: 'Products',
    icons: '',
    route: '/products',
    visubleMenu:true,
    enabled: true,
    component: Products
  },
  {
    title: 'Suppliers',
    icons: '',
    route: '/suppliers',
    visubleMenu:true,
    enabled: true,
    component: Suppliers
  },
  {
    title: 'Clients',
    icons: '',
    route: '/clients',
    visubleMenu:true,
    enabled: true,
    component: Clients
  },
  // {
  //   title: 'Admin',
  //   icons: '',
  //   route: '/admin',
  //   visubleMenu:true,
  //   enabled: true,
  //   component: Admin
  // },
]

const Admin = (props) => {
  return(
    <>
      <Router>
        <PainelLayout path='/'>
          {Menu.map(({component: Component, route}, i) => (
            <Component key={i} path={route}/>
          ))}
        </PainelLayout>
      </Router>
    </>
  )
}

export default Admin