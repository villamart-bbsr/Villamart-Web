import React from 'react'
import './videoT.css'
const videoText = () => {
  return (
    <div className='w-full h-screen relative'>
      <video src="/videos/farmVideo.mp4"
      className='w-full h-2/3 object-cover'
        autoPlay
        loop
        muted></video>
        <div className="absolute inset-0 bg-black text-white flex items-center justify-center text-[100px] font-black mix-blend-multiply">
            <h1 className='text-[150px]'>6</h1>
            <br></br>
            <h2>STEPS</h2>
        </div>
    </div>
  )
}

export default videoText
