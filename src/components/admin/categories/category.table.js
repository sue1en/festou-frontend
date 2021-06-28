import React from 'react';
import {
  makeStyles,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Collapse,
  IconButton,
  Button,
} from '@material-ui/core'
//ICONS
import { DataGrid } from '@material-ui/data-grid';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import ImageIcon from '@material-ui/icons/Image';

const useStyles = makeStyles({
  root:{
    height:500,
  },
  media:{
    maxWidth:40,
    fontSize:12,
  },
})

const CategoryList = ({ data, modal, loading }) => {
  const classes = useStyles()
  
  const actions = ({ id }) => {
    return (
      <>
        <IconButton  onClick={() => modal(2, id)}>
          <EditIcon/>
        </IconButton>
        <IconButton  onClick={() => modal(3, id)}>
          <DeleteOutlinedIcon/>
        </IconButton>
      </>
    )
  };

  const imgPath = process.env.REACT_APP_API;

  //falta definir essa const incompleta
  const undefinedImg = imgPath 

  if(loading){
    return <h1>Loading...</h1>
  }
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Imagem</TableCell>
          <TableCell>Nome</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Ações</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data?.map((data, i)=> (
          <TableRow key={i}>
            <TableCell>
              {imgPath+data.image !== undefinedImg ? (
                <img src={imgPath + data.image} alt={`Cat ${data.name}`}  className={classes.media}/>
              ) : (
                <ImageIcon/>
              )}
            </TableCell>
            <TableCell>
              {data.name}
            </TableCell>
            <TableCell>
              {/* TRATAR SWITCH */}
              {data.status ? 'ativo' : 'inativo'}
            </TableCell>
            <TableCell>
              {actions(data)}
            </TableCell>
          </TableRow> 
        ))}
      </TableBody>
    </Table>
  )
}

export default CategoryList