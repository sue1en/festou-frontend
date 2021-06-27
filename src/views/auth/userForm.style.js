const newUserFormStyle = {
  root:{
    flexGrow:1,
    minHeight: '100vh',
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent:'center',
  },
  mainBox:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // padding: '20px',
    // margin:'40px',
    // border:'solid',
    // borderWidth:'2px',
    // borderColor: '#000000',
    // borderRadius:'10px',
    '& h1':{
      backgroundColor:'#eee',
      padding: '25px',
      
    }
  },
  formStyled: {
    display: 'flex',
    flexDirection: 'column',
    width: '420px',
    padding: '60px 30px 30px 30px',
    margin:'0px 40px 40px 40px',
    border:'solid',
    borderWidth:'2px',
    borderColor: '#000000',
    borderRadius:'10px',
    backgroundColor:'#eee',
  },
  textFieldBox:{
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent:'center', 
    // padding: "25px", 
    // backgroundColor:'#fff',
    
  },
  textFieldStyle:{
    marginBottom: '15px',
   
  },
  imageMainBox:{
    display: 'flex',
    justifyContent: 'flex-end',
    // width: '70%',
    // backgroundColor:'#fff',
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

export default newUserFormStyle;