import { Router } from '@reach/router';
import PainelLayout from '../../components/layout/painelLayout.js'
import Home from './home';
import Categories from './categories';
import MemberProducts from './member-products';
import Suppliers from './suppliers';
import Clients from './clients';
import Products from './products';
import { useSelector } from 'react-redux';
import {
  Category as CategoryIcon,
  LocalMall as ProductsIcon,
  BusinessCenter as SupplierIcon,
  People as ClientsIcon,
  Home as DashboardHomeIcon,
} from '@material-ui/icons';

const Menu = [
  {
    title: 'Home',
    icons: '',
    route: '/',
    visibleMenu:true,
    enabled: true,
    component: Home,
    authorization: [1, 2, 3],
    icon: <DashboardHomeIcon/>
  },
  {
    title: 'Categories',
    icons: '',
    route: '/categories',
    visibleMenu:true,
    enabled: true,
    component: Categories,
    authorization: [1],
    icon: <CategoryIcon/>
  },
  {
    title: 'Products',
    icons: '',
    route: '/products',
    visibleMenu:true,
    enabled: true,
    component: Products,
    authorization: [1],
    icon: <ProductsIcon/>
  },
  {
    title: 'My Products',
    icons: '',
    route: '/memberproducts',
    visibleMenu:true,
    enabled: true,
    component: MemberProducts,
    authorization: [2],
    icon: <ProductsIcon/>
  },
  {
    title: 'Suppliers',
    icons: '',
    route: '/supplier',
    visibleMenu:true,
    enabled: true,
    component: Suppliers,
    authorization: [1],
    icon:<SupplierIcon/>
  },
  {
    title: 'Clients',
    icons: '',
    route: '/clients',
    visibleMenu:true,
    enabled: true,
    component: Clients,
    authorization: [1, 2],
    icon:<ClientsIcon/>

  },
]

export const getMenuFiltered = (userKind, isFilterVisible) => {
  
  let _menu = Menu.filter(menu => menu.authorization.indexOf(userKind) > -1)
  if(isFilterVisible){
    _menu = _menu.filter(menu => menu.visibleMenu)
  }
  return _menu
}

const Admin = (props) => {
  const userKind = useSelector((state) => state.auth.user?.kind)
  const menuFilter = getMenuFiltered(userKind)

  return(
    <>
      <Router>
        <PainelLayout path='/'>
          {menuFilter.map(({component: Component, route}, i) => (
            <Component key={i} path={route}/>
          ))}
        </PainelLayout>
      </Router>
    </>
  )
}

export default Admin