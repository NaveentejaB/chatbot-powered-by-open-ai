import React from 'react';
import './login.css'


const Login = () => {
  return (
    <div className='main'>
        <div className="signupBox">
          <div className='head'>Login</div>
          <div className="subpart">
            <div className='inputmain'>
              <label htmlFor="Email" className='headingI'>*Email</label>
              <input className='inputbox'  name={"user_email"} id="Email" type="email" required placeholder='teja@email.com'/>
            </div>
            <div className='inputmain'>
              <label htmlFor="password" className='headingI'>*password</label>
              <input className='inputbox'  name="password" id="password" type='password' required placeholder='Enter your password'/>
            </div>
            <div className="button">
              <button>Login</button>
            </div>
            <div className="btmText">
              <div className='aha'>don't have a account?</div>
              <div className='lh'>Signup here</div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Login;
