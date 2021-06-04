import { Router } from '@reach/router'
import Layout from '../../components/layout'
import Home from './home';
import Products from './products';

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
    title: 'Products',
    icons: '',
    route: '/products',
    visubleMenu:true,
    enabled: true,
    component: Products
  },
]


const Portal = (props) => {
  return(
    <>
      <Router>
        <h1>testando</h1>
        <Layout path='/'>
          {Menu.map(({ component: Component, route }, index) => (<Component key={index} path={route} />
          ))}
        </Layout>
      </Router>
    </>
  )
}

export default Portal