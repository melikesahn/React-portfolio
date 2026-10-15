import PropTypes from 'prop-types';
import Reveal from './Reveal.jsx';

const SectionHeading = ({ index, eyebrow, title, accent }) => (
  <Reveal className="mb-10 md:mb-14">
    <p className="mb-3 font-mono text-sm text-fuchsia-300/80">
      {index} <span className="text-zinc-600">/</span> {eyebrow}
    </p>
    <h2 className="font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
      {title}
      {accent && <span className="text-gradient">{accent}</span>}
    </h2>
  </Reveal>
)

SectionHeading.propTypes = {
  index: PropTypes.string.isRequired,
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.string,
  accent: PropTypes.string,
};

export default SectionHeading
