import Link from 'next/link'
import Pad from './comp/Pad'
import Computer from './comp/Computer'
import Phone from './comp/Phone'
import Info from './comp/Info'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Work = ({fields}) => {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0.8,
    triggerOnce: false
  });

  const infoVariants = {
    visible: { opacity: 1, scale: 1, x: 0, delay: .5, transition: { duration: 2, ease: 'easeOut' } },
    hidden: {
      opacity: 0,
      scale: 0.65,
      x: "-100%",
      transition: { duration: .2, ease: 'easeOut' },
    }
  };
  const compVariants = {
    visible: { opacity: 1, scale: 1, y: "10%", delay: .5, transition: { duration: 2, ease: 'easeOut' } },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: "-50%",
      transition: { duration: .2, ease: 'easeOut' },
    }
  };

  const padVariants = {
    visible: { opacity: 1, scale: 1, x: "0%", y: "-50%", delay: .5, transition: { duration: 2, ease: 'easeOut' } },
    hidden: {
      opacity: 0,
      scale: 0.65,
      x: "100%",
      y: "-50%",
      transition: { duration: .2, ease: 'easeOut' }
    }
  };

  const phoneVariants = {
    visible: { opacity: 1, scale: 1, y: 0, delay: .5, transition: { duration: 2, ease: 'easeOut' } },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: "50%",
      transition: { duration: .2, ease: '' },
    }
  };
    return (
      
      <article className="relative w-11/12 h-screen m-auto article">
        <h3 className="absolute text-gray-500 top-10">project #{fields.int}</h3>
        <div className="grid w-full h-screen grid-cols-3">
          <section className="flex flex-col justify-center col-span-1 align-center info">
            <motion.div
              animate={inView ? 'visible' : 'hidden'}
              variants={infoVariants}
              
              ref={ref}
              className="info_contant"
            >

            <Info {...fields}/>
            </motion.div>

          </section>
          <section className="w-full h-screen col-span-2">
            <div className="relative w-full h-full">
              <motion.div 
                animate={inView ? 'visible' : 'hidden'}
                variants={padVariants}
                
                ref={ref}
                className="absolute pad"
                >
                  <Pad {...fields}/>
              </motion.div>
              <motion.div 
                animate={inView ? 'visible' : 'hidden'}
                variants={compVariants}
                
                ref={ref}
                className="absolute computer">
                <Computer {...fields}/>
              </motion.div>
              <motion.div 
                animate={inView ? 'visible' : 'hidden'}
                variants={phoneVariants}
                
                ref={ref}
                className="absolute phone">
                <Phone {...fields}/>
              </motion.div>
            </div>

          </section>

        </div>
      </article>

    );
}
 
export default Work;