import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllCategoryAct,
  createCategoryAct,
  editCategoryAct,
  updateCategoryAct,
  deleteCategoryAct,
} from '../../../store/categories/category.action';
import Form from './categories.form';
import Remove from './category.remove';
import { makeStyles, withStyles } from '@material-ui/core/styles'
import DialogModal from '../../dialog';
import{
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Collapse,
  IconButton,
  Button,
} from '@material-ui/core'
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import ImageIcon from '@material-ui/icons/Image';

const StyledTableCell = withStyles((theme) => ({
  head:{
    backgroundColor:theme.palette.common.white,
    color:theme.palette.common.black,
  },
  body:{
    padding:5,
    maxHeight:60,
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root:{
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

const useStyles = makeStyles({
  media:{
    maxWidth:40,
    fontSize:12,
  }
})


const AllCategoriesList = () => {
  const classes = useStyles()
  const dispatch = useDispatch();
  const [modal, setModal] = useState({})
    
  const category = useSelector(state => state.categories.all?.data);
  // console.log(category)
  const loading = useSelector(state => state.categories.loading);
  const selected = useSelector(state => state.categories.selected);

  const callCategory = useCallback(() => {
    dispatch(getAllCategoryAct())
    }, [dispatch]);

  useEffect(() => {
    callCategory();
  }, [callCategory]);

  const closeModal = () => setModal({ status: false })
  const openModal = (type = 1, id = null) => {
    if(id){
      dispatch(editCategoryAct(id)).then(() => 
        setModal({type, id, status:true})
      )
    } else {
      setModal({type, id, status: true})
    }
  }
  const submitForm = (form) => {
    switch (modal.type){
      case 1:
        dispatch(createCategoryAct(form))
        return
      case 2:
        dispatch(updateCategoryAct(form))
        return
      case 3:
        dispatch(deleteCategoryAct(modal.id)).then(() => setModal(false))
        return
      default:
        return false
    }
  }
  
  return (
    <div>
      
      <h3>TABELA TODAS CATEGORIAS</h3>
      <hr/>
      <IconButton onClick={() => openModal(1, null)}>
        <h3>Nova</h3>
      </IconButton>
      <hr/>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <StyledTableRow>
                <StyledTableCell>Imagem</StyledTableCell>
                <StyledTableCell>Nome</StyledTableCell>
                {/* <StyledTableCell>ID</StyledTableCell> */}
                <StyledTableCell>Status</StyledTableCell>
                <StyledTableCell>Editar</StyledTableCell>
                <StyledTableCell>Excluir</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {category?.map((category, i)=> (
              <StyledTableRow key={i}>
                <StyledTableCell>
                  { category.image ? (
                    <img className={classes.media} src={process.env.REACT_APP_API + category.image} alt={`Category ${category.name}`}/>
                  ) : (
                    <ImageIcon/>
                  )}
                </StyledTableCell>
                <StyledTableCell>{category.name}</StyledTableCell>
                {/* <StyledTableCell>{category.id}</StyledTableCell> */}
                <StyledTableCell>
                  {category.status ? 'ativo' : 'inativo'}</StyledTableCell>
                <StyledTableCell>
                  <IconButton onClick={() => openModal(2, null)}>
                    <EditIcon/>
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell>
                  <IconButton onClick={() => openModal(3, null)}>
                    <DeleteOutlinedIcon/>
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <DialogModal title="categorie" open={modal.status || false} close={closeModal}>
          ALGO
          <div>
            {modal.type === 1 ? <Form submit={submitForm}/> : null}
            {modal.type === 2 ? (<Form submit={submitForm} data={selected}/>) : null}
            {modal.type === 3 ? (<Remove close={closeModal} remove={submitForm}/>) : null}
          </div>
        </DialogModal>
    </div>
  )
  
}

export default AllCategoriesList;
