//import { motion } from "framer-motion"
import Reveal from "./Reveal"
import { IoIosMail } from "react-icons/io";
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
        <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
            <div>
                <div className="text-gray-300 my-3">
                    <h3 className="text-4xl font-semibold mb-5">  {t('contact.title1')} <span>{t('contact.title2')}</span></h3>
                    <p className="xt-justify leading-7 w-11/12 mx-auto flex items-center">
                    <IoIosMail className="mr-2" />
                        <a href="mailto:melsaahin@gmail.com" className="hover:text-purple-500 hover:underline">
                            melsaahin@gmail.com
                        </a>
                    </p>
                </div>

               
            </div>

            <form
                action="https://getform.io/f/brooqpra"
                method="POST"
                className=" max-w-6xl p-5 md:p-12"
                id="form"
            >
            
            <input
                type="text"
                id="name"
                placeholder={t('contact.name')}
                name="name"
                className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <input
              type="email"
              id="email"
              placeholder={t('contact.email')}
              name="email"
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="4"
              placeholder={t('contact.message')}
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
                <button
                type="submit"
                className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color 
                            transition-transform duration-300 hover:scale-105"
                >
                {t('contact.send')}
                </button>

            
          </form>

        </div>
        
        </Reveal>
    </div>
  )
}

export default Contact