// import { useState } from 'react';

// function Register() {

// // States for registration
// const [name, setName] = useState('');
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

// // States for checking the errors
// const [submitted, setSubmitted] = useState(false);
// const [error, setError] = useState(false);

// // Handling the name change
// const handleName = (e) => {
// 	setName(e.target.value);
// 	setSubmitted(false);
// };

// // Handling the email change
// const handleEmail = (e) => {
// 	setEmail(e.target.value);
// 	setSubmitted(false);
// };

// // Handling the password change
// const handlePassword = (e) => {
// 	setPassword(e.target.value);
// 	setSubmitted(false);
// };

// // Handling the form submission
// const handleSubmit = (e) => {
// 	e.preventDefault();
// 	if (name === '' || email === '' || password === '') {
// 	setError(true);
// 	} else {
// 	setSubmitted(true);
// 	setError(false);
// 	}
// };

// // Showing success message
// const successMessage = () => {
// 	return (
// 	<div
// 		className="success"
// 		style={{
// 		display: submitted ? '' : 'none',
// 		}}>
// 		<h1>User {name} successfully registered!!</h1>
// 	</div>
// 	);
// };

// // Showing error message if error is true
// const errorMessage = () => {
// 	return (
// 	<div
// 		className="error"
// 		style={{
// 		display: error ? '' : 'none',
// 		}}>
// 		<h1>Please enter all the fields</h1>
// 	</div>
// 	);
// };

// return (
// 	<div className="form">
// 	<div>
// 		<h1>User Registration</h1>
// 	</div>

// 	{/* Calling to the methods */}
// 	<div className="messages">
// 		{errorMessage()}
// 		{successMessage()}
// 	</div>

// 	<form>
// 		{/* Labels and inputs for form data */}
// 		<label className="label">Name</label>
// 		<input onChange={handleName} className="input"
// 		value={name} type="text" />

// 		<label className="label">Email</label>
// 		<input onChange={handleEmail} className="input"
// 		value={email} type="email" />

// 		<label className="label">Password</label>
// 		<input onChange={handlePassword} className="input"
// 		value={password} type="password" />

// 		<button onClick={handleSubmit} className="btn" type="submit">
// 		Submit
// 		</button>
// 	</form>
// 	</div>
// );
// }

// export default Register;




import { ToastContainer, toast } from 'react-toastify';
import React, { useState } from 'react';

import "../css/login.css";
import { NavLink, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';



const Register =() =>{
    const [custdata , setCustData] = useState({
        name:"",
        email:"",
        password:"",
        address:"",
        mobile:""
        
    });
    
const history =useNavigate("");
    const adddata =(e)=>{
        const{ name, value} = e.target;
        setCustData((pre) =>{
            return{
                ...pre,[name]:value
            }
        })
    };

    const senddata = async(e) =>{
        e.preventDeafult();
        const {name,email,password,address,mobile} = custdata;
        
        try {
            const res = await fetch("http://localhost:4001/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                   name,email,password,address,mobile
                })
               
            });
            const data = await res.json();
            if (data == "null") {
                toast.error("Invalid Details 👎!", {
                    position: "top-center"
                });
        }else {
            setCustData({
                ...custdata,name:"", email:"", password:"", address:"", mobile:""
            });
        toast.success("Registration Successfully done 😃!", {
            position: "top-center"
        });
        history("/login");
    }
    } catch(error){
        console.log("error"); 
    }
}
return (
    <section>
    <div className="sign_container">
        
        <div className="sign_form">
            <form >
                <h1>Create account</h1>
                <div className="form_data">
                    <label htmlFor="name">Your name</label>
                    <input type="text" name="name"
                        onChange={adddata}
                        value={custdata.name}
                        id="name" />
                </div>
                <div className="form_data">
                    <label htmlFor="email">email</label>
                    <input type="email" name="email"
                        onChange={adddata}
                        value={custdata.email}
                        id="email" />
                </div>
                  <div className="form_data">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"
                        onChange={adddata}
                        value={custdata.password}
                        id="password" placeholder="At least 6 characters" />
                </div>
                <div className="form_data">
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address"
                        onChange={adddata}
                        value={custdata.address}
                        id="address" />
                </div>
                <div className="form_data">
                    <label htmlFor="mobile">Mobile number</label>
                    <input type="number" name="mobile"
                        onChange={adddata}
                        value={custdata.mobile}
                        id="mobile" />
                </div>
                  
              
                
                <button type="submit" className="signin_btn" onClick={senddata}>Continue</button>

                

                <div className="signin_info">
                    <p>Already have an account?</p>
                    <NavLink to="/login">Sign in</NavLink>
                </div>
            </form>
        </div>
        <ToastContainer />
    </div>
</section>
    
)
}

export default Register;