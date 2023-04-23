import React from 'react'
import {motion} from 'framer-motion'
import '../App.css'

const Description = () => {
  return (
    <div>      
        <motion.div id='div1'

        initial={{
          x:-1000,
          opacity: 0
        }}

        animate={{
          x:0,
          opacity: 1
        }}
        transition={{
          delay:1,
          duration:2
        }}
        >
          <motion.div id='div2'
          initial={{
            opacity:0,
          }}
          animate={{
            y:0,
            opacity:1
          }}
          transition={{
            delay:1,
            duration:2
          }}>
            <motion.img
            src='img/p.jpg'
            className='p'
            width={850}

            initial={{
              opacity:0.6
            }}

            transition={{
              duration:5
            }}

            whileTap={{rotate:360}}/>

          </motion.div>
        </motion.div>

        <motion.div id='div3'

initial={{
  x:-1000,
  opacity: 0
}}

animate={{
  x:0,
  opacity: 1
}}
transition={{
  delay:3,
  duration:2
}}
>
  <motion.div id='div4'
  initial={{
    opacity:0,
  }}
  animate={{
    y:0,
    opacity:1
  }}
  transition={{
    delay:3,
    duration:2
  }}>
    <motion.img
    src='img/r.jpg'
    className='r'
    width={850}

    initial={{
      opacity:0.6
    }}

    transition={{
      duration:5
    }}

    whileTap={{rotate:360}}/>

  </motion.div>
</motion.div>

<motion.div id='div5'

        initial={{
          x:-1000,
          opacity: 0
        }}

        animate={{
          x:0,
          opacity: 1
        }}
        transition={{
          delay:5,
          duration:2
        }}
        >
          <motion.div id='div6'
          initial={{
            opacity:0,
          }}
          animate={{
            y:0,
            opacity:1
          }}
          transition={{
            delay:5,
            duration:2
          }}>
            <motion.img
            src='img/u.jpg'
            className='u'
            width={850}

            initial={{
              opacity:0.6
            }}

            transition={{
              duration:5
            }}

            whileTap={{rotate:360}}/>

          </motion.div>
        </motion.div>


          

            <motion.button className='btn btn-primary'
            whileHover={{
              scale:1.2
            }}>
            Присоединиться</motion.button>
            </div>

    
  )
}

export default Description