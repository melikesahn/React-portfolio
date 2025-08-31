import  { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import PropTypes from 'prop-types';

const Reveal = ({ children, width = 'fit-content' }) => {

    const ref = useRef(null)

    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
        }
    }, [isInView, mainControls])

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>

        <motion.div
        variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 }, 
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay:1, }}
        >
            {children}
        </motion.div>
        
    </div>
  )
}
Reveal.propTypes = {
    children: PropTypes.node.isRequired, // children'in geçildiğinden ve 'node' türünde olduğundan emin olun
    width: PropTypes.string, // Opsiyonel width prop'u
};
export default Reveal