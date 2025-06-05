// Login.jsx
import React from 'react';
import LoginForm from '../components/LoginForm';
import bgmain from '../assets/Images/netflix_bg.jpg';
import logo from "../assets/Images/logo.png";
import Navbar from '../components/Navbar';

const Login = () => {
  return (
    <div
      className="min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${bgmain})` }}
    >
     
      
      <div className="bg-black min-h-screen lg:bg-black/50 ">
        <img className="w-25 md:w-30 lg:w-40 pt-5 pl-5" src={logo} />
      <div className='flex justify-center items-center min-h-screen'>
           <LoginForm />
      </div>
       
      </div>
    </div>
  );
};

export default Login;
