import React, { useRef } from 'react'
import { ProjectProps } from './ProjectDetails'
import { motion } from 'framer-motion'
import Image from 'next/image'
import AnimatedTitle from '../animations/AnimatedTitle'
import AnimatedBody from '../animations/AnimatedBody'

export default function ProjectCard({
  id,
  name,
  description,
  technologies,
  image,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <motion.div
      ref={ref}
      style={
        {
          backgroundColor: '#222',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          position: 'relative',
        }
      }
      className={`relative z-10 h-[550px] w-full items-stretch justify-center overflow-hidden rounded-3xl
      bg-center py-0 sm:h-[700px] sm:w-[100%] md:h-[550px] md:w-[100%] lg:h-[400px]`}
      initial='initial'
      animate='animate'
    >
      <Image
        src={image}
        alt={name}
        className={`absolute -bottom-2 w-[70%] sm:w-[85%] md:w-[60%] lg:max-w-[55%]`}
      />
      <AnimatedTitle
        text={name}
        className={'max-w-[90%] text-[40px] leading-none text-white md:text-[44px] md:leading-none lg:max-w-[450px] lg:text-[48px] lg:leading-none'}
        charSpace={'mr-[0.01em]'}
        wordSpace={'mr-[0.25em]'}
        key={id}
      />
      <AnimatedBody
      text={description}
      className={'mt-4 w-[90%] max-w-[475px] text-[16px] font-semibold text-[#95979D]'}
      />
      <div className='mt-9 flex gap-4'>
        {
          technologies.map((tech, id) => (
            <AnimatedTitle
              text={tech}
              className={'text-[14px] font-bold uppercase md:text-[16px] lg:text-[18px]'}
              charSpace={'mr-[0.01em]'}
              wordSpace={'mr-[0.25em]'}
              key={id}
            />
          ))
        }
      </div>
    </motion.div>
  )
}
