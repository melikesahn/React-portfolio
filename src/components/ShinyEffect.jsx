import PropTypes from 'prop-types';
const ShinyEffect = ({left, right, top, size = 500}) => {

    const positionStyles = {
        top:`${top}px`,
        width:`${size}px`,
        height:`${size}px`,
        zIndex: -1
    }

    if (left !== undefined) {
        positionStyles.left = `${left}px`
    }

    if (right !== undefined) {
        positionStyles.right = `${right}px`
    }


  return (
    <div className='shiny-effect' style={positionStyles}></div>
  )
}

ShinyEffect.propTypes = {
    left: PropTypes.number,  // left prop'u opsiyonel ve sayı olmalı
    right: PropTypes.number, // right prop'u opsiyonel ve sayı olmalı
    top: PropTypes.number.isRequired, // top prop'u zorunlu ve sayı olmalı
    size: PropTypes.number, // size prop'u opsiyonel ve sayı olmalı
};


export default ShinyEffect