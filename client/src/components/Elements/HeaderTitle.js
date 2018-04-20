/* Npm import */
import React from 'react';

/* Local import */

/* Code */
const HeaderTitle = ({content, className, colors}) => {

  const styleHeaderTitleBefore = {
    backgroundColor: colors[1],
  }

  return (
    <h3 className={className}>{content}
      <span className="before" style={styleHeaderTitleBefore}></span>
    </h3>
  );
}

/* Export default */
export default HeaderTitle;
