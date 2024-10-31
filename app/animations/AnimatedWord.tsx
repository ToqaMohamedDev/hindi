import {motion, useAnimation} from 'framer-motion'
import { useEffect } from 'react';

import {useInView} from 'react-intersection-observer'

type AnimatedWordProps={
    title:string;
    style:string;
}

const AnimatedWord:React.FC<AnimatedWordProps>=({
   title,
   style 
})=>{
   const ctrls=useAnimation();
   const {ref,inView}=useInView({
    
   });
   useEffect(()=>{
    if(inView){
        ctrls.start('animate');
    }
    if(!inView){
        ctrls.start('initial');
    }
   },[ctrls,inView])
   const wordAnimation={
    initial: {
        y: 150,
        opacity: 0,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay:1,
            duration: 1,
            ease: [0.2, 0.65, 0.3, 0.9]
        }
    }
   } 
  return (
    <h1 aria-label={title} role='heading'>
     <motion.span
     ref={ref}
     className='flex max-w-[500px] 
     flex-col overflow-hidden text-center text-[96px]
      font-extralight leading-[0.8em]
      text-[#e4ded7] sm:text-[120px] 
      sm:leading-[0.85em] md:max-w-[900px]
      md:text-[155.5px] lg:text-[215px]'
     >
        {
            title.split(" ").map((word,index)=>(
            <motion.div 
            key={index}
            initial='initial'
            animate={ctrls}
            transition={{
                delayChildren:index*0.25,
                staggerChildren:0.05,
            }}
            className='flex items-center justify-center overflow-hidden'
            >
              <motion.span className={style} variants={wordAnimation}>
                {word+'\u00A0'}
              </motion.span>
            </motion.div>))
        }
     </motion.span>
    </h1>
  )
}

export default AnimatedWord;