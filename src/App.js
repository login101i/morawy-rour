import React from 'react';
import './App.scss'
import Navbar from './components/Navbar/navbar'
import TourList from './components/TourList'
import { Button, Typography, makeStyles } from '@material-ui/core'
import deepPurple from '@material-ui/core/colors/deepPurple';



const useStyles=makeStyles({
  titleStyle:{
    fontSize:33,
    marginTop:25,
    borderBottom:`2px solid ${deepPurple[300]}`,
    width:"300px",
    textAlign:"center",
    margin:"0 auto",
    color:deepPurple[300]
  }
})



function App() {
  // const classes=useStyles();
  const classes=useStyles()

  return (

    <div className='app'>
     
      <Navbar />
      <Typography className={classes.titleStyle}>Nasze produkty</Typography>
      <TourList />
    </div>
  );
}

export default App;
