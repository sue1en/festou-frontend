const dashboardTableStyle =((theme) => ({
  root: {
    backgroundColor: '#ffffff',
    borderRadius:'5px',
    boxShadow:`0 0 3px 1px #ccc`,
  },
  table:{
    minWidth:500,
  },
  mainHeadRow:{
    '& th':{
      color: theme.palette.blackee.main,
      fontSize:'20px',
      '&:last-child':{
      },
    },
  },
  secondaryHeadRow:{
    backgroundColor: theme.palette.secondary.light,
    '& th':{
      textAlign:'center',
    },
  },
  ButtonNew:{
    // margin: theme.spacing(1),
  },
  bodyTable:{
    '& td':{
      textAlign:'center',
    },
  },
  media:{
    maxWidth:60,
    fontSize:12,
  },
}));

export default dashboardTableStyle;