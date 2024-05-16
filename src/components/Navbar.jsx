import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className=' mb-20 flex items-center justify-between py-6 '>
        <div className='flex flex-shrink-0 items-center'>
            <h1 className='text-2xl font-semibold tracking-wider mx-2 w-10'>SK</h1>
        </div>
        <div className='m-8 flex items-center justify-center gap-4'>
            <FaLinkedin />
            <FaGithub />
            <FaInstagram />
            <FaSquareXTwitter />
        </div>
    </div>
  )
}

export default Navbar