import { useEffect, useRef } from "react"
import project1 from "../assets/project1.jpg"
import project2 from "../assets/project2.jpg"
import project3 from "../assets/project3.jpg"
import { AiOutlineGithub } from 'react-icons/ai'
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"
import { useTranslation } from 'react-i18next';



const Portfolio = () => {
  const { t } = useTranslation();
  const sectionRef= useRef(null)
  const titleRef  =useRef(null); 
  const titleLineRef  =useRef(null);
  const triggerRef  =useRef(null);
  const horizontalRef  =useRef(null);


  const projects = [
      {
        img: project1,
        
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
          site: "https://melikesahn.github.io/React-portfolio/",
          github: "https://github.com/melikesahn/React-portfolio",
        },
      },
      {
        img: project3,
        title: t('projects.project3.title'),
        description: t('projects.project3.description'),
        links: {
          site: "https://youtu.be/PvbwF6jm-w0?si=6-XdnSqhHZFmYL3r",
          github: "https://github.com/Ktyprk/YZTA-Grup15",
        },
      },
    ];

    useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    //title
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );
    //title line 
    gsap.fromTo(
      titleLineRef.current,
      {
        width: "0%",
        opacity: 0,
      },
      {
        width: "100%",
        opacity: 1,
        duration: 1.5,
        ease: "power3.inOut",
        delay: 0.3,
        scrollTrigger:{
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",

        }
      }
    )
    //section entrance
    gsap.fromTo(
      triggerRef.current,
      {
        y: 100,
        rotationX: 20,
        opacity: 0,
      },
      {
        y: 0,
        rotationX: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger:{
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",

        }
      }
    )
    // parallax effect 
    gsap.fromTo(
      sectionRef.current,
      {
        backgroundPosition: "50% 0%",
      },
      {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      }
    )
    //horizontal scroll anim
    const horizontalScroll = gsap.to(".panel",{
      xPercent: -100 * (projects.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () => `+=${horizontalRef.current.offsetWidth}`,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (projects.length  - 1),
          delay: 0.1,
        },
        invalidateOnRefresh: true,
      }

    })
    //image anim
    const panels = gsap.utils.toArray(".panel")
    panels.forEach((panel, i ) => {
      const image = panel.querySelector(".project-image")
      const projectDes =  panel.querySelector(".project-des")
      //create a timeline for each panel
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          containerAnimation: horizontalScroll,
          start: "left right",
          end: "right left",
          scrub: true,
        }
      })
      //images scale and opacity anim
      tl.fromTo(image, {scale: 0, }, {scale: 1, 
        duration: 0.1,})

      //des anim if it exists
      if(projectDes){
        tl.fromTo(projectDes, { y: 30, }, {y: -100, duration: 0.3,}, 0.2)
      }  
    })


  }, [projects.length]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-20 bg-white overflow-hidden"
    >

    <div className="container mx-auto px-4 mb-16 relative z-10">

      <h2 ref={titleRef} className="text--4xl md:text-5xl lg:text-6xl 
      font-bold text-black text-center mb-4 opacity-0 ">
            {t('projects.title')} 
      </h2>
      
      <div ref={titleLineRef} className="w-0 h-1 bg-gradient-to-r
      from-purple-500 to-pink-500 mx-auto opacity-0">
      </div>

    </div>
     {/*horizontal scroll section */}
    <div ref={triggerRef} className="overflow-hidden opacity-0">

      <div ref={horizontalRef} className="horizontal-section flex md:w-[300%] w-[300%]">
        {projects.map((project) => (
          <div key={project.id} className=" panel w-full h-screen relative flex flex-col md:flex-row items-center justify-center gap-6"> 
              <div className='w-full md:w-1/2 p-4 flex justify-center'>
                
                
                  <img
                    src={project.img}
                    alt={project.title}
                    className='project-image max-w-full max-h-[400px] object-contain rounded-2xl'
                  />
               
              </div>
              <div className="project-des w-full md:w-1/2 p-4 flex flex-col justify-center text-center md:text-left">
              <h3 className="text-2xl font-semibold text-black mb-4">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex justify-center md:justify-start space-x-4">
                  {project.links.site && (
                    <a 
                      href={project.links.site} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-purple-600 transition duration-300'
                    >
                      {t('projects.visitSite')} 
                    </a>
                  )}
                  <a 
                    href={project.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='px-4 py-3 bg-slate-600 text-gray-200 rounded-lg hover:bg-purple-600 transition duration-300'
                  >
                    <AiOutlineGithub/>
                  </a>
                </div>
              </div>
          </div>
        ))}
      </div>

    </div>

    </section>
  )
}

export default Portfolio