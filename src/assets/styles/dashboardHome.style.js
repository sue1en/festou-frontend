const dashHomeStyle = ((theme) => ({
  root:{
    display: 'flex',
    flexDirection:'column'
  },
  sectionHeader:{
    background: '#ccc',
    
  },
  mainBody:{

  },
  list:{
    background: '#fff',
    maxWidth:'600px',
    boxShadow:`0 0 10px #ccc`,
    borderRadius: '20px',
    margin:'50px',
    
  },
  listAvatar:{
    alignSelf:'center',
    '& .MuiAvatar-root':{
      width:'150px',
      height:'150px',

    },
  },
  listItem:{
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    '& .MuiListSubheader-root':{
      lineHeight: '25px',
      fontSize: '18px',
    },
    '& .MuiListSubheader-gutters':{
      paddingLeft: '15px',
      paddingRight: '15px',
    },
  },
  listItemTitle:{

  },
  listText:{
    width:'100%',
    padding: '10px 15px',
    // background: theme.palette.primary.light,
    borderRadius: '10px',
    borderColor: theme.palette.blackee.light,
    border:'solid',
    borderWidth:'1px',
  },

}));

export {
  dashHomeStyle
};