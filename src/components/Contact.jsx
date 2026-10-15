import { IoIosMail } from "react-icons/io";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { useTranslation } from 'react-i18next';
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        index="04"
        eyebrow={t('nav.contact')}
        title={t('contact.title1')}
        accent={t('contact.title2')}
      />

      <Reveal className="glass grid gap-10 p-8 md:grid-cols-2 md:p-12">
        {/* Sol: bilgi */}
        <div className="flex flex-col">
          <p className="text-lg leading-relaxed text-zinc-400">{t('contact.description')}</p>

          <a
            href="mailto:melsaahin@gmail.com"
            className="group mt-8 flex items-center gap-3 sm:gap-4"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl sm:h-12 sm:w-12 bg-gradient-to-br from-violet-600 to-fuchsia-500 text-2xl text-white">
              <IoIosMail />
            </span>
            <span className="min-w-0 break-all font-display text-sm text-white min-[360px]:text-base transition-colors group-hover:text-fuchsia-300 sm:text-xl">
              melsaahin@gmail.com
            </span>
          </a>

          <div className="mt-8 flex gap-3 md:mt-auto md:pt-8">
            <a
              href="https://github.com/melikesahn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="btn-ghost text-xl"
            >
              <AiOutlineGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/melikesahinn/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="btn-ghost text-xl"
            >
              <AiOutlineLinkedin />
            </a>
          </div>
        </div>

        {/* Sağ: form */}
        <form
          action={import.meta.env.VITE_GETFORM_KEY}
          method="POST"
          className="flex flex-col gap-4"
          id="form"
        >
          <input
            type="text"
            name="name"
            placeholder={t('contact.name')}
            aria-label={t('contact.name')}
            required
            className="input"
          />
          <input
            type="email"
            name="email"
            placeholder={t('contact.email')}
            aria-label={t('contact.email')}
            required
            className="input"
          />
          <textarea
            name="textarea"
            rows="5"
            placeholder={t('contact.message')}
            aria-label={t('contact.message')}
            required
            className="input resize-none"
          />
          <button type="submit" className="btn-primary self-start">
            {t('contact.send')}
            <FiSend />
          </button>
        </form>
      </Reveal>
    </section>
  )
}

export default Contact
