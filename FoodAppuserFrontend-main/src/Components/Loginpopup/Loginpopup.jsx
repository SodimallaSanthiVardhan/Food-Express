import React, { useContext, useState } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import './Loginpopup.css';

const Loginpopup = ({ setshowlogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [loginstate, setloginstate] = useState('sign');
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    setdata((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    let newURL = `${url}/api/user/${loginstate === 'sign' ? 'login' : 'register'}`;

    try {
      const res = await axios.post(newURL, data);

      if (loginstate === 'login') {
        toast.success("Account created successfully! Please Log in");
        setloginstate('sign');
      } else {
        setToken(res.data.token);
        localStorage.setItem('token', res.data.token);
        setshowlogin(false);
        toast.success("Login successful!");
      }
    } catch (error) {
      const errMsg = error.response?.data?.message || "Something went wrong!";
      toast.error(errMsg);
      console.error(errMsg);
    }
  };

  return (
    <div className='login-container'>
      <div className='login-div'>
        <div className='login-head'>
          <h1 className='lors'>{loginstate === 'sign' ? 'Login' : 'Sign Up'}</h1>
          <i onClick={() => setshowlogin(false)} className="ri-close-large-line"></i>
        </div>

        <form onSubmit={onSubmitHandler} className='form'>
          {loginstate === 'login' && (
            <input
              type='text'
              onChange={onChangeHandle}
              placeholder='Your Name'
              name='name'
              value={data.name}
              required
            />
          )}
          <input
            type='email'
            onChange={onChangeHandle}
            placeholder='Your Email'
            name='email'
            value={data.email}
            required
          />
          <input
            type='password'
            onChange={onChangeHandle}
            placeholder='Password'
            name='password'
            value={data.password}
            required
          />

          <button className='login-btn'>
            {loginstate === 'sign' ? 'Login' : 'Sign Up'}
          </button>

          <div className='ckeck'>
            <input type="checkbox" required />
            <p>By continuing, I agree to terms & privacy policy</p>
          </div>
        </form>

        <p className='bottom'>
          {loginstate === 'sign' ? "Don't have an account?" : 'Already have an account?'}
          <span onClick={() => setloginstate(loginstate === 'sign' ? 'login' : 'sign')}>
            {loginstate === 'sign' ? ' Sign Up here' : ' Login here'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Loginpopup;
