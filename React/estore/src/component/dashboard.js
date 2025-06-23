// import { Link, Switch } from "react-router-dom";
// //import NotFound from "./notfound";
// // import "../asset/common.css";
// import ProtectedRoute from "./protectedroute";
//  import AllService from "./allservice";
// import Profile from "./profile";
// import Cart from "./cart";
// import AllCategories from "./allcategories";
// import Home from "./home";
import Header from "./header";
import Footer from "./footer";
//import { Children } from "react";



// import { useEffect, useState } from "react";



function Dashboard() {
//   const [userName, setUserName] = useState("");

//   useEffect(() => {
//     setLoggedInUserName();
//   }, []);

//   const setLoggedInUserName = () => {
//     if (
//       sessionStorage.getItem("userName") != null &&
//       sessionStorage.getItem("userName") != ""
//     ) {
//       setUserName(sessionStorage.getItem("userName"));
//     } else {
//       setUserName("Guest");
//     }
//   };

//   const updateLoginStatus = () => {
//     debugger;
//     setLoggedInUserName();
//   };

//   const logout = () => {
//     debugger;
//     sessionStorage.removeItem("isloggedin");
//     sessionStorage.removeItem("userName");
//     setLoggedInUserName();
//   };

  return (
    <div>
      
      <Header></Header>
    
      {/* <Header>
      <Link to={"/Home"}> Home </Link> {" | "}
      <Link to={"/AllCategories"}>  Categories </Link> {" |  "}
      <Link to={"/AllService"}> Service </Link> {" | "}
      <Link to={"/Profile"}> Profile </Link> {" | "}
      <Link to={"/Cart"}> Cart </Link> {" | "}
      </Header>
      <br></br>
      <hr></hr>
      <hr></hr>
      <Switch>
        <ProtectedRoute
          path="/Home"
          component={Home}
        //   afterLogin={updateLoginStatus}
        />
        <ProtectedRoute
          path="/AllCategories"
          component={AllCategories}
        //   afterLogin={updateLoginStatus}
        />

        <ProtectedRoute
          path="/AllService"
          component={AllService}
        //   afterLogin={updateLoginStatus}
        />
        <ProtectedRoute
          path="/Profile"
          component={Profile}
        //   afterLogin={updateLoginStatus}
        />
        <ProtectedRoute
          path="/Cart"
          component={Cart}
        //   afterLogin={updateLoginStatus}
        />
      </Switch> */}
        <Footer></Footer>

    </div>
  );
};

export default Dashboard;
