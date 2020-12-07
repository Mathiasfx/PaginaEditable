import React,{ useState,useEffect, Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Evento from './Evento';
import Iframe from './pages/Iframe';
import PaginaNew from'./pages/PaginaNew';




function App() {

  const [rutas,setrutas] = useState([]);
  const array = ['/uno','/dos'];

  useEffect(() => {      
      if(array){
        setrutas(array);
      }else{
        setrutas(['/Evento']);
      }              
  },[]);


console.log(rutas);



 return (
    <Fragment>
       <Router>
       <Switch>        
          <Route exact path='/' render={()=>(window.location = "http://www.formosasoftwarefactory.com")}/>          
          <Route path='/Formulario' exact component={PaginaNew} />    
          <Route path='/Iframe' exact component={Iframe} />    
          <Route path='/Evento' component={() => <Evento id='1' />} />        
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