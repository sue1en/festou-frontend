import { Router } from '@reach/router'
import Layout from '../../components/layout'
import Home from './home';
import Category from './categories';
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
  // {
  //   title: 'CategoryDetail',
  //   icons: '',
  //   route: '/categories/:id/*',
  //   visubleMenu:true,
  //   enabled: true,
  //   component: CategoryDetail
  // },
  {
    title: 'Category',
    icons: '',
    route: '/categories/:id/*',
    visubleMenu:true,
    enabled: true,
    component: Category
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
]


const Portal = (props) => {
  return(
    <>
      <Router>
        {Menu.map(({ component: Component, route }, i) => (<Component key={i} path={route} />
        ))}
      </Router>
    </>
  )
}

export default Portal