import React,{Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';
import Inicio from './Components/Inicio';
import Evento from './Evento';
import Iframe from './pages/Iframe';
import PaginaNew from'./pages/PaginaNew';




function App() {
  return (
    <Fragment>
       <Router>
       <Switch>        
          <Route exact path='/' render={()=>(window.location = "http://www.formosasoftwarefactory.com")}/>          
          <Route path='/Juego' exact component={Inicio} />
          <Route path='/Evento' exact component={Evento} />   
          <Route path='/Formulario' exact component={PaginaNew} />    
          <Route path='/Iframe' exact component={Iframe} />          
        </Switch>
       </Router>
    </Fragment>
  );
}

export default App;
