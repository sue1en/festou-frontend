import React from 'react'
import { DataGrid } from '@material-ui/data-grid'


  
const columns = [
  { field:'id', headerName:'id', width: 70, disableColumnMenu: true},
  { field:'image', headerName:'Image', width: 160},
  { field:'name', headerName:'Name', width: 160},
  { field:'status', headerName:'Status', width: 160 },
];

// const rows = [
//   {id:i, image:category.image, name:category.name, status:category.status},
// ]



const DataList = ({ loading, columns, data }) => {
  if(loading){
    return <p>LOADING...</p>
  }
  
  return (
    <div>
      <DataGrid rows={data} columns={columns} pageSize={5} />
    </div>
  )
}

export default DataList