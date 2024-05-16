import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
    const contact = {
        address : "13A/13 Kamaraj Street , Ethiraj Nagar , West Mambalam , Chennai 600033",
         ph : "9360547671",
        email : "sathishraj21204@gmail.com"    
    }
  return (
    <div className='border-b border-neutral-900  pb-20'>
        <motion.h2 
        whileInView={{y:0,opacity:1}}
        initial={{y:-100,opacity:0}}
        transition={{duration:0.5}}
        className='my-10 text-center text-4xl'>Contact</motion.h2>
        <div className='text-center tracking-tighter'>
            {/* <p className='my-4'>{contact.address}</p> */}
            <motion.p
            whileInView={{x:0,opacity:1}}
            initial={{x:-100,opacity:0}}
            transition={{duration:1}}
            className='my-4'>phone no : {contact.ph}</motion.p>
            <motion.p 
            whileInView={{x:0,opacity:1}}
            initial={{x:100,opacity:0}}
            transition={{duration:1}}
            className='my-4'>email address : {contact.email}</motion.p>
        </div>
    </div>
  )
}

export default Contact