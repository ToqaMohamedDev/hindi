import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'
import { bodyAnimation, imageAnimation } from '../animations/animations'
import profile from '../../public/about-me.webp'
import AnimatedWord from '../animations/AnimatedWord'

export default function Hero() {
  return (
    <motion.section className="relative flex h-screen w-full items-stretch justify-center bg-[url('.//../public/heros.jpg')] bg-cover bg-center py-0"
      id='home'
      initial='initial'
      animate='animate'
    >
      <Image
        src='/background.png'
        alt='BG'
        width={1920}
        height={1080}
        className='absolute left-0 top-0 bg-center w-full h-full bg-cover'
      />
      <div className='absolute top-10 flex justify-between sm:w-[90%] lg:max-w-[1440px]'>
        <div>
          <Link href='#'>
            <motion.button
              className='hidden rounded-full border-[#e4ded7] border-2 py-2 px-4 font-semibold text-[#e4ded7] sm:block md:text-[16px] lg:block'
              variants={bodyAnimation}
            >
              Lets Connect
            </motion.button>
          </Link>
        </div>
        <div className='flex gap-10 text-[#e4ded7] sm:gap-6 md:gap-8 lg:gap-8'>

          <Link href='/'
            target='_blank'
            aria-label='View Github website'
          >
            <motion.p
              variants={bodyAnimation}>
              <AiFillGithub size={24} />
            </motion.p>
          </Link>
          <Link href='/'
            target='_blank'
            aria-label='View Youtube website'
          >
            <motion.p
              variants={bodyAnimation}>
              <AiFillYoutube size={24} />
            </motion.p>
          </Link>
          <Link href='/'
            target='_blank'
            aria-label='View Twitter website'
          >
            <motion.p
              variants={bodyAnimation}>
              <AiFillTwitterCircle size={24} />
            </motion.p>
          </Link>
          <Link href='/'
            target='_blank'
            aria-label='View Instagram website'
          >
            <motion.p
              variants={bodyAnimation}>
              <AiFillInstagram size={24} />
            </motion.p>
          </Link>
        </div>
      </div> 
      {/*  */}
     
        <div className='-mt-36 flex flex-col items-center justify-center'>
        <div className={`relative flex flex-col items-center justify-center`}>
        <AnimatedWord
        title='Alaa Taha'
        style='inline-block overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4'
        />
        <motion.div 
          className='absolute bottom-[-110px] mx-auto sm:bottom-[-100px] md:bottom-[-130px] lg:bottom-[-190px]'
          variants={imageAnimation}>
            <Image
            src={profile}
            data-blobity-tooltip='Alaa Taha'
            data-blobity-invert='false'
            alt='about-me'
            priority
            className='w-[150px] grayscale hover:grayscale-0 md:w-[200px] rounded-full lg:w-[245px]'
            />
          </motion.div>
        </div>
        </div>
       {/*  */}
       <div className='absolute bottom-10 flex items-center justify-center
        md:bottom-10 lg:w-[90%] lg:max-w-[1440px] lg:justify-between'>
        <motion.div
        className='max-w-[350px] md:max-w-[400px] lg:max-w-[400px]'
        variants={bodyAnimation}
        >
          <p className='z-50 text-center text-[16px] font-medium text-[#e4ded7] md:text-[20px] lg:text-left'>
            Creative Developer , Web Designer , Freelancer , Fronted Developer ,
          </p>
        </motion.div>
        <motion.div
        className='max-w-[500px] hidden lg:block lg:max-w-[420px]'
        variants={bodyAnimation}
        >
          <p className='text-right text-[16px] font-semibold text-[#e4ded7] md:text-[20px]'>
           with 20 years experience as a professional a graphic designer ,
          </p>
        </motion.div>
       </div>
    </motion.section>
  )
}