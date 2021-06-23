import React from 'react';
import styled from 'styled-components'
import { 
  Grid,
  Container,
  Paper,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import AllCategoriesList from '../../../components/portal/home/categories.list'
import MainBanner from '../../../assets/images/main-banner/bannerhome.png'

const useStyles = makeStyles((theme) => ({
  root:{
    flexgrow:5,
    '& > *':{
      margin: theme.spacing(0),
      width: theme.spacing('100vw'),
      height: theme.spacing('auto'),
      padding:theme.spacing(10),
    },

  },

}))

const Home = () => {
  const classes = useStyles()
  
  return(
    <div>
      <IntroHome>
        <h1>Home</h1>
      </IntroHome>
      <Container>
        <div className={classes.root}>
          {/* <Paper elevation={3}> */}
            <div>
              <h1>Como funciona</h1>
              <hr/>
            </div>
            <AllCategoriesList/>
          {/* </Paper> */}
        </div>
      </Container>  
    </div>
  )
}

export default Home

const IntroHome = styled.div`
  background-image: url(${MainBanner});
  height: 500px;
  margin: 0;
  display: flex;
  padding: 0;
  overflow: hidden;
  position: relative;
  align-items: center;
  background-size: cover;
  background-position: center center;
`