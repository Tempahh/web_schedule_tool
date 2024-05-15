// Importing required modules and components
import React, { useState } from "react";
//import './user.css';
import Validation  from './handle_signup';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import LoginValidation from "./handle_login";

// Login component
const Login = () => {
    // State for form values
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });

    // Hook for navigation
    const navigate = useNavigate();

    // Function to handle input changes
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name] : event.target.value}))
    }

    // State for form errors
    const [errors, setErrors] = useState({})

    // Function to handle form submission
    const handlesubmit = (event) => {
        event.preventDefault();
        const validationerrs = LoginValidation(values);
        setErrors(validationerrs);
        // If there are no errors, make a POST request to the signup endpoint
        if (Object.keys(validationerrs).length === 0) {
          axios.post("http://localhost:8081/login", values)
            .then((res) => console.log(res))
            .then(res => {
                // If the request is successful, navigate to the Signup page
                navigate('/');
            })
            .catch(err => console.log(err))
        }
        else{
            console.log(validationerrs)
        }
    };

    // Render the form
    return (
    <div className="container bg-dark d-flex justify-content-center align-items-center" style={{maxWidth: '70%', maxHeight: '50vh'}}>
        <div className="header">
            <h2 className="text-center text-success">Login</h2>
            <hr />
        </div>
        <form onSubmit={handlesubmit}>
            <div className="form-group">
                <label>Email: </label>
                <input type="email" className="form-control" name="email" value={values.email} onChange={handleInput} placeholder="Email"/>
                <div style={{height: '20px'}}>
                    {errors.email && <span className='text-danger'> {errors.email}</span>}
                </div>
                <label>Password: </label>
                <input type="password" className="form-control" name="password" value={values.password} onChange={handleInput} placeholder="Password"/>
                {errors.password && <span className='text-danger'> {errors.password}</span>}
            </div>
            <p className="text-right">Forgot Password? <span> Click here!</span></p>
            <div className="form-group" >
                <button  type='submit' className="btn btn-primary">Login</button>
            </div>
        </form>
    </div>
)
}
// Exporting the Login component
export default Login;