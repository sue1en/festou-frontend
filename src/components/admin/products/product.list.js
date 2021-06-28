import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllProductAct,
  createProductAct,
  editProductAct,
  updateProductAct,
  deleteProductAct,
} from '../../../store/products/products.action';
import Form from './product.form';
import Remove from './product.remove';
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


const AllProductsList = () => {
  const classes = useStyles()
  const dispatch = useDispatch();
  const [modal, setModal] = useState({})
    
  const product = useSelector(state => state.products.all?.data);
  // // console.log(category)
  // const loading = useSelector(state => state.products.loading);
  const selected = useSelector(state => state.products.selected);

  const callProduct = useCallback(() => {
    dispatch(getAllProductAct())
    }, [dispatch]);

  useEffect(() => {
    callProduct();
  }, [callProduct]);

  const closeModal = () => setModal({ status: false })
  const openModal = (type = 1, id = null) => {
    if(id){
      dispatch(editProductAct(id)).then(() => 
        setModal({type, id, status:true})
      )
    } else {
      setModal({type, id, status: true})
    }
  }
  const submitForm = (form) => {
    switch (modal.type){
      case 1:
        dispatch(createProductAct(form))
        return
      case 2:
        dispatch(updateProductAct(form))
        return
      case 3:
        dispatch(deleteProductAct(modal.id)).then(() => setModal(false))
        return
      default:
        return false
    }
  }
  
  return (
    <div>
      
      <h3>TABELA Produtos</h3>
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
            {product?.map((product, i)=> (
              <StyledTableRow key={i}>
                <StyledTableCell>
                  { product.image ? (
                    <img className={classes.media} src={process.env.REACT_APP_API + product.image} alt={`product ${product.name}`}/>
                  ) : (
                    <ImageIcon/>
                  )}
                </StyledTableCell>
                <StyledTableCell>{product.name}</StyledTableCell>
                {/* <StyledTableCell>{product.id}</StyledTableCell> */}
                <StyledTableCell>
                  {product.status ? 'ativo' : 'inativo'}</StyledTableCell>
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

export default AllProductsList;
