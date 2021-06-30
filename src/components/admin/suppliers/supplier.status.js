import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography
} from '@material-ui/core'

const ChengeStatus = ({ status, close }) => {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Deseja inativar o fornecedor ?
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button
          size="small"
          onClick={status}
          variant="contained"
          color="primary"
        >
          Sim
        </Button>
        <Button
          size="small"
          onClick={close}
          variant="contained"
          color="secondary"
        >
          Não
        </Button>
      </CardActions>
    </Card>
  )
}


export default ChengeStatus
