/* Npm import */
import React from 'react';

/* Local import */

/* Code */
const NavLi = ({href, onClick, content, colors}) => {

  const styleNavLiAfter = {
    backgroundColor: colors[1],
  }

  return (
    <li>
      <a href={href} onClick={onClick}>{content}
        <span className="after" style={styleNavLiAfter}></span>
      </a>
    </li>
  );
}

/* Export default */
export default NavLi;
