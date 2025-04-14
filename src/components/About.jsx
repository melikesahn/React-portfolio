import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next'; 

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-[1200px] mx-auto flex justify-center px-4 text-gray-200 pb-8 md:py-12 " id="about">
     <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
        >
                <div className="text-gray-300 my-3">
                
                
                    <h3 className="text-4xl font-semibold mb-5">{t('about.title')}<span>{t('about.title2')}</span></h3>
                    <p className="text-justify leading-7 w-11/12 mx-auto">
                    {t('about.description')}
                    
                    </p>
                </div>

                <div className="flex mt-10 items-center gap-7">
                    <div className="bg-gray-800/40 p-4 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">10
                            <span>+</span>
                        </h3>
                        <p className="text-xs md:text-base"><span>{t('about.project')}</span></p>
                    </div>

                    <div className="bg-gray-800/40 p-5 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">4
                            <span>+</span>
                        </h3>
                        <p className="text-xs md:text-base"><span>{t('about.learn')}</span></p>
                    </div>

                {/*     <div className="bg-gray-800/40 p-5 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">30
                            <span>+</span>
                        </h3>
                        <p className="text-xs md:text-base"><span>happy clients</span></p>
                    </div> */}

                </div>
                </motion.div>
                

            </div>
  )
}

export default About