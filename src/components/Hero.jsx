import cv from "../assets/cv.pdf";
import profilepic from "../assets/avatar.png";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { SiClaude, SiOpenai } from "react-icons/si";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Reveal from "./Reveal.jsx";

// Avatarın çevresinde yüzen küçük rozet
const FloatingBadge = ({ icon, label, className, duration }) => (
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    className={`glass absolute flex items-center gap-2 rounded-2xl px-3 py-2 text-sm text-zinc-200 shadow-xl ${className}`}
  >
    {icon}
    {label}
  </motion.div>
);

FloatingBadge.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  duration: PropTypes.number,
};

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pb-16 pt-32"
    >
      <div className="grid items-center gap-16 md:grid-cols-[1.4fr_1fr]">
        {/* Sol: metin */}
        <div className="order-2 text-center md:order-1 md:text-left">
          <Reveal>
            <span className="chip mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {t("hero.badge")}
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mb-2 text-lg text-zinc-400">{t("hero.greeting")}</p>
            <h1 className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Melike <span className="text-gradient">Şahin</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <TypeAnimation
              sequence={["Vibe Coder", 1500, "Full Stack Dev", 1500]}
              wrapper="p"
              speed={50}
              repeat={Infinity}
              className="mt-4 h-8 font-mono text-lg text-fuchsia-300 md:text-xl"
            />
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-400 md:mx-0">
              {t("hero.description")}
            </p>
          </Reveal>

          <Reveal delay={0.4} className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a href={cv} download="MelikeSahin_CV.pdf" className="btn-primary">
              <FiDownload />
              {t("hero.cv")}
            </a>
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
          </Reveal>
        </div>

        {/* Sağ: avatar */}
        <Reveal delay={0.2} y={0} className="relative order-1 mx-auto md:order-2">
          <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-pink-400 opacity-30 blur-3xl" />
          <div className="relative rounded-full bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-pink-400 p-[3px]">
            <img
              src={profilepic}
              alt="Melike Şahin"
              className="h-56 w-56 rounded-full bg-[#0d0817] object-cover sm:h-72 sm:w-72 lg:h-80 lg:w-80"
            />
          </div>
          <FloatingBadge
            icon={<SiClaude className="text-lg text-[#D97757]" />}
            label="Claude Code"
            className="-right-4 top-6"
            duration={4}
          />
          <FloatingBadge
            icon={<SiOpenai className="text-base text-white" />}
            label="Codex"
            className="-left-6 bottom-10"
            duration={5}
          />
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
