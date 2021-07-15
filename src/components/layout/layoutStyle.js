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
  container:{
    maxWidth:'1700px',
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
          backgroundColor: theme.palette.primary.light,
          transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        },
      },
    },
  },
  munuItemStyle: {
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: 'rgba(30, 40, 50, 0.1)',
    }
  },
  
  textLink: {
    color:theme.palette.primary.dark,
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
          backgroundColor: theme.palette.primary.light,
        },
      },
    }, 
  },
}))

const mainStyle = {
  mainBox:{
    marginTop:'120px',
    maxWidth:'1500px',
    // display:'flex',
    // height:'100%',
    // flexGrow: 1,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
}

const footerStyle = ((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    display: 'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    height: '150px',
    zIndex: theme.zIndex.drawer + 1,
    position: 'relative',
    width: theme.spacing('100%'),
    backgroundColor:theme.palette.secondary.dark,
    top: 'auto',
    bottom: 0,
  },
  brandingBox:{
    display: 'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    '& p':{
    },
    '& img': {
      display: 'none',
      width: '130px',
      margin: '10px 50px 5px 50px',
      [theme.breakpoints.up('xs')]: {
        display: 'flex',
      },
    },
  },
}))

export {
  headerStyle,
  mainStyle,
  footerStyle,
} 
  