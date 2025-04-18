import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { BsTwitter } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { PiGithubLogoFill } from "react-icons/pi";
function Footer() {
  return (
   
    <>

    <div className='grid gap-4 md:grid-cols-4 justify-center'>
      <div className='flex justify-center'>
      <div onClick={() => window.open('https://www.linkedin.com/in/abhay-kumar-443b981b6/', '_blank')}
      className='flex items-center justify-center w-15 h-15 border rounded-full border-white text-5xl p-5 hover:text-white hover:bg-[#2C2C6C] cursor-pointer transition-colors duration-300'> <FaLinkedinIn /> </div>
      </div>

      <div className='flex justify-center'>
      <div onClick={() => window.open('https://x.com/leanwithkumar', '_blank')}
      className='flex items-center justify-center w-15 h-15 border rounded-full border-white text-5xl p-5 hover:text-white hover:bg-[#2C2C6C] cursor-pointer transition-colors duration-300'> <BsTwitter /> </div>
      </div>

      <div className='flex justify-center'>
      <div onClick={() => window.open('https://discord.gg/vYXdt7Ss', '_blank')}

      className='flex items-center justify-center w-15 h-15 border rounded-full border-white text-5xl p-5 hover:text-white hover:bg-[#2C2C6C] cursor-pointer transition-colors duration-300'> <BsDiscord /> </div>
      </div>

      <div className='flex justify-center'>
      <div onClick={() => window.open('https://github.com/leanwithkumar', '_blank')}
      className='flex items-center justify-center w-15 h-15 border rounded-full border-white text-5xl p-5 hover:text-white hover:bg-[#2C2C6C] cursor-pointer transition-colors duration-300'> <PiGithubLogoFill /> </div>
      </div>

  



    </div>

    <div className='pb-10 pt-10 text-center text-white'>
    Copyright © Abhay Kumar. All rights reserved.
    </div>



    </>
  )
}

export default Footer
