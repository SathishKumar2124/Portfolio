import React from 'react'
import profilepic1 from '../assets/profilepic1.jpg'
import { motion } from "framer-motion"

const Hero = () => {
  const container = (delay) => ({
      hidden : {x :-100 , opacity:0},
      visible : {
        x:0,
        opacity:1,
        transition:{duration:0.5,delay:delay}
      }


  })
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className="w-full lg:w-1/2">
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1 
                      variants={container(0)}
                      initial="hidden"
                      animate="visible"
                    className='pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-6xl'>Sathish Kumar</motion.h1>
                    <motion.span 
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>WEB DEVELOPER</motion.span>
                    <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className='my-2 max-w-xl py-6 font-light tracking-tight'>I am a passionate web developer with a knack for crafting robust and scalable web applications. I just gradudated from college. I have honed my skills in front-end techlogies like Html,Css,JavaScript,Tailwind-Css,ReactJs as well as backend techlogies like NodeJs,ExpressJs,Python,MongoDB,MySql. My goal is to leverage my expertise to create innovative solutions that drive  business growth and deliver exceptional user experience.</motion.p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-10 lg:pl-28'>
              <div className='flex items-center justify-center'>
                  <motion.img 
                  initial={{x:100,opacity:0 }}
                  animate={{x:0,opacity:1}}
                  transition={{duration:1,delay:1.2}}
                  className='h-96 w-92 rounded-lg'  src={profilepic1} alt="Sathish Kumar" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero