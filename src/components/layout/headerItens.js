import React from 'react';
import { Link } from '@reach/router';
import { useDispatch } from 'react-redux';
import {
  List,
  ListItem,
  Menu,
  MenuItem,
  Button,
  Avatar,
  Toolbar,
  IconButton,
  withStyles,
  makeStyles
} from '@material-ui/core'
//icons
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu'

import { isAuthenticated } from '../../config/auth';
import { signOutAction } from '../../store/auth/auth.action';
import { headerStyle } from './layoutStyle'
import HeaderLogo from '../../assets/images/logo/FestouHeaderLogo.svg'


const useStyles = makeStyles(headerStyle)

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #cccccc',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical:'bottom',
      horizontal:'center',
    }}
    transformOrigin={{
      vertical:'top',
      horizontal:'center',
    }}
    {...props}
  />
));
const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .muiListItemText-primary':{
        color: theme.palette.common.white,
      }
    }
  }
}))(MenuItem);


const HeaderItens = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const logout = () => {
    dispatch(signOutAction())
  }

  const [ProfileAnchorEl, setAnchorEl] =React.useState(null);
  const [mobileAnchorEl, setMobileAnchorEl] =React.useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileAnchorEl(null);
  };

  const renderMobileMenu = (
    <StyledMenu
      id='customized-menu'
      anchorEl={mobileAnchorEl}
      keepMounted
      open={Boolean(mobileAnchorEl)}
      onClose={handleMobileMenuClose}
    >
      <StyledMenuItem button component={Link} to={'/'}>
        Home
      </StyledMenuItem>
      {!isAuthenticated() ? 
        (
          <div>
            <StyledMenuItem button component={Link} to={'newsupplier'}>
              Seja Parceiro
            </StyledMenuItem>
            <StyledMenuItem button component={Link} to={'newclient'}>
              Criar conta
            </StyledMenuItem>
            <StyledMenuItem button component={Link} to={'signin'}>
              Login
            </StyledMenuItem>
          </div>
        ) : (
          <div>  
            <StyledMenuItem button component={Link} to={'admin'}>
              <AccountCircle/>
              Painel de controle
            </StyledMenuItem>
            <StyledMenuItem button onClick={logout}>
              Sair
            </StyledMenuItem>
          </div>
        )
      }
    </StyledMenu>
  );

  const renderProfileMenu = (
    <StyledMenu
      id='customized-menu'
      anchorEl={ProfileAnchorEl}
      keepMounted
      open={Boolean(ProfileAnchorEl)}
      onClose={handleProfileMenuClose}
    >
      <StyledMenuItem button component={Link} to={'admin'}>
        Painel de controle
      </StyledMenuItem>
      <StyledMenuItem button onClick={logout}>
        Sair
      </StyledMenuItem>
    </StyledMenu>
  );


  return (
    <div className={classes.grow}>
      <div className={classes.appBar}>
        <Toolbar>
          <Button component={Link} to={'/'} disableElevation>
            <Avatar src={HeaderLogo} alt='logo'/>
            <h4>Festou</h4>
          </Button>
          <List className={classes.sectionDesktop}>
            <ListItem button component={Link} to={'/'}>
              Home
            </ListItem>
            {!isAuthenticated() ? 
              (
                <div className={classes.sectionDesktop}>
                  <ListItem button component={Link} to={'newsupplier'}>
                    Seja Parceiro
                  </ListItem>
                  <ListItem button component={Link} to={'newclient'}>
                    Criar conta
                  </ListItem>
                  <ListItem button component={Link} to={'signin'}>
                    Login
                  </ListItem>
                </div>
              ) : (
                <IconButton
                aria-controls='customized-menu'
                aria-haspopup='true'
                variant='contained'
                onClick={handleProfileMenuOpen}
                >
                  <AccountCircle/>
                </IconButton>
              )
            }
          </List>
          <div className={classes.grow} />
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label='show-more'
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              >
              <MenuIcon/>
            </IconButton>
          </div>
        </Toolbar>
      </div>
      {renderProfileMenu}
      {renderMobileMenu}
    </div>
  )
};

export default HeaderItens