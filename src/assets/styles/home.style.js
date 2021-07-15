const homeStyle = ((theme) => ({
  homeIntroBox:{
    display: 'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    borderRadius:'30px',
    backgroundColor: '#4dc9ff',
    '& img': {
      height: '500px',
      alignSelf:'flex-end',
      margin: '25px 25px 25px 25px',
    },
    '& div': {
      // color:theme.palette.blackee.main,
      color:'#00103b',
      maxWidth: '500px',
      margin: '25px 25px 25px 25px',
      '& h1':{
        margin: '25px 0 25px 0',
        fontSize:'50px',
      },
      '& p':{
        fontSize:'20px',
      }
    }
    // [theme.breakpoints.up('md')]: {
    //   display: 'flex',
    // }
  },
 
  categoryBox:{
    flexgrow:5,
    color:'#00103b',
    '& > *':{
      margin:'60px 0 60px 0',
    },
  },
  
}));

export {
  homeStyle,
}