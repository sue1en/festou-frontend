import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllSuppliersAct,
  createSupplierAct,
  editSupplierAct,
  updateSupplierAct,
  deleteAct,
} from '../../../store/categories/category.action';
import Form from './categories.form';
import Remove from './category.remove';
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


const AllSuppliersList = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState({})
    
  const suppliers = useSelector(state => state.supplier.all?.data);
  const loading = useSelector(state => state.categories.loading);
  const selected = useSelector(state => state.categories.selected);

const callSuppliers = useCallback(() => {
  dispatch(getAllSuppliersAct())
  }, [dispatch]);

  useEffect(() => {
    callSuppliers();
  }, [callSuppliers]);

  const closeModal = () => setModal({ status: false })
  const openModal = (type = 1, id = null) => {
    if(id){
      dispatch(editSupplierAct(id)).then(() => 
        setModal({type, id, status:true})
      )
    } else {
      setModal({type, id, status: true})
    }
  }
  const submitForm = (form) => {
    switch (modal.type){
      case 1:
        dispatch(createSupplierAct(form))
        return
      case 2:
        dispatch(updateSupplierAct(form))
        return
      case 3:
        dispatch(deleteAct(modal.id)).then(() => setModal(false))
        return
      default:
        return false
    }
  }
  
  return (
    <div>
      <h3>TABELA Fornecedores</h3>
      <hr/>
      <IconButton onClick={() => openModal(1, null)}>
        <h3>Nova</h3>
      </IconButton>
      <hr/>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell>Imagem</TableCell>
                <TableCell>Nome</TableCell>
                <TableCell>ID</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Editar</TableCell>
                <TableCell>Excluir</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {suppliers?.map((suppliers, i)=> (
              <TableRow key={i}>
                <TableCell><img src={suppliers.image} alt="Imagem"/></TableCell>
                <TableCell>{suppliers.name}</TableCell>
                <TableCell>{suppliers.id}</TableCell>
                <TableCell>{suppliers.status}</TableCell>
                <TableCell>
                  <IconButton onClick={() => openModal(2, null)}>
                    <EditIcon/>
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => openModal(3, null)}>
                    <DeleteOutlinedIcon/>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <DialogModal title="suppliers" open={modal.status || false} close={closeModal}>
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

export default AllSuppliersList;
