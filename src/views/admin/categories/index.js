import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Grid,
  CssBaseline,
  Button 
} from '@material-ui/core';
import {
  getAllCategoryAct,
  getByIdCategoryAct,
  createCategoryAct,
  editCategoryAct,
  updateCategoryAct,
  deleteCategoryAct,
} from '../../../store/categories/category.action';
import styled from 'styled-components'
//COMPONENTS
import CategoryList from '../../../components/admin/categories/category.table'
import Form from '../../../components/admin/categories/categories.form'
import Remove from '../../../components/admin/categories/category.remove';
import DialogModal from '../../../components/dialog';
import CategoryDetails from '../../../components/admin/categories/category.details'

function Categories () {
  const dispatch = useDispatch();
  const [modal, setModal] = useState({})

  const category = useSelector(state => state.categories.all?.data);
  console.log(category)
  const loading = useSelector(state => state.categories.loading);
  const selected = useSelector(state => state.categories.selected);

  console.log(selected)

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

  const submitForm = (form, id) => {
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
      case 4:
        dispatch(getByIdCategoryAct(id))
        return
      default:
        return false
    }
  }
  
  return (
    <CategoryBody>
      <div>
        <div>
          <CategoryList data={category} loading={loading} modal={openModal}/>
        </div>
        <DialogModal
          open={modal.status || false}
          close={closeModal}
          title='Categorias'  
        >
            {modal.type === 1 ? <Form close={closeModal} submit={submitForm}/> : null}
            {modal.type === 2 ? (<Form close={closeModal} submit={submitForm} data={selected}/>) : null}
            {modal.type === 3 ? (<Remove close={closeModal} remove={submitForm}/>) : null}
            {modal.type === 4 ? (<CategoryDetails data={selected}/>) : null}
        </DialogModal>
      </div>
    </CategoryBody>
  )
};

export default Categories;

const CategoryBody = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`