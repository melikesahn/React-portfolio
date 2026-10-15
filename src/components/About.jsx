import { useTranslation } from "react-i18next";
import { MdOutlineWorkHistory, MdOutlineAssuredWorkload } from "react-icons/md";
import { HiOutlineSparkles, HiOutlineUser } from "react-icons/hi";
import PropTypes from "prop-types";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

const icons = {
  workload: MdOutlineAssuredWorkload,
  history: MdOutlineWorkHistory,
};

const CardLabel = ({ icon: Icon, children }) => (
  <p className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-500">
    <Icon className="text-base text-fuchsia-300" />
    {children}
  </p>
);

CardLabel.propTypes = {
  icon: PropTypes.elementType.isRequired,
  children: PropTypes.node,
};

const About = () => {
  const { t } = useTranslation();
  const timeline = t("timeline", { returnObjects: true });
  const focusItems = t("about.focusItems", { returnObjects: true });

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        index="01"
        eyebrow={t("nav.about")}
        title={t("about.title")}
        accent={t("about.title2")}
      />

      {/* Bento grid */}
      <div className="grid gap-4 md:grid-cols-3">
        <Reveal className="glass p-8 md:col-span-2">
          <CardLabel icon={HiOutlineUser}>{t("nav.about")}</CardLabel>
          <p className="text-lg leading-relaxed text-zinc-300 md:text-xl">
            {t("about.description")}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="glass p-8">
          <CardLabel icon={HiOutlineSparkles}>{t("about.focus")}</CardLabel>
          <ul className="space-y-3">
            {focusItems.map((item) => (
              <li key={item} className="flex items-center gap-3 text-zinc-200">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-pink-300" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2} className="glass p-8 md:col-span-3">
          <CardLabel icon={MdOutlineWorkHistory}>{t("about.experience")}</CardLabel>
          <div className="grid gap-8 md:grid-cols-2">
            {timeline.map((step) => {
              const Icon = icons[step.icon] ?? MdOutlineWorkHistory;
              return (
                <div key={step.title} className="flex gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5">
                    <Icon className="text-xl text-fuchsia-300" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-fuchsia-300/80">{step.year}</span>
                    <h3 className="mt-1 font-display text-lg font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
