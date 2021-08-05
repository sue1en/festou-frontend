const newUserFormStyle = ((theme) => ({
  root:{
    flexGrow:1,
    minHeight: '100vh',
    display: 'flex',
    justifyContent:'center',
  },
  mainBox:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formTitleIcon:{
    margin:'25px 25px 30px 25px',
    padding:'5px',
    color:theme.palette.whitee.main,
    backgroundColor:theme.palette.primary.main,
    borderRadius:'150px',
    '& > svg': {
      fontSize:'70px',
    },
  },
  formTitle:{
    margin:'25px 25px 30px 25px',
    padding:'10px',
    color:theme.palette.primary.dark,
    borderRadius:'10px',
    '& > svg': {
      fontSize:'60px',
    },
  },
  formStyled: {
    maxWidth: '450px',
  },
  textFieldBox:{
  },
  
  textFieldStyle:{
    marginBottom: '25px',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        // borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: theme.palette.primary.main,
        boxShadow:`inset 0 0 6px ${theme.palette.primary.light}`,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.primary.main,
      },
    },
  },
  inputIcon:{
    color: theme.palette.blackee.light,
  },
  imageMainBox:{
    
  },
  imageUploadBox: {
    display:'flex',
    flexDirection:'row',
    alignItems:'flex-start',
    // justifyContent:'space-between',
    marginBottom:'30px',
  },
  imageButton:{
    // width:'175px',
    height:'50px',
    marginLeft:'10px',
    '&:hover':{
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.blackee.main,
    },
  },
  profilePhoto: {
    borderRadius:'5px',
    border:'solid',
    borderWidth:'1px',
    height:'175px',
    width:'175px',
    backgroundColor: theme.palette.whitee.main,
    borderColor: theme.palette.primary.main,
  },
  styledButton:{
    marginBottom:'25px',
    fontWeight:"bold",
    '&:hover':{
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.blackee.main,
    },
  },
  redirectBox:{
    backgroundColor: theme.palette.primary.light,
    borderColor: theme.palette.primary.light,
    color: theme.palette.blackee.main,
    padding:'10px 10px 10px 10px',
    marginBottom:'50px',
    borderRadius:'5px',
    border:'solid',
    borderWidth:'1px',
    '& p':{
      padding:'5px',
      '& a':{
        textDecoration: 'none',
        padding:'3px 8px 3px 8px',
        margin:'3px 8px 3px 8px',
        borderRadius:'5px',
        margingLeft:'5px',
        fontWeight:"bold",
        '&:hover':{
          backgroundColor: theme.palette.whitee.main,
          borderBottom:'solid',
          borderBottomWidth:'2px',
        },
      },
      
    },
  },
}))

export default newUserFormStyle;