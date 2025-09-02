import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiPython,
} from "react-icons/di";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaVuejs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoFirebase,
} from "react-icons/bi";
import { PiFileCSharpFill } from "react-icons/pi";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const technologies = [
  { name: "HTML", icon: <DiHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <DiCss3 className="text-blue-600" /> },
  { name: "Bootstrap", icon: <DiBootstrap className="text-purple-600" /> },
  { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-500" /> },
  { name: "React", icon: <DiReact className="text-blue-500" /> },
  { name: "Vue.js", icon: <FaVuejs className="text-green-800" /> },
  { name: "Next.js", icon: <TbBrandNextjs className="text-gray-950" /> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-blue-500" /> },
  { name: "Node Js", icon: <DiNodejsSmall className="text-green-500" /> },
  { name: "MongoDB", icon: <DiMongodb className="text-green-600" /> },
  { name: "Python", icon: <DiPython className="text-blue-600" /> },
  { name: "TypeScript", icon: <BiLogoTypescript className="text-blue-700" /> },
  { name: "JavaScript", icon: <BiLogoJavascript className="text-yellow-400" /> },
  { name: "Firebase", icon: <BiLogoFirebase className="text-yellow-600" /> },
  { name: "C#", icon: <PiFileCSharpFill className="text-purple-600" /> },
];

const Skills = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const boxesRef = useRef([]);
  boxesRef.current = [];

  useEffect(() => {
    // --- Title animasyonu (harf harf) ---
    if (titleRef.current) {
      const letters = titleRef.current.querySelectorAll("span");
      gsap.fromTo(
        letters,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top +=100px",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // --- Description animasyonu (kelime + link) ---
if (descRef.current) {
  const words = descRef.current.querySelectorAll("span, a"); // <a> da dahil
  gsap.fromTo(
    words,
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top +=100px",
        toggleActions: "play none none reverse",
      },
      delay: (i, el) => el.tagName === "A" ? 0.5 : 0, // link için ekstra delay
    }
  );
}


    // --- Kutular animasyonu ---
    gsap.fromTo(
      boxesRef.current,
      { y: 100, opacity: 0, rotationX: -90 },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top +=100px",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  // Yardımcı: stringi harf/kelime span’larına böl
  const splitText = (text, by = "letter") => {
    if (by === "letter") {
      return text.split("").map((char, i) => (
        <span key={i} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </span>
      ));
    }
    if (by === "word") {
      return text.split(" ").map((word, i) => (
        <span key={i} className="inline-block mr-1">
          {word}
        </span>
      ));
    }
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen max-w-[1000px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12"
      id="skills"
    >
      {/* Title */}
      <h2
        ref={titleRef}
        className="text-3xl font-bold mb-6 text-center"
      >
        {splitText(t("skills.title"), "letter")}
      </h2>

      {/* Description */}
      <p ref={descRef} className=" text-center mb-12 text-lg flex flex-wrap justify-center">
        {/* Normal description kelimeler */}
        {splitText(t("skills.description"), "word")}

        {/* Link kelimeleri */}
        {splitText(t("skills.description2"), "word").map((word, i) => (
          <a
            key={`link-${i}`}
            href="https://github.com/melikesahn?tab=repositories"
            target="_blank"
            
            data-delay="0.5" // ekstra delay için
          >
            <span className="underline text-purple-700 hover:text-white">{word}</span>
          </a>
        ))}
      </p>

      {/* Skills kutuları */}
      <div className="flex flex-wrap gap-4 justify-center">
        {technologies.map((tech, index) => (
          <div
            ref={(el) => (boxesRef.current[index] = el)}
            key={index}
            className="flex items-center space-x-2 border border-purple-900 px-4 py-2 rounded-lg bg-purple-900/20 shadow-md"
          >
            <span className="text-2xl">{tech.icon}</span>
            <span className="purple">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
