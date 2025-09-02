import cv from "../assets/cv.pdf";
//import profilepic from "../assets/hero.webp";
import profilepic from "../assets/avatar.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect.jsx";
import { useTranslation } from "react-i18next";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { DiJavascript1, DiNodejsSmall, DiReact, DiMongodb } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import Spline from '@splinetool/react-spline';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="min-h-screen mx-auto relative flex flex-col justify-center px-6 md:px-12 overflow-hidden">
      <div className="grid md:grid-cols-2 place-items-center gap-8 md:gap-16">
        {/* Left side (Text) */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={["Frontend Dev", 1000, "Full-Stack Dev", 1000, "Game Dev", 1000]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-lg sm:text-2xl md:text-4xl lg:text-5xl italic mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4"
          >
            {t("hero.greeting")}
            <br />
            <span className="text-purple-600 text-3xl sm:text-4xl md:text-5xl">
              Melike Şahin
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-sm sm:max-w-md md:max-w-lg text-base sm:text-lg md:text-xl mb-6"
          >
            {t("hero.description")}
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
              whileHover={{
                scale: 1.2,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
              }}
              className="z-10 cursor-pointer font-bold text-gray-200 p-3 sm:p-4 border border-purple-400 rounded-xl shadow-xl shadow-purple-600 transition-all duration-300 hover:translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-purple-900"
            >
              Download CV
            </motion.a>

            <div className="flex gap-6 flex-row text-3xl sm:text-4xl md:text-6xl text-purple-400 z-20">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/melikesahn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/melikesahinn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineLinkedin />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side (Image) */}
          <motion.img
          src={profilepic}
          className="w-32 sm:w-48 md:w-64 lg:w-80 cursor-pointer rounded-full shadow-xl shadow-purple-600"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, y: 8, boxShadow: "0px 10px 30px rgba(128,0,128,0.8)" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        /> 
          {/* Right side (Spline 3D) */}
         
            {/* <Spline scene="https://prod.spline.design/eiYyVoYAFB4gtfyL/scene.splinecode" /> */}
        </div>

      {/* Tech icons */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-row text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-4 md:px-0 w-full justify-evenly items-center py-12"
      >
        <motion.div initial="initial" animate="animate" variants={iconVariants(1.5)}>
          <DiJavascript1 className="text-yellow-500 mx-2" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(3)}>
          <DiReact className="text-blue-500 mx-2" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(5)}>
          <DiNodejsSmall className="text-green-500 mx-2" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(4)}>
          <DiMongodb className="text-green-500 mx-2" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(3.5)}>
          <RiTailwindCssFill className="text-blue-500 mx-2" />
        </motion.div>
      </motion.div>

      {/* Background shiny effect */}
      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </section>
  );
};

export default Hero;
