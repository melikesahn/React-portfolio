
import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiPython,
  
} from "react-icons/di"
import {gsap} from "gsap";
import { useRef, useEffect } from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger"
import { FaVuejs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript,BiLogoJavascript,BiLogoFirebase } from "react-icons/bi";

import { PiFileCSharpFill } from "react-icons/pi";
import { useTranslation } from 'react-i18next';
// spin effect bir kere kaydedilsin
gsap.registerEffect({
  name: "spin",
  effect(targets) {
    return gsap.to(targets, {
      rotation: (i, el) =>
        gsap.utils.snap(360, gsap.getProperty(el, "rotation") + 360),
      duration: 1,
      ease: "power2.inOut",
    });
  },
});

const skills = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'HTML', icon: <DiHtml5 className='text-orange-600' /> },
        { name: 'CSS', icon: <DiCss3 className='text-blue-600' /> },
        { name: 'Bootstrap', icon: <DiBootstrap className='text-purple-600' /> },
        { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' /> },
        { name: 'React', icon: <DiReact className='text-blue-500' /> },
        { name: 'Vue.js', icon: < FaVuejs className='text-green-800' /> },
        { name: 'Next.js', icon: < TbBrandNextjs className='text-gray-950' /> },
        { name: 'Tailwind CSS', icon: < RiTailwindCssFill className='text-blue-500' /> },
        
        
      ],
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'Node Js', icon: <DiNodejsSmall className='text-green-500' /> },
        { name: 'MongoDB', icon: <DiMongodb className='text-green-600' /> },
        { name: 'React', icon: <DiReact className='text-blue-500' /> },
        { name: "Python", icon: <DiPython className='text-blue-600' /> },
        
        { name: 'TypeScript', icon: <BiLogoTypescript className='text-blue-700'/>},
        { name: 'JavaScript', icon: <BiLogoJavascript className='text-yellow-400'/>},
        { name: 'Firebase', icon: <BiLogoFirebase className='text-yellow-600'/>},
        { name: 'C#', icon: <PiFileCSharpFill className='text-purple-600'/>},
        
              
        
      ],
    },
  ]

const Skills = () => {
  const { t } = useTranslation();
  const sectionRef=useRef(null);
  const boxesRef = useRef([]);
  boxesRef.current = [];
      

    useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    //title
    gsap.fromTo(
        sectionRef.current,
        {y: 100, opacity: 0},
        {
            y: -50,
            opacity:1,
            duration:0.8,
            scrollTrigger:{
                trigger: sectionRef.current,
                start: "top 40%",
                toggleActions: "play none none reverse",
            }
        }
    )
    //boxes
  boxesRef.current.forEach((box) => {
  if (box) {
    gsap.to(box, {
      rotation: 360,
      duration: 1,
      scrollTrigger: {
        trigger: box,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }
});
 

  }, []);

  return (
    <section ref={sectionRef} className="h-screen max-w-[800px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
        
        <h2  className="text-3xl font-bold mb-4 text-center">{t('skills.title')}</h2>
        <p className="text-center mb-8">
            {t('skills.description')} <a href="https://github.com/melikesahn?tab=repositories" target="_blank" className="underline hover:text-purple-600">{t('skills.description2')}</a>
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8
                        ">
            {skills.map((skill, index) => (
                <div ref={(el) => (boxesRef.current[index] = el)} key={index} className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg 
                                w-full md:w-1/2">
                    <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {skill.technologies.map((tech, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <span className="text-2xl">{tech.icon}</span>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      
    </section>
  )
}

export default Skills