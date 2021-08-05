const modalFormStyle = ((theme) => ({
  root:{
    flexGrow:1,
  },
  mainBox:{
    // display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '25px',
    minWidth: '320px',
    '& h2':{
      padding: '5px',
      marginBottom:'10px',
    }
  },
  formStyled: {
    display: 'flex',
    flexDirection: 'column',
  },
  textFieldStyle:{
    marginBottom: '15px',
    minWidth: '290px',
    maxWidth: '520px',
   
  },
  imageMainBox:{
    display: 'flex',
    justifyContent: 'flex-start',
    margin:'15px',

  },
  imageUploadBox: {
    marginBottom:'20px',
    display: 'flex',
    alignItems: 'flex-start',
    
  },
  profilePhoto: {
    height:'150px',
    width:'150px',
    marginLeft:'10px',
    border:'solid',
    borderWidth:'1px',
    borderColor:  theme.palette.blackee.main,
    borderRadius:'4px',
  },
  styledButton:{
    margin:'10px',
    minWidth: '120px',
    color:'#ffffff',
    backgroundColor:theme.palette.primary.main,
    '&:last-child':{
      backgroundColor:theme.palette.secondary.main,
      '&:hover':{
        backgroundColor:theme.palette.secondary.dark,
      }
    },
    '&:hover':{
      backgroundColor:theme.palette.primary.dark,
    }
  }
}))

export default modalFormStyle;