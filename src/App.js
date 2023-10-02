import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import { Switch, Route } from 'react-router-dom';
import Searchbar from './components/Searchbar';
import Listdata from './components/Listdata';
import Register from './components/Register';
import Edit from './components/edit';
import Detais from './components/Detais';



const App  = () => {
  return (
   <>
   <Searchbar/>
  <Switch>
   <Route exact path='/'  component={Listdata} />
   <Route exact path='/register' component={Register}/>
   <Route exact path='/edit/:id' component={Edit}/>
   <Route exact path='/view/:id' component={Detais}/>



   </Switch>
  


   
    
   </>
  );
}

export default App;
