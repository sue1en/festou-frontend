import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategoryAct } from '../../../store/categories/category.action';

const AllCategoriesList = () =>{
  const dispatch = useDispatch();
  // // const [modal, setModal] = React.useState({
  //   //   status: false
  //   // })

  const category = useSelector(state => state.categories.all?.data);
  //   const loadingSelector = useSelector(state => state.categories.loading)
    
  useEffect(() => {
    dispatch(getAllCategoryAct());
  }, [dispatch]);

  return (
    <>
      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>imagem</th>
            </tr>
        </thead>
        <tbody>
            {category?.map((category, i)=> (
                <tr key={i}>
                    <th>{category.id}</th>
                    <td>{category.name}</td>
                    <td><img src={category.image}/></td>
                </tr>
            ))}
        </tbody>
      </table>
    </>
  )

}

export default AllCategoriesList;