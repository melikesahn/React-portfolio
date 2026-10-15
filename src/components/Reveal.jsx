import { motion } from 'framer-motion'
import PropTypes from 'prop-types';

// Görünür alana girince aşağıdan yumuşakça beliren sarmalayıcı
const Reveal = ({ children, delay = 0, y = 24, className = '', ...rest }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    {...rest}
  >
    {children}
  </motion.div>
)

Reveal.propTypes = {
  children: PropTypes.node,
  delay: PropTypes.number,
  y: PropTypes.number,
  className: PropTypes.string,
};

export default Reveal
