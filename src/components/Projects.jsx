import React from 'react'
import todo from '../assets/todo.jpg'
import ecommerce from '../assets/ecommerce.jpg'
import library from '../assets/library.jpg'
import portfoloio from '../assets/portfolio.jpg'
import { motion } from "framer-motion"

const Projects = () => {
    const projects = [
        {
            title : "Todo List",
            img : todo,
            description : "this is a todo list project build using mern stack. for frontend reactjs used as for the backend nodejs express and mongoDb used.",
            techlogies:["React","Node","Express","MongoDb"]
        },
        {
            title : "Library Management system",
            img : library,
            description : "this is a Library Management system project build using mern stack. for frontend reactjs used as for the backend nodejs express and mongoDb used.",
            techlogies:["React","Node","Express","MongoDb"]
        },
        {
            title : "Personal Portfoloio",
            img : portfoloio,
            description : "this is a Personal Portfoloio project build using react and stylings used with tailwind css. ",
            techlogies:["Html","Css","React","Tailwind Css"]
        },
        {
            title : "ECommerce website",
            img : ecommerce,
            description : "this is a ECommerce website project build using react and stylings with css. ",
            techlogies:["Html","Css","React","Tailwind Css"]
        }

        
    ]
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 
        whileInView={{y:0,opacity:1}}
        initial={{y:-100,opacity:0}}
        transition={{duration:0.5}}
        className='my-20 text-center text-4xl'>Projects</motion.h2>
        <div>
            {projects.map((project,index)=>(
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div
                    whileInView={{x:0,opacity:1}}
                    initial={{x:-100,opacity:0}}
                    transition={{duration:0.5}}
                    className='w-full lg:w-1/4'>
                    <img src={project.img} height={150} width={150} alt={project.title} className='mb-6 rounded' />
                    </motion.div>
                    <motion.div
                    whileInView={{x:0,opacity:1}}
                    initial={{x:100,opacity:0}}
                    transition={{duration:0.5}}
                    className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>{project.title}</h6>
                    <p className='mb-4 text-neutral-400'>{project.description}</p>
                    {project.techlogies.map((tech,index)=>(
                        <span key={index} className='mr-2 rounded bg-neutral-900 text-purple-700 px-2 py-1 text-sm font-medium'>{tech}</span>
                    ))}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects