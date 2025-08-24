import project1Video from "../assets/project1.mp4"
import project3Video from "../assets/project3.mp4"
import project1 from "../assets/project1.jpeg"
import project2 from "../assets/project2.jpeg"
import project3 from "../assets/project3.jpg"
import gameproject1Video from "../assets/gameproject1.mp4"
import { AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal.jsx';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      img: project1,
      video: project1Video,
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      links: {
        site: "https://michat-qhhg.onrender.com",
        github: "https://github.com/melikesahn/chatt-app-live",
      },
    },
     {
      img: project1,
      video: gameproject1Video,
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      links: {
        site: "https://michat-qhhg.onrender.com",
        github: "https://github.com/melikesahn/chatt-app-live",
      },
    },
    {
      img: project2,
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      links: {
        //site: "#",
        github: "https://github.com/melikesahn/next.js-e-commerce",
      },
    },
    {
      img: project3,
      video: project3Video,
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      links: {
        site: "#",
        github: "https://github.com/melikesahn/React-portfolio",
      },
    },
  ];

  return (
    <div className='max-w-[800px] mx-auto p-6 md:my-20' id="projects">
      <h2 className='text-3xl font-bold text-gray-200 mb-8'>{t('projects.title')}</h2>
      {projects.map((project, index) => (
        <Reveal key={index}>
          <div className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
            <div className='w-full md:w-1/2 p-4'>
              {project.video ? (
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  className='w-full h-full object-cover rounded-lg shadow-lg'
                />
              ) : (
                <img
                  src={project.img}
                  alt={project.title}
                  className='w-full h-full object-cover rounded-lg shadow-lg'
                />
              )}
            </div>
            <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
              <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
              <p className='text-gray-300 mb-4'>{project.description}</p>
              <div className='flex space-x-4'>
                {project.links.site && (
                  <a 
                    href={project.links.site} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'
                  >
                    {t('projects.visitSite')}
                  </a>
                )}
                <a 
                  href={project.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='px-4 py-3 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'
                >
                  <AiOutlineGithub/>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Projects;