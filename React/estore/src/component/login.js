// import { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Login()
// {   
//     var history =  useHistory();
//     var [user, setuser]  = useState({UserName: "",Password:"" });
//     var [message, setmessage] = useState("");
//     var HandleChange=(args)=>{
//         var copyOfUser = {...user};
//         copyOfUser[args.target.name] = args.target.value;
//         setuser(copyOfUser);
//     }
//     var SignIn =()=>
//     {
//         var payload = JSON.stringify(user);
//         var combinedCredentials = user.UserName + ":" + user.Password;
//         var encodedCredentials = window.btoa(combinedCredentials);
//         var authString = "basic " + encodedCredentials;
//          debugger;
//         var helper = new XMLHttpRequest();
//         helper.onreadystatechange = ()=>{
//           debugger;
//             if(helper.readyState == 4 && helper.status == 200)
//             {
                        
//                 var response = JSON.parse(helper.responseText);
//                 console.log(response);
               
//                 if(response.authToken!= null)
//                 {
                
//                 sessionStorage.setItem("isuserloggedin",response.isLoggedIn);
//                 sessionStorage.setItem("UserName", response.email);
//                 sessionStorage.setItem("authToken", response.authToken);
//                 //Navigate to Dashboard
//                 history.push("/home");
//                 }
//                 else
//                 {
//                      setuser({UserName: "",Password:"" });
//                      setmessage("UserName / Password is Wrong!");
//                 }
//             }
//         };
//         helper.open("POST", "http://localhost:4001/login");
//        helper.setRequestHeader("Content-Type", "application/json");
//        helper.setRequestHeader("Authorization", authString);
//        helper.send(payload);
        
//         // if(user.UserName == "mahesh" && user.Password =="mahesh@123")
//         // {
//         //     sessionStorage.setItem("isuserloggedin", "true");
//         //     sessionStorage.setItem("username", user.UserName);
//         //     //Navigate to Dashboard
//         //     history.push("/home");
//         // }
//         // else
//         // {
//         //     setuser({UserName: "",Password:"" });
//         //     setmessage("UserName / Password is Wrong!");
//         // }
//     }

//     useEffect(()=>
//     {
//         if(message!="")
//         {
//             setTimeout(() => {
//                 setmessage("");
//             }, 3000);
//         }
//     },[message]);

//     return  <center>
//                     <br></br><br></br><br></br>
//                 <div>
//                     <table style={{width: 300 + "px"}}>
//                     <tbody>
//                             <tr>
//                                 <td>
//                                     <span className="label"  style={{color: "black"}}>User Name</span>
//                                 </td>
//                                 <td>
//                                     <input type={"text"} name="UserName"
//                                             onChange={HandleChange}
//                                             value={user.UserName}/>
//                                 </td>
//                             </tr>
//                             <tr>
//                                <td>
//                                <span className="label" style={{color: "black"}}>Password</span>
//                                </td>
//                                 <td>
//                                     <input type={"password"} name="Password"
//                                             onChange={HandleChange}
//                                             value={user.Password}/>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td colSpan={"2"}>
//                                     <input type={"button"} name="btn"
//                                             onClick={SignIn}
//                                             value="Sign In" className='btn btn-primary'/>
//                                 </td>
//                             </tr>
//                     </tbody>
//                     </table>
//                     <br></br>
//                     <h6 style={{color: "red"}}>{message}</h6>
//                 </div>
//             </center>
// }

// export default Login;








import React,{useContext,useState} from "react";
//import {Logincontext} from '../component/contextprovider';
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '../css/login.css';

import {  NavLink, useNavigate } from "react-router-dom";


const Login = () =>{
   // const{account ,setAccount} = useContext(Logincontext);

    const [logdata ,setData] = useState({
        email:"",
        password:""
    });

    const history = useNavigate("");

    const adddata = (e) =>{
        const{name ,value} =e.target;

        setData((pre) =>{
            return {
                ...pre,[name]:value
            }
        })
    };

   
    const senddata = async(e) => {
        e.preventDefault();

        const{email ,password} = logdata;  

        try{
            const res = await fetch("http://localhost:4001/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });
        const data = await res.json();
        
            if(res.status === 400 || !data){
                console.log("invalid details");
                toast.error("Invalid Details 👎! ",{
                    position:"top-center"
                });
            }else{
               // setAccount(data);
                setData({...logdata,email:"",password:""})
                console.log(logdata);
                toast.success("Login Sucessfully done  😃!",{
                    position:"top-center"
                });
                history("/home");

            }

        }catch (error){
            console.log("Login Page Show Error"+error.message);
        }
    };

    return (
        <section>
            <div className="sign_container ">
               
                <div className="sign_form">
                    <form ><h1>Sign-In</h1>
                    <div className="form_data">
                        <label htmlFor="email">Email</label>
                        <input  type="text" name="email" onChange={adddata} value={logdata.email} id ="email" placeholder="Enter Email or Mobile" />
                    </div>
                    <div className="form_data">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" onChange={adddata} value={logdata.password} id="password" placeholder="At Least 6 Characters" />
                    </div>
                    <button type="submit" className="signin_btn" onClick={senddata}>Continue</button>                  
                    
                    </form>
                    <ToastContainer />
                </div>
                   <div className="create_accountinfo">
                   
                    <button><NavLink to="/register">Create Your Account</NavLink></button>
                   </div>

            </div>

        </section>
    )


}
export default Login;















