import {RiReactjsLine} from 'react-icons/ri'
import {SiMongodb} from 'react-icons/si'
import {DiNodejs} from 'react-icons/di'
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { motion } from "framer-motion"


const Technologies = () => {

    const iconVariations = (duration) => ({
        initial :{y:-10,},
        animate:{
            y:[10,-10],
            transition:{
                duration:duration,
                ease:"linear",
                repeat:Infinity,
                repeatType:"reverse"
            }
        }
    })

  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl '>Technologies</motion.h2>
        <motion.div 
        whileInView={{x:0,opacity:1}}
        initial={{x:-100,opacity:1}}
        transition={{duration:1.5}}
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
                variants={iconVariations(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800">
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div 
            variants={iconVariations(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800">
                <SiTailwindcss className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div 
            variants={iconVariations(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800">
                <DiNodejs className='text-7xl text-green-500' />
            </motion.div>
            <motion.div 
            variants={iconVariations(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800">
                <SiExpress className='text-7xl text-black-400'/>
            </motion.div>
            <motion.div 
            variants={iconVariations(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800">
                <SiMongodb className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div 
            variants={iconVariations(2.4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800">
                <SiMysql className='text-7xl text-blue-800'/>
            </motion.div>
            <motion.div 
            variants={iconVariations(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800">
                <FaPhp className='text-7xl text-blue-800'/>
            </motion.div>
            <motion.div 
            variants={iconVariations(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800">
                <FaPython className='text-7xl text-yellow-500'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies