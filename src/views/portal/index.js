import { Router } from '@reach/router'
import Layout from '../../components/layout'
import Home from './home';
import Categories from './categories';
import Products from './products';
import Suppliers from './suppliers';
import Clients from './clients';
import CategoryDetail from './categories/categories.details'

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
    title: 'CategoryDetail',
    icons: '',
    route: '/categories/:id/*',
    visubleMenu:true,
    enabled: true,
    component: CategoryDetail
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
]


const Portal = (props) => {
  return(
    <>
      <Router>
        <Layout path='/'>
          {Menu.map(({ component: Component, route }, i) => (<Component key={i} path={route} />
          ))}
        </Layout>
      </Router>
    </>
  )
}

export default Portal