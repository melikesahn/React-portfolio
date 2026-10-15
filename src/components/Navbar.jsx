import { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { Link } from "react-scroll"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "react-i18next"

const LANGS = ["tr", "en"]

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const { i18n, t } = useTranslation()

  const closeNav = () => setNav(false)

  const menuItems = [
    { to: "about", label: t("nav.about") },
    { to: "skills", label: t("nav.skills") },
    { to: "projects", label: t("nav.projects") },
    { to: "contact", label: t("nav.contact") },
  ]

  const linkProps = {
    spy: true,
    smooth: true,
    offset: -100,
    duration: 500,
  }

  const LangSwitch = () => (
    <div className="flex rounded-full bg-white/5 p-1 font-mono text-xs">
      {LANGS.map((lng) => (
        <button
          key={lng}
          onClick={() => {
            i18n.changeLanguage(lng)
            closeNav()
          }}
          className={`rounded-full px-3 py-1 uppercase transition-colors ${
            i18n.resolvedLanguage === lng
              ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          {lng}
        </button>
      ))}
    </div>
  )

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-4 z-50 px-4"
    >
      <nav className="glass mx-auto flex max-w-5xl items-center justify-between rounded-full py-2 pl-3 pr-2">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-500 font-display text-sm font-bold text-white">
            MŞ
          </span>
          <span className="hidden font-display font-semibold text-white sm:block">Melike Şahin</span>
        </a>

        {/* Desktop menü */}
        <div className="hidden items-center gap-2 md:flex">
          <ul className="flex items-center gap-1">
            {menuItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  {...linkProps}
                  activeClass="!text-white bg-white/10"
                  className="cursor-pointer rounded-full px-4 py-2 text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <LangSwitch />
        </div>

        {/* Mobil menü butonu */}
        <button
          onClick={() => setNav(!nav)}
          aria-label="Menu"
          aria-expanded={nav}
          className="grid h-10 w-10 place-items-center rounded-full text-zinc-200 transition hover:bg-white/10 md:hidden"
        >
          {nav ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
        </button>
      </nav>

      {/* Mobil menü */}
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="glass mx-auto mt-2 max-w-5xl p-4 md:hidden"
          >
            <ul className="flex flex-col">
              {menuItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    {...linkProps}
                    onClick={closeNav}
                    className="block cursor-pointer rounded-2xl px-4 py-3 text-lg text-zinc-300 transition hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex justify-center border-t border-white/10 pt-4">
              <LangSwitch />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
