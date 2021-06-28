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
        <Link component={LinkRoute} color="inherit" noWrap to="admin">
          Dashboard
        </Link>
      </MenuItem>
      <MenuItem onClick={logout}>Logout</MenuItem>
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
          <Link component={LinkRoute} color="inherit" noWrap to="/">
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