import {
  SiClaude,
  SiOpenai,
  SiGooglegemini,
  SiVercel,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiShadcnui,
  SiFramer,
  SiVuedotjs,
  SiNodedotjs,
  SiExpress,
  SiSupabase,
  SiFirebase,
  SiMongodb,
  SiSocketdotio,
  SiGit,
  SiGithub,
  SiVite,
  SiFigma,
  SiNetlify,
  SiUnity,
  SiDotnet,
} from "react-icons/si";
import { BsCursorFill } from "react-icons/bs";
import { HiOutlineSparkles } from "react-icons/hi";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

// Kurulu react-icons sürümünde Cursor ikonu yok; genel imleç ikonu kullanıldı
const categories = [
  {
    key: "ai",
    featured: true,
    items: [
      { name: "Claude Code", icon: <SiClaude className="text-[#D97757]" /> },
      { name: "Codex", icon: <SiOpenai className="text-white" /> },
      { name: "Cursor", icon: <BsCursorFill className="text-white" /> },
      { name: "ChatGPT", icon: <SiOpenai className="text-white" /> },
      { name: "Gemini", icon: <SiGooglegemini className="text-sky-400" /> },
    ],
  },
  {
    key: "frontend",
    items: [
      { name: "React", icon: <SiReact className="text-sky-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "shadcn/ui", icon: <SiShadcnui className="text-white" /> },
      { name: "Framer Motion", icon: <SiFramer className="text-fuchsia-400" /> },
      { name: "Vue.js", icon: <SiVuedotjs className="text-emerald-400" /> },
    ],
  },
  {
    key: "backend",
    items: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-white" /> },
      { name: "Supabase", icon: <SiSupabase className="text-emerald-400" /> },
      { name: "Firebase", icon: <SiFirebase className="text-amber-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Socket.IO", icon: <SiSocketdotio className="text-white" /> },
    ],
  },
  {
    key: "tools",
    items: [
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
      { name: "Netlify", icon: <SiNetlify className="text-teal-400" /> },
      { name: "Git", icon: <SiGit className="text-orange-500" /> },
      { name: "GitHub", icon: <SiGithub className="text-white" /> },
      { name: "Vite", icon: <SiVite className="text-violet-400" /> },
      { name: "Figma", icon: <SiFigma className="text-pink-400" /> },
    ],
  },
  {
    key: "game",
    items: [
      { name: "Unity", icon: <SiUnity className="text-white" /> },
      { name: "C#", icon: <SiDotnet className="text-violet-400" /> },
    ],
  },
];

const SkillChip = ({ name, icon }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-zinc-200 transition-colors hover:border-fuchsia-400/40 hover:bg-white/10">
    <span className="text-base">{icon}</span>
    {name}
  </span>
);

SkillChip.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="02" eyebrow={t("nav.skills")} title={t("skills.title")} />

      <Reveal>
        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400">
          {t("skills.description")}
          <a
            href="https://github.com/melikesahn?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gradient font-medium underline-offset-4 hover:underline"
          >
            {t("skills.description2")}
          </a>
        </p>
      </Reveal>

      {/* Bento: AI kartı tam genişlikte, diğerleri ikişerli */}
      <div className="grid gap-4 md:grid-cols-2">
        {categories.map((cat, i) =>
          cat.featured ? (
            <Reveal
              key={cat.key}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-500/60 via-fuchsia-500/40 to-pink-400/30 p-px md:col-span-2"
            >
              <div className="h-full rounded-[calc(1.5rem-1px)] bg-[#0d0817]/95 p-8">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
                <p className="relative mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-fuchsia-300">
                  <HiOutlineSparkles className="text-base" />
                  {t(`skills.categories.${cat.key}`)}
                </p>
                <p className="relative mb-6 max-w-2xl text-zinc-300">{t("skills.aiNote")}</p>
                <div className="relative flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <SkillChip key={item.name} {...item} />
                  ))}
                </div>
              </div>
            </Reveal>
          ) : (
            <Reveal key={cat.key} delay={i * 0.08} className="glass p-8">
              <p className="mb-5 font-mono text-xs uppercase tracking-widest text-zinc-500">
                {t(`skills.categories.${cat.key}`)}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <SkillChip key={item.name} {...item} />
                ))}
              </div>
            </Reveal>
          )
        )}
      </div>
    </section>
  );
};

export default Skills;
