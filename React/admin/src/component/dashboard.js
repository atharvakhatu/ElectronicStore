import { Link, Switch } from "react-router-dom";
// import About from "./about";
// import Create from "./create";
import ShowProducts from "../component/showProducts";
import ShowServices from "../component/showServices";
//import NotFound from "./notfound";
import "../common/index.css";
import ProtectedRoute from "./protectedRoute";
import Header from "../component/header";
import { useEffect, useState } from "react";
import AddProduct from "./addProducts";
import AddService from "./addServices";
import ShowOrders from "./showorders";
import App from "../component/footer";
function Dashboard() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setLoggedInUserName();
  }, []);

  const setLoggedInUserName = () => {
    if (
      sessionStorage.getItem("userName") != null &&
      sessionStorage.getItem("userName") != ""
    ) {
      setUserName(sessionStorage.getItem("userName"));
    } else {
      setUserName("Guest");
    }
  };

  const updateLoginStatus = () => {
    debugger;
    setLoggedInUserName();
  };

  const logout = () => {
    debugger;
    sessionStorage.removeItem("isloggedin");
    sessionStorage.removeItem("userName");
    setLoggedInUserName();
  };

  return (
    <div >
      <div className="text-center background ">
        <h1 className="headingtop">Gada Electronics</h1>
      <Header loggedInUser={userName} logout={logout}></Header>
      <Link to={"/addService"} className="btn btn-primary mt-md-5 mx-2" > Add Services </Link>
      <Link to={"/addProducts"}className="btn btn-primary mt-md-5 ml-5"> Add Products </Link> 
      <Link to={"/showProducts"}className="btn btn-primary mt-md-5 ml-5"> Show Products </Link> 
      <Link to={"/showServices"}className="btn btn-primary mt-md-5 ml-5"> Show Services </Link> 
      <Link to={"/showOrders"}className="btn btn-primary mt-md-5 ml-5"> Show Orders </Link> 
      <hr></hr>
      </div>
      <Switch>
        <ProtectedRoute
          path="/addProducts"
          component={AddProduct}
          afterLogin={updateLoginStatus}
        />
        <ProtectedRoute
          path="/addService"
          component={AddService}
          afterLogin={updateLoginStatus}
        />

        <ProtectedRoute
          path="/showProducts"
          exact
          component={ShowProducts}
          afterLogin={updateLoginStatus}
        />
        <ProtectedRoute
          path="/showServices"
          exact
          component={ShowServices}
          afterLogin={updateLoginStatus}
        />
         <ProtectedRoute
          path="/showOrders"
          exact
          component={ShowOrders}
          afterLogin={updateLoginStatus}
        />
      </Switch>
      <App/>
    </div>
  );
}

export default Dashboard;