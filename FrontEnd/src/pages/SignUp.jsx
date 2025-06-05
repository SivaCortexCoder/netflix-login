import React from 'react'
import bgmain from '../assets/Images/netflix_bg.jpg';
import Navbar from '../components/Navbar';

const SignUp = () => {
  return (
    <div className='min-h-screen bg-center bg-cover ' style={{ backgroundImage: `url(${bgmain})` }}>
    
        <div className='bg-black/80 min-h-screen'>
        <Navbar/>
        <div className='text-center p-5 mt-20 space-y-2 lg:flex flex-col lg:mt-40'>
            <h1 className='text-white font-bold text-4xl lg:text-6xl lg:font-extrabold'>Unlimited movies,<br /> TV shows and more</h1>
            <p className='text-white font-medium lg:text-xl'>Starts at ₹149. Cancel at any time.</p>
            <p className='text-white font-medium lg:mt-7'>Ready to watch? Enter your email to create or restart your membership.</p>
            <form action="" className='flex flex-col gap-2 p-5 items-center lg:flex-row justify-center' >
                <input type="text" placeholder='Email address' className='border border-gray-400 py-4 px-5 rounded bg-black/50 backdrop-blur-4xl text-gray-100 placeholder:text-gray-300 font-semibold w-full max-w-md' />
                <button className='bg-red-600 font-bold  text-white px-4 py-3 rounded text-lg lg:text-2xl cursor-pointer'>Get Started &gt; </button>
            </form>

        </div>
        </div>
    
      

    </div>
  )
}

export default SignUp