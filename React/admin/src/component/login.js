
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Dashboard from "./dashboard";
import { BrowserRouter } from "react-router-dom";


function Login(props) {
  const [user, setUser] = useState({ UserName: "", Password: "" });
  const [message, setmessage] = useState("");
  const history = useHistory();

  const handleChange = (args) => {
    debugger;
    var copyOfCurrentUserInState = { ...user };
    copyOfCurrentUserInState[args.target.name] = args.target.value;
    setUser(copyOfCurrentUserInState);
  };

  useEffect(() => {
    if (message != "") {
      setTimeout(() => {
        setmessage("");
      }, 2000);
    }
  }, [message]);

  const signIn = () => {
    debugger;
    if ((user.UserName =="Rutuja" && user.Password == "rutuja7219") || (user.UserName == "Atharva" && user.Password == "atharva70") || (user.UserName == "Ankit" && user.Password == "ankit11") || (user.UserName == "Gunjali" && user.Password == "gunjali22")) {
      //Step 1: set the session state that says user is logged in now
      sessionStorage.setItem("isloggedin", "true");
      sessionStorage.setItem("userName", user.UserName);
      props.afterlogin();

      //Step 2: navigate user to Home page..

      history.push("/addService");
    } else {
      clearBoxes();
      setmessage("Username / password is wrong!");
    }
  };

  const clearBoxes = () => {
    setUser({ UserName: "", Password: "" });
  };

  return (
    <div className="login">
      <center>
        <br></br>
        <br></br>
        <br></br>
        <table>
          <tbody>
       

          
           <h2 className="fw-bold mb-5">Sign up now</h2>
          
          
            <tr>
              <td className="td">User Name</td>
              <td className="td">
                <input
                  type="text"
                  name="UserName"
                  value={user.UserName}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td className="td">Password</td>
              <td className="td">
                <input
                  type="password"
                  name="Password"
                  value={user.Password}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td className="td">
                <button className="btn btn-primary" onClick={signIn}>
                  Log in
                </button>
              </td>
              <td className="td">
                <button className="btn btn-danger" onClick={clearBoxes}>
                  Reset
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <h6 style={{ color: "orangered" }}>{message}</h6>
       
      </center>
    </div>
  );
}


export default Login;
