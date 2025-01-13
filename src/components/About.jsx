import { motion } from "framer-motion";

const About = () => {
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
                
                
                    <h3 className="text-4xl font-semibold mb-5">Hakkım<span>da</span></h3>
                    <p className="text-justify leading-7 w-11/12 mx-auto">
                    Bitirme projemde React, Vue.js, Redux ve Node.js ile bir MERN stack web sitesi geliştirdim; RESTful API ve MongoDB ile veri yönetimi sağladım. 
                    Şu anda Next.js kullanarak API entegrasyonu, SSR, gelişmiş arama ve filtreleme özellikleri içeren bir proje ve MERN stack ile gerçek zamanlı bir sohbet uygulaması geliştiriyorum.
                     Makine öğrenimi ve derin öğrenmede TensorFlow, Keras, PyTorch ile CNN ve YOLO tabanlı görüntü sınıflandırma projelerinde çalıştım.
                    </p>
                </div>

                <div className="flex mt-10 items-center gap-7">
                    <div className="bg-gray-800/40 p-4 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">10
                            <span>+</span>
                        </h3>
                        <p className="text-xs md:text-base"><span>Proje</span></p>
                    </div>

                    <div className="bg-gray-800/40 p-5 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">4
                            <span>+</span>
                        </h3>
                        <p className="text-xs md:text-base"><span> yıl öğrenme</span></p>
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