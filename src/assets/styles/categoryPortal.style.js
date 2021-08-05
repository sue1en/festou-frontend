const categoryStyled = ((theme) => ({
  root: {
    display: 'flex',
    justifyContent:'space-between',
    alignItems:'flex-start'
  },
  categoryBox:{
    display: 'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    borderRadius:'30px',
    width:'25%',
    minHeight:'75vh',
    padding:'25px',
    backgroundColor: '#fcfcfc',
    color: '#111111',
    margin:'0 60px 60px 0',
    boxShadow:'0 0 5px #b5b5b5',
    '& img':{
      width: '-webkit-fill-available',
      borderRadius:'20px',
    },
    '& h1':{
      margin:'0 0 20px 0',
    },
    '& p':{
      margin:'20px 0 0 0',
    },
  },
  productsBox: {
    display: 'flex',
    justifyContent:'center',
    alignItems:'flex-start',
    borderRadius:'30px',
    width:'70%',
    // margin:'0 60px 0 60px',
    minHeight:'75vh',
    backgroundColor: '#dbdbdb',
    padding:'25px',
    // boxShadow:'0 0 5px #b5b5b5',
  },
  productsCard:{
    display:'flex',
    justifyContent:'space-between',
    backgroundColor: '#ffffff',
    color: '#111111',
    padding:'15px',
    borderRadius:'10px',
    boxShadow:'0 0 5px #b5b5b5',
    width:'100%',
  },
  productInfo:{
    width:'65%',
    '& h3':{
      marginBottom:'5px',
    },
    '& h5':{
      margin:'0 0 20px 0',
    },
    '& p':{
      margin:'20px 0 0 0',
    },
  },
  productImg:{
    backgroundColor: '#ccc',
    width:'30%',
    borderRadius:'5px',
  },
}));

export {
  categoryStyled,
};
  