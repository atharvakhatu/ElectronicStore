import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import Dashboard from './component/dashboard';
//import Login from './component/login';
//import Productlist from './component/productlist'

//import AllService from './component/allservice';
//import Login from './component/login';
//import Header from './component/header';
//import Home from './component/home';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

//   <BrowserRouter>
//  <Switch>
//   <Route path={"/login"} exact component={Login}></Route>
   
//   </Switch> 
  
//   </BrowserRouter>
  
<BrowserRouter>

<Dashboard/>

</BrowserRouter>



  
);


