

const headerStyle = ((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    display: 'flex',
    justifyContent:'center',
    height: '70px',
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor:theme.palette.background.main,
    position: 'absolute',
    top: 0,
    width: theme.spacing('100%'),
  },
  logo: {
    display: 'none',
    minWidth: '120px',
    margin: '10px 50px 5px 50px',
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      '& li':{
        "&:hover": {
          borderRadius:'20px',
          backgroundColor: theme.palette.third.light,
        },
      },
    },
  },
  munuItemStyle: {
  },
  textLink: {
    color:theme.palette.navBarLink.main,
    textDecoration:'none',
    fontWeight:'bold',
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
      '& li':{
        "&:hover": {
          borderRadius:'10px',
          backgroundColor: theme.palette.third.light,
        },
      },
    }, 
  },
}))

const mainStyle = {
  mainBox:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    marginTop:'150px',
    height:'100%',
    width:'80vw',
    flexGrow: 1,
  },
}

const footerStyle = {
  root: {
    backgroundColor: '#ccc',
    position: 'relative',
    bottom: 0,
    width:'100%',
    height: 100,
  },
}

export {
  headerStyle,
  mainStyle,
  footerStyle,
} 
  