/* Npm import */
import React from 'react';


/* Local import */
import Project from './project';

/* Code */
const Projects = ( { project, onNextProject, onPreviousProject, colors } ) => (
  <section id= "projects" className="projects">
  	<Project project={project} onNextProject={onNextProject} onPreviousProject={onPreviousProject} colors={colors}/>
  </section>
);

/* Export default */
export default Projects;
