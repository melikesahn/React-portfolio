import {gsap} from "gsap";
import { useRef, useEffect } from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger"
import { IoIosMail } from "react-icons/io";
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const sectionRef=useRef(null)
  const circleRef=useRef(null)
  const initialTextRef=useRef(null)
  const contactTextRef=useRef(null)

  useEffect(() => {
    //register gsap plugins
     gsap.registerPlugin(ScrollTrigger)
     //scrollTrigger instances are properly killed
     const cleanup = ()=> {
      ScrollTrigger.getAll().forEach((st) => {
        if(st.vars.trigger === sectionRef.current)
          st.kill(true)
      })
     }

     //clean up any existing ScrollTrigger
     cleanup()

     // set initial states
     gsap.set(circleRef.current, {scale: 1, backgroundColor: "white"})
     gsap.set(initialTextRef.current, {opacity: 1})
     gsap.set(contactTextRef.current, {opacity: 0})

     //create the main timeline
     const tl = gsap.timeline({
      scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
          fastScrollEnd: true,
          preventOverlaps: true,
          invalidateOnRefresh: true,
      },
     
     })

     //initial state to mid-zoom (0-50%)
     tl.to(
      circleRef.current,
      {
        scale: 5,
        backgroundColor: "#9333EA",
        ease: "power1.inOut",
        duration: 0.5,
      },
      0,
     )

     //fade out initial text during first half
     tl.to(
      initialTextRef.current,
      {
        opacity: 0,
        ease: "power1.out",
        duration: 0.2,
      },
      0.1,
     )

     //mid-zoom to final state (50%-100%)
     tl.to(
      circleRef.current,
      {
        scale: 17,
        backgroundColor: "#E9D5FF",
        boxShadow: "0 0 50px 20px rgba(233, 213, 255, 0.3)",
        ease: "power2.inOut",
        duration: 0.5,
      },
      0.5,
     )

     // fade in contact text during second half
     tl.to(
      contactTextRef.current,
      {
        opacity: 1,
        scale: 0.2,
        ease: "power2.in",
        duration: 0.2,
      },
      0.7,
     )

     //return clean up function
     return cleanup

  }, [])

  return (
    <section
    ref={sectionRef} 
    className="h-screen flex items-center justify-center 
    px-6 max-w-[1000px] mx-auto md:my-12" 
    style={{overscrollBehavior: "none"}}
    id="contact">

      {/* simple circle with anim */}
      <div
      ref={circleRef}
      className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full
      flex flex items-center justify-center relative transition-shadow
      duration-1000 shadow-violet-300/50 shadow-lg bg-gradient-to-r 
      from-violet-400 to-pink-100"
      >
        <p
        ref={initialTextRef}
        className="text-black font-bold text-base sm:text-lg md:text-xl
         absolute inset-0 flex items-center text-center"
        >
          SCROLL DOWN
        </p>
        <div
        ref={contactTextRef}
        className="text-center relative flex flex-col items-center 
        justify-center opacity"
        >
        <div>
        <h1 className="text-black font-bold 
          text-[0.7rem] sm:text-[0.9rem] md:text-[1rem] 
          leading-none mb-3">
          {t('contact.title1')} 
          <span className="purple">{t('contact.title2')}</span>
        </h1>
            <p className="text-[0.45rem] sm:text-[0.6rem] md:text-[0.7rem] 
          leading-none mx-auto flex items-center justify-center">
          <IoIosMail className="mr-1 text-[0.6rem] sm:text-[0.75rem]" />
          <a 
            href="mailto:melsaahin@gmail.com" 
            className="hover:text-purple-500 hover:underline"
          >
            melsaahin@gmail.com
          </a>
        </p>
        </div>


       <form
        action={import.meta.env.VITE_GETFORM_KEY}
        method="POST"
        className="w-[8rem] sm:w-[10rem] md:w-[12rem] 
                  mx-auto mt-1 flex flex-col items-center gap-1"
        id="form"
      >
        <input
          type="text"
          id="name"
          placeholder={t('contact.name')}
          name="name"
          className="w-full rounded border border-purple-500 
            py-[0.2rem] px-2 text-[0.55rem] focus:outline-none
            focus:ring-[0.5px] focus:ring-purple-400"
        />
        <input
          type="email"
          id="email"
          placeholder={t('contact.email')}
          name="email"
          className="w-full rounded border border-purple-500 
            py-[0.2rem] px-2 text-[0.55rem] focus:outline-none
            focus:ring-[0.5px] focus:ring-purple-400"
        />
        <textarea
          name="textarea"
          id="textarea"
          rows="2"
          placeholder={t('contact.message')}
          className="w-full rounded border border-purple-500 
            py-[0.2rem] px-2 text-[0.55rem] focus:outline-none
            focus:ring-[0.5px] focus:ring-purple-400"
        />
        <button
          type="submit"
          className="w-full py-[0.3rem] rounded text-white font-medium 
            text-[0.6rem] bg-purple-600 
            transition-transform duration-300 hover:bg-purple-800 hover:scale-105"
        >
          {t('contact.send')}
        </button>
      </form>

        </div>
        
      </div>
       
    </section>
  )
}

export default Contact