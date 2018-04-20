/* Npm import */
import React from 'react';

/* Local import */
import { hexToRgb } from '../App/utils';
import Button from '../Elements/Button';
import HeaderTitle from '../Elements/HeaderTitle';

/* Component */
const Project = ({ project, onNextProject, onPreviousProject, colors }) => {
	const {name, picture, description, site, techno} = project;
	const hexToRgbColors = colors.map(color => hexToRgb(color));

	const styleLi = {
    background: colors[0],
  }

	const styleImg = {
		backgroundColor: `rgba(${hexToRgbColors[0]}, 0.9)`,
	}

	return (
		<div className="project">
			<a href={site} className="image transitionProject" target="_blank" style={styleImg}>
				<img src={picture} key={picture} alt={name} />
			</a>

			<div className="content">
				<HeaderTitle content='Projects' className='h3' colors={colors}/>
				<a href={site} className="title transitionProject" target="_blank">{name}</a>
				<p className="description transitionProject">{description}</p>
				<ul className="transitionProject">
				{
					techno.map(tech => <li key={tech} className="techno rubberBandHover" style={styleLi}>{tech}</li>)
				}
				</ul>
				<div className="btn-nav">
					<Button href="#" content="Previous project" className="btn btn-prev" onClick={onPreviousProject} colors={colors} disabled={false}/>
					<Button href="#" content="Next project" className="btn btn-next" onClick={onNextProject} colors={colors} disabled={false}/>
				</div>
			</div>
		</div>
	)
}

/* Export default */
export default Project;
