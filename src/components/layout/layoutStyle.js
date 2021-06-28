

const headerStyle = ((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    display: 'flex',
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor:'#000000',
    position: 'absolute',
    top: 0,
    width: theme.spacing('100%'),
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
}))

const mainStyle = {
  mainBox:{
    display:'block',
    marginTop:'64px',
    height:'100%',
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
  