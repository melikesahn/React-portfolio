import cv from "../assets/cv.pdf"
import profilepic from "../assets/hero.webp";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect.jsx";
import { useTranslation } from 'react-i18next';
import {
  AiOutlineGithub,
 // AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
  DiMongodb,
} from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";

import { motion } from "framer-motion";

const iconVariants = (duration)=>({
    initial:{y: -10},
    animate:{
        y: [10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})


const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-44 max-w-[1200px] mx-auto relative" >
     <div className="grid md:grid-cols-2 place-items-center gap-8">
            <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            >
                <TypeAnimation
                    sequence={[
                        "Frontend Dev",
                        1000,
                        "Full-Stack Dev",
                        1000,
                        "Game Dev",
                        1000
                    ]}
                    speed={50}
                    repeat={Infinity}
                    className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
                />
                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-gray-200 md:text-2xl text-5xl tracking-tight mb-4"
                >
                    {t('hero.greeting')}<br/>
                    <span className="text-purple-600 md:text-5xl">Melike Şahin</span>
                </motion.p>
                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
                >
                    {t('hero.description')}
                </motion.p>

                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.5 }}
                className="flex flex-row items-center gap-6 my-4 md:mb-0"
                >
                    <motion.a
                     href={cv}
                    download="MelikeSahin_CV.pdf"
                    whileHover={{ scale: 1.2, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                        className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border
                                     border-purple-400 rounded-xl shadow-xl shadow-purple-600 transition-all duration-300 hover:translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-purple-900"     
                    >
                        Download CV
                    </motion.a>

                    <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
                        <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/melikesahn" target="_blank" rel="noopener noreferrer">
                            <AiOutlineGithub/>
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/melikesahinn/" target="_blank" rel="noopener noreferrer">
                            <AiOutlineLinkedin/>
                        </motion.a>


                    </div>
                </motion.div>


                </motion.div>
                <motion.img 
                src={profilepic}
                className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-purple-600 transition-all duration-300 hover:translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-purple-900 md:w-[350px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            />
                

    </div>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 2 }}
      className="flex flex-row text-7xl px-12 md:px-0 w-full justify-evenly items-center py-24"
    >
      {/* Her ikon motion.div ile sarmalanıyor */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(1.5)}
      >
        <DiJavascript1 className="text-yellow-500 mx-2" />
      </motion.div>
      <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(3)}
      >
        <DiReact className="text-blue-500 mx-2" />
      </motion.div>
      <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(5)}
      >
        <DiNodejsSmall className="text-green-500 mx-2" />
      </motion.div>
      <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(4)}
      >
        <DiMongodb className="text-green-500 mx-2" />
      </motion.div>
      <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(3.5)}
      >
        <RiTailwindCssFill className="text-blue-500 mx-2" />
      </motion.div>
    </motion.div>

        <div className="absolute inset-0 hidden md:block">
            <ShinyEffect left={0} top={0} size={1400} />
        </div> 
    </div>
  )
}

export default Hero