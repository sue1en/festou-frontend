import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Box,
  Grid,
  Select,
  Switch,
  Button,
  Container,
  TextField,
  Typography,
  FormControl,
  InputAdornment,
  FormControlLabel,
  makeStyles,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  TableContainer, 
} from '@material-ui/core'
//ICONS
import PhotoIcon from '@material-ui/icons/Photo';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
//STYLES
import modalStyle from '../../../assets/styles/modalForm.style'

const useStyled = makeStyles(modalStyle)

const SupplierDetails = ({data}) => {
  const classes = useStyled()
  const [ preview, setPreview ] = useState('')
  const percent = useSelector((state) => state.suppliers.upload?.percent || 0)
  const loading = false;
  console.log("###___DATA____" + data)

  return (
    <Box className={classes.mainBox}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Membro
            </TableCell>
            <TableCell/>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              Nome do Negocio:
            </TableCell>
            <TableCell>
              {data.tradeName}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Cnpj:
            </TableCell>
            <TableCell>
              {data.cnpj}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Cnpj:
            </TableCell>
            <TableCell>
              {data.cnpj}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Endereço:
            </TableCell>
            <TableCell>
              {data.address}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Cidade:
            </TableCell>
            <TableCell>
              {data.city}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Estado:
            </TableCell>
            <TableCell>
              {data.uf}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Telefone:
            </TableCell>
            <TableCell>
              {data.phoneNumber}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Email:
            </TableCell>
            <TableCell>
              {data.email}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Descrição:
            </TableCell>
            <TableCell>
              {data.description}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  )
};

export default SupplierDetails;