/* Npm import */
import React from 'react';

/* Local import */
import Button from '../Elements/Button';


/* Code */
const Intro = ({onColorButton, loaded, colors}) => {
    return(
      <div className="intro">
        <h1 className="h1">Charlotte Cady</h1>
        <h2 className="h2">Front-end developer</h2>
        <Button
          href="#"
          content="Switch colors"
          className="btn btn-switch"
          onClick={onColorButton}
          colors={colors}
          disabled={!loaded}
        />
      </div>
    );
}

/* Export default */
export default Intro;
