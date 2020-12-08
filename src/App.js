import React,{ useState,useEffect, Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Evento from './Evento';
import Iframe from './pages/Iframe';
import PaginaNew from'./pages/PaginaNew';

function App() {

 return (
    <Fragment>
       <Router>
       <Switch>        
          <Route exact path='/' render={()=>(window.location = "http://www.formosasoftwarefactory.com")}/>          
          <Route path='/Formulario' component={() => <PaginaNew id='1' />} />
          <Route path='/Formulario-Colegio' component={() => <PaginaNew id='2' />} /> 
          <Route path='/Formulario-Empresa' component={() => <PaginaNew id='3' />} />        
          <Route path='/Iframe' exact component={Iframe} />    
          <Route path='/Evento' component={() => <Evento id='1' />} />  
          <Route path='/Colegio' component={() => <Evento id='2' />} />
          <Route path='/Empresa' component={() => <Evento id='3' />} />      
        </Switch>
       </Router>
    </Fragment>
  );
}

export default App;


{/* <Route 
path='/Evento'
component={() => <Evento id='1' />} />   
<Route 
path='/Evento2'
component={() => <Evento id='2' />} />    */}