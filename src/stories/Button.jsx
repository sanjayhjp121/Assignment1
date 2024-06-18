import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
const Button = ({ primary, backgroundColor, size, label, onClick, ...props }) => {
  const mode = primary ? 'bg-blue-500 text-white' : 'bg-transparent text-gray-700 border border-gray-300 shadow-inset';
  const sizeClass = size === 'small' ? 'py-2 px-4 text-sm' : size === 'large' ? 'py-3 px-6 text-lg' : 'py-2 px-5 text-base';
  
  return (
    <button
      type="button"
      className={`storybook-button ${sizeClass} ${mode}`}
      style={backgroundColor ? { backgroundColor } : null}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};

export default Button;