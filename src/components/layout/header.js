import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link as LinkRoute } from '@reach/router';
import styled from 'styled-components';
import { fade, makeStyles } from '@material-ui/core/styles'
import { 
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Menu,
  Avatar,
  Link,
} from '@material-ui/core'
//icons
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle';
//itern import
import { isAuthenticated } from '../../config/auth';
import { signOutAction } from '../../store/auth/auth.action';
//image
import HeaderLogo from '../../assets/logo/FestouHeaderLogo.svg'


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    // zIndex: theme.zIndex.drawer + 1,
    backgroundColor:'#000000',
    position: 'absolute',
    top: 0,
    // width: theme.spacing('100vw'),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));


const Header = () => {
  const dispatch = useDispatch()
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const logout = () => {
    dispatch(signOutAction())
  };

  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link component={LinkRoute} color="inherit" noWrap to="admin">
          Dashboard
        </Link>
      </MenuItem>
      <MenuItem onClick={logout}>Logout</MenuItem>
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link component={LinkRoute} color="inherit" noWrap to="products">
          Produtos
        </Link>
      </MenuItem>
      <MenuItem>
        <Link component={LinkRoute} color="inherit" noWrap to="aboutus">
          Sobre nós
        </Link>
      </MenuItem>
      {isAuthenticated() ? 
        (
          <div>
            <MenuItem>
              <Link component={LinkRoute} color="inherit" noWrap to="admin">
                Dashboard
              </Link>
            </MenuItem>
            <MenuItem onClick={logout}>
              Logout
            </MenuItem>
          </div>
        ) : (
          <div>
            <MenuItem>
              <Link component={LinkRoute} color="inherit" noWrap to="newsupplier"> 
                Seja Parceiro
              </Link>
            </MenuItem>
            <MenuItem>
              <Link component={LinkRoute} color="inherit" noWrap to="newclient"> 
                Cadastrar
              </Link>
            </MenuItem>
            <MenuItem>
              <Link component={LinkRoute} color="inherit" noWrap to="signin"> 
                Login
              </Link>
            </MenuItem>
          </div>
        )}
    </Menu>
  );

  return(
    <div className={classes.grow}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Link  component={LinkRoute} color="inherit" noWrap to="/">
            <Typography className={classes.title} variant="h5" noWrap>
              <Avatar src={HeaderLogo} alt='logo'/>
                festou
            </Typography>
          </Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <MenuItem>
              <Link component={LinkRoute} color="inherit" noWrap to="products"> 
                Produtos
              </Link>
            </MenuItem>
            <MenuItem>
              <Link component={LinkRoute} color="inherit" noWrap to="aboutus"> 
                Sobre
              </Link>
            </MenuItem>
            {isAuthenticated() ?
              (
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              ) : (
                <div className={classes.sectionDesktop}>
                  <MenuItem>
                    <Link component={LinkRoute} color="inherit" noWrap to="newsupplier"> 
                      Seja Parceiro
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link component={LinkRoute} color="inherit" noWrap to="newclient">
                      Cadastrar
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link component={LinkRoute} color="inherit" noWrap to="signin">
                      Login
                    </Link>
                  </MenuItem>
                </div>
            )}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton aria-label="show more" aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  )
}

export default Header;

//estilos
/* const HeaderTag = styled.header`
   background-color:${props => props.theme.main};
`*/