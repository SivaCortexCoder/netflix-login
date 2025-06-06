import React from 'react'
import { OrbitProgress } from 'react-loading-indicators'

const Loading = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[100vh]'>
        <OrbitProgress variant="split-disc" color="#FF3030" size="medium" text="" textColor="" />
        <h1 className='text-md font-bold'>Verifying User....</h1>
    </div>
  )
}

export default Loading