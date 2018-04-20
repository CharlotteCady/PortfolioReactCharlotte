/* Npm import */
import React from 'react';

/* Local import */

/* Code */
const Button = ({href, content, onClick, className, colors, disabled}) => {
  const styleButtonSwitch = {
    borderColor: 'white',
  }

  const styleButtonProject = {
    borderColor: colors[1],
  }

  const styleButtonBefore = {
    backgroundColor: colors[1],
  }

  const styleButton = (className === 'btn btn-switch') ? styleButtonSwitch : styleButtonProject;
  
  return (
    <button href={href} className={className} onClick={onClick} style={styleButton} disabled={disabled}>{content}
      <span className="btn-before" style={styleButtonBefore}></span>
    </button>
  );
}

/* Export default */
export default Button;
