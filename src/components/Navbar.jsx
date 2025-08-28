import { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { Link } from "react-scroll"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const { i18n, t } = useTranslation()

  const toggleNav = () => setNav(!nav)
  const closeNav = () => setNav(false)

  const menuVariants = {
    open: {
      x: 0,
      transition: { stiffness: 20, damping: 15 },
    },
    closed: {
      x: "-100%",
      transition: { stiffness: 20, damping: 15 },
    },
  }

  // 🔥 Menü elemanlarını tek bir array’de tanımladık
  const menuItems = [
    { to: "about", label: t("nav.about") },
    { to: "skills", label: t("nav.skills") },
    { to: "projects", label: t("nav.projects") },
    { to: "contact", label: t("nav.contact") },
  ]

  return (
    <div className=" top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
      <div className="max-w-[1300px] mx-auto flex justify-between text-gray-200 text-xl items-center px-12 h-20">
        {/* Logo */}
            <motion.a
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.3,
                duration: 1.2,
            }}
            className="bg-gradient-to-r from-purple-950 to-purple-400 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-opacity duration-300 hover:opacity-100"
            href="#"
            >
            Portfolio
            </motion.a>

        {/* Desktop Menü */}
        <div className="hidden md:flex items-center gap-12">
          <ul className="flex gap-12 z-10 cursor-pointer">
            {menuItems.map((item, index) => (
              <motion.li
                key={item.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.7 + index * 0.2,
                }}
                className="hover:text-purple-600 hover:underline"
              >
                <Link to={item.to} smooth={true} offset={50} duration={100}>
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Dil Seçici */}
          <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 1.6,
            duration: 0.8,
          }}
          className="flex gap-2">
            <button
              className={`px-3 py-1 rounded ${
                i18n.language === "tr" ? "bg-purple-600" : "bg-gray-700"
              } hover:bg-purple-500 transition-colors`}
              onClick={() => i18n.changeLanguage("tr")}
            >
              TR
            </button>
            <button
              className={`px-3 py-1 rounded ${
                i18n.language === "en" ? "bg-purple-600" : "bg-gray-700"
              } hover:bg-purple-500 transition-colors`}
              onClick={() => i18n.changeLanguage("en")}
            >
              EN
            </button>
          </motion.div>
        </div>

        {/* Açılır Menü butonu */}
        <div onClick={toggleNav} className="md:hidden z-60 text-gray-200">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        {/* Mobile Menü */}
        <motion.div
          initial={false}
          animate={nav ? "open" : "closed"}
          variants={menuVariants}
          className="fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40"
        >
          <ul className="font-semibold text-4xl space-y-8 mt-24 text-center">
            {menuItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={closeNav}
                  smooth={true}
                  offset={50}
                  duration={100}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Dil butonları mobil için */}
            <li className="flex justify-center gap-4 text-2xl">
              <button
                className={`px-4 py-2 rounded ${
                  i18n.language === "tr" ? "bg-purple-600" : "bg-gray-700"
                } hover:bg-purple-500 transition-colors`}
                onClick={() => {
                  i18n.changeLanguage("tr")
                  closeNav()
                }}
              >
                TR
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  i18n.language === "en" ? "bg-purple-600" : "bg-gray-700"
                } hover:bg-purple-500 transition-colors`}
                onClick={() => {
                  i18n.changeLanguage("en")
                  closeNav()
                }}
              >
                EN
              </button>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

export default Navbar
