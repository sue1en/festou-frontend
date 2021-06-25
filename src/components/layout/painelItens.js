import React from 'react'
import { Link } from '@reach/router'
import { useSelector } from 'react-redux'
import { ListItem, ListItemIcon, ListItemText, Divider }  from '@material-ui/core'
import styled from 'styled-components'
import { getMenuFiltered } from '../../views/admin'

export const DashboardItens = () => {
  const userKind = useSelector((state) => state.auth.user?.kind)
  const menuFilter = getMenuFiltered(userKind, true)

  const listMenu = menuFilter.map((menu, index) => 
  <div key={index}> 
   <Divider/>
      <ListItem component={Link} to={menu.route.replace('/', '')}>
        <ListItemIcon>{menu.icon}</ListItemIcon>
        <ListItemText primary={menu.title}/>
      </ListItem>
  </div>)

  return(
    <div> 
     {listMenu}
    </div>
  );

}
//estilos
// const div = styled.div`
  
// `
// const NavBar = styled.div`
//   background-color:#cccccc;
//   padding:20px;
//   display:flex;
// `
// const Nav = styled.nav`
//   display:flex;
//   flex-direction: column;
// `