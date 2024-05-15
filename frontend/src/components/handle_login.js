const LoginValidation = (values) => {
    let tempErrors = {};
  
    // Check if email is not empty
    if (values.email === '')
      tempErrors.email = 'Email is required.';
    // Check if email is in valid format
    else if (!/\S+@\S+\.\S+/.test(values.email))
      tempErrors.email = 'Email is not valid.';
  
    // Check if password is not empty
    if (values.password === '')
      tempErrors.password = 'Password is required.';
  
    return tempErrors;
};

export default LoginValidation;