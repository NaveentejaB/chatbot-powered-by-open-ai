import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './signup.css'

const SignUp = () => {
  const [newUser,setNewUser] = useState({
    user_email : '',
    user_name : '',
    password : ''
  })
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };
  const handleClickOnLogin = (e) =>{
      e.preventDefault()
      navigate('/login')
  }
  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      const response = await fetch('localhost:3000',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
           user_email : newUser.user_email,
           user_name : newUser.user_name,
           password : newUser.password
        })
      })
      if(!response.ok){
        const errorData = await response.json();
        console.log(errorData)
      }
      const data = await response.json();
      navigate(data.redirectURL);
    }catch(err){
      console.log(err.message);
    }
  }
  return (
    <div className='main'>
        <div className="MainSignUp">
          <div className='head'>Sign Up</div>
          <div className="subpart">
            <div className='inputmain'>
              <label htmlFor="Email" className='headingI'>*Email</label>
              <input className='inputbox' onChange={handleChange} name={"user_email"} id="Email" type="email" required placeholder='teja@email.com'/>
            </div>
            <div className='inputmain'>
              <label htmlFor="user_name" className='headingI'>*User name</label>
              <input className='inputbox' onChange={handleChange} name={"user_name"} id="user_name" type="text" required placeholder='Enter your user name'/>
            </div>
            <div className='inputmain'>
              <label htmlFor="password" className='headingI'>*password</label>
              <input className='inputbox' onChange={handleChange} name="password" id="password" type='password' required placeholder='Enter your password'/>
            </div>
            <div className="button">
              <button onClick={handleSubmit}>Register</button>
            </div>
            <div className="btmText">
              <div className='aha'>already have a account?</div>
              <div className='lh' onClick={handleClickOnLogin}>Login here</div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default SignUp;
