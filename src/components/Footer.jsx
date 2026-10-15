import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-white/5 py-8 text-center font-mono text-xs text-zinc-500">
      © {new Date().getFullYear()} Melike Şahin · {t("footer.rights")}
    </footer>
  );
};

export default Footer;
