import React from 'react'
import about from '../assets/aboutme.jpg'
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='my-20 text-center text-4xl'>About <span className='text-neutral-500'>Me</span></h2>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <motion.img 
                        initial={{x:-100 , opacity:0}}
                        whileInView={{x:0 , opacity:1}}
                        transition={{duration:0.5}}
                    className='w-full rounded-lg' src={about} alt="about" />
                </div>
            </div>
            <motion.div 
            initial={{x:100,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:0.5}}
            className='w-full lg:w-1/2 lg:p-7'>
                <div className='flex items-center lg:justify-start'>
                    <p className='py-4 lg:py-0'>Hello there! I'm Sathish Kumar, a junior web developer passionate about crafting exceptional digital experiences. With a solid foundation in HTML, CSS, JavaScript, and React I specialize in building dynamic and user-friendly web applications.and I've honed my skills in Tailwind CSS for efficient styling. On the backend, I'm proficient in Node.js and Express.js, empowering me to create robust server-side applications. I've also worked extensively with databases, utilizing MongoDB for its flexibility and scalability, and MySQL for relational data management. Additionally, I have experience with Python for scripting tasks and PHP for server-side scripting. What sets me apart is my dedication to continuous learning and staying updated with the latest industry trends. I thrive in collaborative environments, where I can contribute my skills and learn from others to deliver high-quality solutions.<br /><br />
                    Let's connect and build something amazing together!
                    </p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About