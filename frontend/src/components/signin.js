// Importing required modules and components
import React, { useState } from "react";
import  Validation  from './handle_signup';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

// Signin component
const Signup = () => {
    // State for form values
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: ""
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
    const validationerrs = Validation(values);
    setErrors(validationerrs);
    // If there are no errors, make a POST request to the signup endpoint
    if (Object.keys(validationerrs).length === 0) {
      axios.post("http://localhost:8081/signup", values)
        .then((res) => console.log(res))
        .then(res => {
            // If the request is successful, navigate to the Signup page
            navigate('/login');
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
            <h2 className="text-center text-success">Sign Up</h2>
            <hr />
        </div>
        <form action="" onSubmit={handlesubmit}>
            <div className="form-group">
                <div>
                    <label>UserName:</label>
                    <input type="text" className="form-control" name="name" value={values.name} onChange={handleInput} placeholder="Input your name"/>
                    <div style={{height: '20px'}}>
                    {errors.name && <span className='text-danger'> {errors.name}</span>}
                    </div>
                </div>
                <label>Email: </label>
                <input type="email" className="form-control" name="email" value={values.email} onChange={handleInput} placeholder="Email"/>
                <div style={{height: '20px'}}>
                    {errors.email && <span className='text-danger'> {errors.email}</span>}
                </div>
                <label>Password: </label>
                <input className="form-control" type="password" name="password" autoComplete="On" value={values.password} onChange={handleInput} placeholder="Password"/>
                {errors.password && <span className='text-danger'> {errors.password}</span>}
            </div>
            <div className="form-group" >
                <button type='submit' className="btn btn-primary">Sign Up</button>
            </div>
        </form>
    </div>
)}
// Exporting the Signin component
export default Signup;