import React from 'react'
import heroImage from '../assets/profilepic.png'
import notebookL from '../assets/notebookL.png'
import notebookM from '../assets/notebookM.png'
import mobileR from '../assets/mobileR.png'
import {TypeAnimation} from 'react-type-animation'

const Hero = () => {
  return (
    <div className='relative grid sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 overflow-hidden md:overflow-visible' id='hero'>
      <img src={notebookL} alt="" className='hidden md:block absolute z-[-1] w-[400px] bottom-0 left-[-170px]' />
      <img src={notebookM} alt="" className='absolute z-[-1] w-[400px] -bottom-[190px] md:bottom-0 md:left-[320px]' />
      <img src={mobileR} alt="" className='absolute z-[-1] w-[200px] bottom-[500px] left-[450px]' />

      <div className='glass px-5 col-span-2 my-auto z-[-1]'>
        <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold p-4 md:p-0'>
            <p className='md:mb-4 text-gray-500'>I'm a </p>
            <TypeAnimation
                sequence={[
                    "Frontend Dev",
                    1000,
                    "Webdesigner",
                    1000,
                    "Consultant",
                    1000
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
            />
        </h1>
        <p className='font-bold mb-6 md:my-0 text-sm sm:text-lg lg:text-xl max-w-[280px] p-4 md:p-0 md:max-w-[600px] ml-1 text-gray-300 '>
            My name is John Doe and I have 5+ experience in web development
        </p>
      </div>

      <div className='absolute bottom-0 right-0 w-[250px] lg:w-[600px]'>
        <img src={heroImage} alt="" />
      </div>
    </div>
  )
}

export default Hero
