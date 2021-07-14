import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link as LinkRoute } from '@reach/router';
import { fade, makeStyles } from '@material-ui/core/styles'
import { 
  Link,
  Menu,
  Avatar,
  AppBar,
  Toolbar,
  MenuItem,
  IconButton,
  Typography,
} from '@material-ui/core'
//icons
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle';
//itern import
import { isAuthenticated } from '../../config/auth';
import { signOutAction } from '../../store/auth/auth.action';
//style
import { headerStyle } from './layoutStyle'
//image
import HeaderLogo from '../../assets/images/logo/FestouHeaderLogo.svg'

const useStyles = makeStyles(headerStyle)

const Header = () => {
  const dispatch = useDispatch()
  const classes = useStyles();
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [mobileAnchorEl, setMobileAnchorEl] = useState(null);

  const logout = () => {
    dispatch(signOutAction())
  };

  const handleProfileMenuOpen = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };
  const handleProfileMenuClose = () => {
    setProfileAnchorEl(null);
    handleMobileMenuClose();
  };
  
  const handleMobileMenuOpen = (event) => {
    setMobileAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={profileAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={Boolean(profileAnchorEl)}
      onClose={handleProfileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuClose}>
        <LinkRoute to="admin" className={classes.textLink}>
          Dashboard
        </LinkRoute>
      </MenuItem>
      <MenuItem onClick={logout} className={classes.textLink}>Logout</MenuItem>
    </Menu>
  );

  const menuMobile = 'customized-profile-menu';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuMobile}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={Boolean(mobileAnchorEl)}
      onClose={handleMobileMenuClose}
    >
      <MenuItem className={classes.menuItemStyle}>
        <LinkRoute to="products" className={classes.textLink}>
          Produtos
        </LinkRoute>
      </MenuItem>
      <MenuItem ListItemClasses={classes.menuItemStyle}>
        <LinkRoute to="aboutus" className={classes.textLink}>
          Sobre nós
        </LinkRoute>
      </MenuItem>
      {isAuthenticated() ? 
        (
          <div>
            <MenuItem className={classes.menuItemStyle}>
              <LinkRoute color="primary" to="admin" className={classes.textLink}>
                Dashboard
              </LinkRoute>
            </MenuItem>
            <MenuItem onClick={logout}>
              Logout
            </MenuItem>
          </div>
        ) : (
          <div>
            <MenuItem className={classes.menuItemStyle}>
              <LinkRoute color="inherit" to="newsupplier" className={classes.textLink}> 
                Seja Parceiro
              </LinkRoute>
            </MenuItem>
            <MenuItem className={classes.menuItemStyle}>
              <LinkRoute color="inherit" to="newclient" className={classes.textLink}> 
                Cadastrar
              </LinkRoute>
            </MenuItem>
            <MenuItem className={classes.menuItemStyle}>
              <LinkRoute color="inherit" to="signin" className={classes.textLink}> 
                Login
              </LinkRoute>
            </MenuItem>
          </div>
        )}
    </Menu>
  );

  return(
    <div className={classes.grow}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <LinkRoute to="/">
            <img src={HeaderLogo} alt='FestouLogo'className={classes.logo}/>
          </LinkRoute>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <MenuItem ListItemClasses={classes.menuItemStyle}>
              <LinkRoute to="products" className={classes.textLink}> 
                Produtos
              </LinkRoute>
            </MenuItem>
            <MenuItem className={classes.menuItemStyle}>
              <LinkRoute to="aboutus" className={classes.textLink}> 
                Sobre
              </LinkRoute>
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
                  <MenuItem className={classes.menuItemStyle}>
                    <LinkRoute to="newsupplier" className={classes.textLink}> 
                      Seja Parceiro
                    </LinkRoute>
                  </MenuItem>
                  <MenuItem className={classes.menuItemStyle}>
                    <LinkRoute to="newclient" className={classes.textLink}>
                      Cadastrar
                    </LinkRoute>
                  </MenuItem>
                  <MenuItem className={classes.menuItemStyle}>
                    <LinkRoute to="signin" className={classes.textLink}>
                      Login
                    </LinkRoute>
                  </MenuItem>
                </div>
            )}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton aria-label="show more" aria-haspopup="true" onClick={handleMobileMenuOpen}>
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