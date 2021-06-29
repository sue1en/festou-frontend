import React, {useState} from 'react';
import {
  makeStyles,
  Button,
  Box,
  Typography,
  Fab,
  IconButton,
  Collapse,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  TableContainer,
} from '@material-ui/core'
//ICONS
import { DataGrid } from '@material-ui/data-grid';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import AddIcon from '@material-ui/icons/Add';
import ImageIcon from '@material-ui/icons/Image';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
//STYLES
import tableStyle from '../../../assets/styles/tableList.style'

const useStyles = makeStyles(tableStyle)

const CategoryList = ({ data, modal, loading }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false);

  const handleClick = (data) => {
     
    setOpen(!open);
  };


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

  const Colipss = ({ id }) => {
    return(
      <>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <TableRow className={classes.mainHeadRow}>
            <TableCell align='left' colSpan={4}>
              {id}
            </TableCell>
          </TableRow>
        </Collapse>
      </>

    )
  }

  const imgPath = process.env.REACT_APP_API;
  //falta definir essa const incompleta
  const undefinedImg = imgPath 

  if(loading){
    return <h1>Loading...</h1>
  }
  return (
    <TableContainer className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.mainHeadRow}>
            <TableCell align='left' colSpan={3}>
              Lista de Categorias
            </TableCell>
            <TableCell>
              <Fab
                variant="extended" 
                color="secondary" 
                aria-label="add" 
                className={classes.ButtonNewCategory}
                onClick={() => modal(1, null)}
              >
                Nova <AddIcon/>
              </Fab>
            </TableCell>
          </TableRow>
          <TableRow className={classes.secondaryHeadRow}>
            <TableCell>Imagem</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Ações</TableCell>
            <TableCell/>
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
              <TableCell>
                <IconButton onClick={() => handleClick(data)}>
                  {!open ? <ExpandMore/> : <ExpandLess/>}
                </IconButton>
              </TableCell>
              <TableRow>
                {Colipss(data)}
              </TableRow>
            </TableRow> 
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CategoryList