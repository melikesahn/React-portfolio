import { useTranslation } from 'react-i18next'; 
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdOutlineWorkHistory, MdOutlineAssuredWorkload } from "react-icons/md";

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const starsRef = useRef([]);
  const timeLineBoxesRef = useRef([]);
  const introWordRef = useRef(null);

  const { t } = useTranslation();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Kutular animasyonu
    const boxes = timeLineBoxesRef.current;
    gsap.fromTo(
      boxes,
      { x: 150, opacity: 0, scale: 0.8 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.3,
        delay: 3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Intro (h3) kelime animasyonu
    const intro = introWordRef.current;
    const words = intro.innerText
      .split(" ")
      .map((word) => `<span class='inline-block mr-1 opacity-0 translate-y-6'>${word}</span>`)
      .join(" ");
    intro.innerHTML = words;

    gsap.utils.toArray(intro.querySelectorAll("span")).forEach((el, i) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: i * 0.07,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });
    });


    // Title animasyonu
    gsap.fromTo(
      titleRef.current,
      { y: 400, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Intro animasyonu
     gsap.fromTo(
      introRef.current,
      { y: 400, opacity: 0, filter: "blur(10px)" },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        filter: "blur(0px)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Stars animasyonu
    starsRef.current.forEach((star, index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      const speed = 0.5 + Math.random() * 0.5;

      gsap.to(star, {
        x: `${direction * (100 + index * 20)}`,
        y: `${direction * -50 - index * 10}`,
        rotation: direction * 360,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: speed,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  const addToStars = (el) => {
    if (el && !starsRef.current.includes(el)) {
      starsRef.current.push(el);
    }
  };


    // Timeline ikon fonksiyonu
  const getIcon = (iconName) => {
    switch (iconName) {
      case "workload":
        return <MdOutlineAssuredWorkload className="text-purple-400 w-5 h-5" />;
      case "history":
        return <MdOutlineWorkHistory className="text-purple-400 w-5 h-5" />;
      default:
        return null;
    }
  };
  // timeline verilerini JSON’dan çek
  const timeline = t("timeline", { returnObjects: true });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-black to-[#9a74cf50] py-20 md:py-32"
      id="about"
    >
      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            ref={addToStars}
            key={`star-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${10 + i * 3}px`,
              height: `${10 + i * 3}px`,
              backgroundColor: "white",
              opacity: 0.2 + Math.random() * 0.4,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Container */}
      <div className="container mx-auto px-5 flex flex-col items-center">
        <h1
          ref={titleRef}
          className="text-white text-4xl md:text-6xl font-semibold mb-10 text-center opacity-0"
        >
          {t("about.title")}
          <span className="purple">{t("about.title2")}</span>
        </h1>

        <div
          ref={introRef}
          className="w-full flex flex-col md:flex-row justify-center text-center items-start gap-10"
        >
          <h3 ref={introWordRef} className="text-xl font-bold text-purple-200 max-w-full md:max-w-3xl tracking-wider">
            {t("about.description")}
          </h3>


        </div>

          {/* Timeline */}
          <div className="relative w-full mt-10 md:w-2/3">
            {/* Dikey çizgi */}
            <div className="hidden md:block absolute left-5 top-0 bottom-0 w-1 bg-gray-600"></div>

            <div className="flex flex-col space-y-12">
            {timeline.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center w-full relative">
                {/* İkon */}
                <div className="md:mr-6 mb-4 md:mb-0 z-10 border border-purple-400 rounded-lg bg-gray-800 p-3 flex items-center justify-center">
                  {getIcon(step.icon)}
                </div>

                {/* İçerik kutusu */}
                <div
                  ref={(el) => {
                    if (el && !timeLineBoxesRef.current.includes(el)) {
                      timeLineBoxesRef.current.push(el);
                    }
                  }}
                  className="flex-1 px-4 py-2 border border-purple-400 rounded-lg shadow-lg shadow-purple-600 bg-gray-900"
                >
                  <span className="text-purple-400 font-bold">{step.year}</span>
                  <h4 className="text-white font-semibold mt-1">{step.title}</h4>
                  <p className="text-gray-300 mt-1 text-base">{step.desc}</p>
                </div>
              </div>
            ))}
            </div>
          </div>
      </div>
    </section>
  );
};

export default About;
