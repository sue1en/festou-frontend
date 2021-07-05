const modalFormStyle = {
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
    justifyContent: 'flex-end',

  },
  imageUploadBox: {
    marginBottom:'20px',
    display: 'flex',
    alignItems: 'flex-start',
    
  },
  profilePhoto: {
    height:'90px',
    width:'90px',
    marginLeft:'10px',
    border:'solid',
    borderWidth:'1px',
    borderColor: '#000000',
    borderRadius:'4px',
  },
  styledButton:{
    marginBottom:'10px',
    backgroundColor:'#ffb74d',
  }
}

export default modalFormStyle;