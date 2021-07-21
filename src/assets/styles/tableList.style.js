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