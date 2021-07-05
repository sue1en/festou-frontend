import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Box,
  List,
  ListItem,
  makeStyles,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  Divider,
} from '@material-ui/core'
//ICONS

//STYLES
import modalStyle from '../../../assets/styles/toModalForm.style'

const useStyled = makeStyles(modalStyle)

const SupplierDetails = ({data}) => {
  const classes = useStyled()
  const [ preview, setPreview ] = useState('')
  const percent = useSelector((state) => state.suppliers.upload?.percent || 0)
  const loading = false;

  return (
    <Box className={classes.mainBox}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell colSpan={2}>
              Detalhes do Negócio:
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Nome:</TableCell>
            <TableCell>{data.tradeName}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cnpj:</TableCell>
            <TableCell>{data.cnpj}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Endereço:</TableCell>
            <TableCell>{data.address}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cidade:</TableCell>
            <TableCell>{data.city}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Estado:</TableCell>
            <TableCell>{data.uf}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Telefone:</TableCell>
            <TableCell>{data.phoneNumber}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Email:</TableCell>
            <TableCell>{data.email}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>
              Descrição:
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>
              {data.description}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
           
    </Box>
  )
};

export default SupplierDetails;