import {Link,Routes,Route } from "react-router-dom";
import Home from "./home";
import AllCategories from "./allcategories";
import AllService from "./allservice";
import Cart from "./cart";
import ProtectedRoute from "./protectedroute";
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'D:/Project/React/estore/src/css/common.css';
import'../css/common.css';
import Login from "./login";
import Productlist from "./productlist";
import Register from "./register";



function Header()
{
    return (
    <div>
     
      <div className="margin">
        <div className="text-center ">
          <h1 className="heading">Gada Electronics</h1>
      <Link to={"/Home"} className="btn btn-primary mt-md-5 mx-2"  > Home </Link> 
      <Link to={"/AllCategories"} className="btn btn-primary mt-md-5 ml-5">  Categories </Link> 
      <Link to={"/AllService"}className="btn btn-primary mt-md-5 ml-5 "> Service </Link> 
      <Link to={"/Login"} className="btn btn-primary mt-md-5 ml-5"> Sign_in </Link> 
      <Link to={"/Cart"} className="btn btn-primary mt-md-5 ml-5"> Cart </Link> 
      
      
      </div>
      </div>
      <Routes>
        <Route
          path="/Home"
          element={<Home />}
          
        //   afterLogin={updateLoginStatus}
        />
        <Route
          path="/AllCategories"
          element={<AllCategories />}
        //   afterLogin={updateLoginStatus}
        />

        <Route
          path="/AllService"
          element={<AllService />}
        //   afterLogin={updateLoginStatus}
        />
        <Route
          path="/Login"
         element={<Login />}
        //   afterLogin={updateLoginStatus}
        />
        <Route
          path="/Cart"
         element={<Cart />}
        //   afterLogin={updateLoginStatus}
        />
        <Route
          path="/productlist"
          element={<Productlist />}
        //   afterLogin={updateLoginStatus}
        />
         <Route
          path="/register"
          element={< Register/>}
        //   afterLogin={updateLoginStatus}
        />
      </Routes>
    </div>
    );
}

export default Header;