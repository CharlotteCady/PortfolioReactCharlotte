/* Npm import */
import React from 'react';

/* Local import */
import { hexToRgb } from '../App/utils';

/* Component */
const Skills = ({skillsList, colors}) => {
	const hexToRgbColors = colors.map(color => hexToRgb(color));
	const styleBackGround = {
    backgroundColor: `rgba(${hexToRgbColors[0]}, 0.9)`,
  }

	return (
		<section className="skills">
			<div className="bg" style={styleBackGround}>
				<ul>
					{ skillsList.map(skill => <li key={skill} className='rubberBandHover'>{skill}</li> ) }
				</ul>
			</div>
		</section>
	);
}

/* Export default */
export default Skills;
