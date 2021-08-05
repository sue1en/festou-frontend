import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  makeStyles,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  TableContainer,
} from '@material-ui/core'
//ICONS
import ImageIcon from '@material-ui/icons/Image';
//STYLES
import tableStyle from '../../../assets/styles/tableList.style'

const useStyles = makeStyles(tableStyle)

const ClientsList = ({ data, loading }) => {
  const classes = useStyles()

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
            <TableCell align='left' colSpan={4}>
              Lista de Produtos
            </TableCell>
          </TableRow>
          <TableRow className={classes.secondaryHeadRow}>
            <TableCell>Imagem</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Telefone</TableCell>
            <TableCell>Endereço</TableCell>
            <TableCell>Cidade</TableCell>
            <TableCell>Uf</TableCell>
            <TableCell>Data de Nascimento</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.bodyTable}>
          {data.map((data, i)=> (
            <TableRow key={i}>
              <TableCell>
                {imgPath+data.image !== undefinedImg ? (
                  <img src={imgPath + data.image} alt={data.name}  className={classes.media}/>
                ) : (
                  <ImageIcon/>
                )}
              </TableCell>
              <TableCell>
                {data.name}
              </TableCell>
              <TableCell>
                {data.email}
              </TableCell>
              <TableCell>
                {data.status ? 'Ativo' : 'Inativo'}
              </TableCell>
              <TableCell>
                {data.phoneNumber}
              </TableCell>
              <TableCell>
                {data.address}
              </TableCell>
              <TableCell>
                {data.city}
              </TableCell>
              <TableCell>
                {data.uf}
              </TableCell>
              <TableCell>
                {data.birthdate}
              </TableCell>
            </TableRow> 
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ClientsList