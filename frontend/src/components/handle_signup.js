// Defining a function 'Validation' that takes an object 'values' as argument
const Validation = (values) => {
    // Initializing an empty object 'tempErrors'
    let tempErrors = {};
  
    // If the 'name' property of 'values' is an empty string, add a 'name' property to 'tempErrors' with a corresponding error message
    if (values.name === '')
      tempErrors.name = 'Name is required.';
    
    // If the 'email' property of 'values' is an empty string, add an 'email' property to 'tempErrors' with a corresponding error message
    if (values.email === '')
      tempErrors.email = 'Email is required.';
    // If the 'email' property of 'values' does not match the regular expression for a valid email, add an 'email' property to 'tempErrors' with a corresponding error message
    else if (!/\S+@\S+\.\S+/.test(values.email))
      tempErrors.email = 'Email is not valid.';
    
    // If the 'password' property of 'values' is an empty string, add a 'password' property to 'tempErrors' with a corresponding error message
    if (values.password === '')
      tempErrors.password = 'Password is required.';
    
    // Return the 'tempErrors' object
    return tempErrors;
};

// Exporting the 'Validation' function to be used in other parts of the application
export default Validation;