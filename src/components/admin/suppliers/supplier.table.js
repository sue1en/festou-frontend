import React from 'react';
import {
  makeStyles,
  Table,
  Button,
  Switch,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  TableContainer,
  FormControlLabel,
} from '@material-ui/core'
//ICONS
import ImageIcon from '@material-ui/icons/Image';
//STYLES
import tableStyle from '../../../assets/styles/tableList.style'

const useStyles = makeStyles(tableStyle)

const SuppliersList = ({ data, modal, loading }) => {
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
            <TableCell align='left' colSpan={3}>
              Lista de Fonecedores
            </TableCell>
          </TableRow>
          <TableRow className={classes.secondaryHeadRow}>
            <TableCell>Imagem</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>
              Detalhes
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.bodyTable}>
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
                {data.tradeName}
              </TableCell>
              <TableCell>
                {/* TRATAR SWITCH */}
                <div>
                  <FormControlLabel
                    control={
                      <Switch
                        name="status"
                        color="primary"
                        // disabled={loading}
                        checked={data.status.toUpperCase() === 'ATIVA'}
                        onChange={() => modal(2, data.id, !(data.status.toUpperCase() === 'ATIVA'))}
                      />
                    }
                    label={data.status}
                  />
                </div>
              </TableCell>
              <TableCell>
                <Button
                  variant='contained'
                  size='small'
                  color="primary" 
                  aria-label="add" 
                  onClick={() => modal(1, data.id)}
                >
                  Detalhes
                </Button>
              </TableCell>
            </TableRow> 
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default SuppliersList