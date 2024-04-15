import React from 'react'
import heroImage from '../assets/profilepic.png'
import notebookL from '../assets/notebookL.png'
import notebookM from '../assets/notebookM.png'
import mobileR from '../assets/mobileR.png'

const About = () => {
  return (
    <div className='text-white gap-4 max-w-[1200px] mx-auto my-12 grid sm:grid-cols-3 ' id='about'>
      <div className='sm:col-span-2 glass sm:py-16 my-auto text-left p-4'>
        <div className='max-w-[80%] mx-auto '>
            <h2 className='text-3xl font-bold mb-4'>
                I can optimize your website    
            </h2>
            <p className='text-gray-200'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, veritatis.
            </p>
        </div>
      </div>
      <div className='hidden md:block sm:col-span-1 glass overflow-hidden'>
        <img src={notebookL} alt="" className='w-[200px] md:w-[500px] absolute '/>
      </div>

      <div className='hidden md:block sm:col-span-1 glass overflow-hidden'>
        <img src={mobileR} alt="" className='w-[200px] md:w-[500px] absolute '/>
      </div>

      <div className='md:hidden relative overflow-hidden h-[200px] glass'>
        <img src={notebookL} alt="" className='w-[400px] absolute '/>
        <img src={mobileR} alt="" className='w-[200px] right-0 absolute '/>
      </div>

      <div className='sm:col-span-2 glass sm:py-16 my-auto text-left p-4'>
        <div className='max-w-[80%] mx-auto '>
                <h2 className='text-3xl font-bold mb-4'>
                    I can optimize your website    
                </h2>
                <p className='text-gray-200'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, veritatis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque sint provident sequi laboriosam tempore fuga, animi sit dignissimos deserunt recusandae!
                </p>
            </div>
      </div>
    </div>
  )
}

export default About
