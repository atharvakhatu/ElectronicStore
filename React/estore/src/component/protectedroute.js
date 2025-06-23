 import { Route } from "react-router-dom";
// import Login from "../components/login";

function ProtectedRoute(props) {
//   debugger;
//   if (
//     sessionStorage.getItem("isloggedin") != null &&
//     sessionStorage.getItem("isloggedin") == "true"
//   ) {
//     //return expected route
//     return <Route path={props.path} exact component={props.component} />;
//   } else {
//     //return login component in hard coded way
//     return <Dashboard afterlogin={props.afterLogin}></Dashboard>;
//   }

return <Route path={props.path} exact component={props.component} />;

}
export default ProtectedRoute;
