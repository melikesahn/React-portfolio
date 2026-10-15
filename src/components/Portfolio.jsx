import project1 from "../assets/project1.jpg"
import project2 from "../assets/project2.jpg"
import project3 from "../assets/project3.jpg"
import { AiOutlineGithub } from 'react-icons/ai'
import { FiArrowUpRight } from 'react-icons/fi'
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

const Portfolio = () => {
  const { t } = useTranslation();

  const projects = [
    {
      img: project1,
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      tags: ["React", "Node.js", "Socket.IO", "MongoDB"],
      links: {
        site: "https://michat-qhhg.onrender.com",
        github: "https://github.com/melikesahn/chatt-app-live",
      },
    },
    {
      img: project2,
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      tags: ["React", "Tailwind", "Framer Motion", "GSAP"],
      links: {
        site: "https://melikesahn.github.io/React-portfolio/",
        github: "https://github.com/melikesahn/React-portfolio",
      },
    },
    {
      img: project3,
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      tags: ["Unity", "C#", "Scrum"],
      links: {
        site: "https://youtu.be/PvbwF6jm-w0?si=6-XdnSqhHZFmYL3r",
        github: "https://github.com/Ktyprk/YZTA-Grup15",
      },
    },
  ];

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="03" eyebrow={t('nav.projects')} title={t('projects.title')} />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal
            key={project.links.github}
            delay={i * 0.1}
            className="glass group flex flex-col overflow-hidden transition-colors hover:border-fuchsia-400/30"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07040d]/80 to-transparent" />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip">{tag}</span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3">
                {project.links.site && (
                  <a
                    href={project.links.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-5 py-2 text-sm"
                  >
                    {t('projects.visitSite')}
                    <FiArrowUpRight />
                  </a>
                )}
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="btn-ghost p-2.5 text-lg"
                >
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
