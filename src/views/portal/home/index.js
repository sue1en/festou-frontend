import React from 'react';
import { 
  Grid,
  Container,
  Paper,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import AllCategoriesList from '../../../components/portal/home/categories.list';
import MainBannerFigures from '../../../assets/images/main-banner/MainFigures.svg';
import { homeStyle } from '../../../assets/styles/home.style';

const useStyles = makeStyles(homeStyle)

const Home = () => {
  const classes = useStyles()
  
  return(
    <div>
      <div className={classes.homeIntroBox}>
        <div className={classes.textfieldBanner}>
          <h1>Venha festejar conosco.</h1>
          <p>Encontre diversos produtos necessários para realizar a sua festa!</p>
        </div>
        <img src={MainBannerFigures} alt='Figuras do banner'/>
      </div>
      <div className={classes.categoryBox}>
        <div>
          <h1>Categorias</h1>
        </div>
        <AllCategoriesList/>
      </div>
    </div>
  )
}

export default Home