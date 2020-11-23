import React,{Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';
import Inicio from './Components/Inicio';
import './App.css';



function App() {
  return (
    <Fragment>
       <Router>
       <Switch>        
          <Route exact path='/' render={()=>(window.location = "http://www.formosasoftwarefactory.com")}/>          
          <Route path='/Juego' exact component={Inicio} />
          
        </Switch>
       </Router>
    </Fragment>
  );
}

export default App;
