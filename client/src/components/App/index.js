/* Npm import */
import React from 'react';
import axios from 'axios';

/* Local import */
import '../../assets/js/polyfill.js';
import Nav from '../Nav';
import Banner from '../Banner';
import About from '../About';
import Skills from '../Skills';
import skillsList from '../../data/skills-list.js';
import Projects from '../Projects';
import projectsList from '../../data/projects-list.js';
import Contact from '../Contact';
import { AnimPreviousProject, AnimNextProject } from './anim';

/* Code */

/* Component */
class App extends React.Component {
	state = {
		project: projectsList[0],
		loaded: true,
		colors: ['#17438a', '#70235d'],
		displayNavBackground: false,
	}

	componentWillMount() {
		// Avant le render
		// Effectue ici des actions avant le 1er render
		// à la fin de cette action on fait un setState qui va faire un nouveau render

		projectsList.map((item) => {
      const img = document.createElement('img');
      return img.src = item.picture; // Assigning the img src immediately requests the image
    });

	}
	componentDidMount() {
  	window.addEventListener('scroll', this.handleScroll);
	};

	componentWillUnmount() {
	  window.removeEventListener('scroll', this.handleScroll);
	};

	handleScroll = (event) =>  {
		const scrollTopPosition = document.documentElement.scrollTop;
		if (scrollTopPosition > 0) {
			return this.setState({ displayNavBackground: true });
		} else {
			return this.setState({ displayNavBackground: false });
		}
	};

	onColorButton = () => {
		this.setState({
			loaded: false
		});
		axios
			.get('/colors')
			.then((response) => {
				const colors = response.data[0].colors.map(color => '#' + color);
				this.setState({
					colors,
					loaded: true
				});
			});

	}

	onPreviousProject = (event) => {
		event.preventDefault();

		const currentProject = this.state.project;
		const findPreviousProject = (project) => {
			const previousId = currentProject.id - 1;
			if (previousId < 1) {
				return project.id === (projectsList.length);

			} else {
				return project.id === previousId;
			}
		}
		const previousProject = projectsList.find(findPreviousProject);
		this.setState({project: previousProject});

		AnimPreviousProject(".transitionProject");
	}

	onNextProject = (event) => {
		event.preventDefault();

		const currentProject = this.state.project;
		const findNextProject = (project) => {
			const nextId = currentProject.id + 1;
			if (nextId > projectsList.length) {
				return project.id === 1;
			} else {
				return project.id === nextId;
			}
		}
		const nextProject = projectsList.find(findNextProject);
		this.setState({project: nextProject});

		AnimNextProject(".transitionProject");
	}

	render() {
		// c'est de la destructuration
		// Equivalent à : const project = this.state.project;
		const {project, loaded, colors, displayNavBackground} = this.state;

		return (
			<div id="app">
				<Nav colors={colors} displayNavBackground={displayNavBackground}/>
				<Banner onColorButton={this.onColorButton} loaded={loaded} colors={colors}/>
				<About colors={colors} />
				<Skills skillsList={skillsList} colors={colors}/>
				<Projects project={project} onNextProject={this.onNextProject} onPreviousProject={this.onPreviousProject} colors={colors}/>
				<Contact colors={colors}/>
			</div>
		);
	}
}


/* Export default */
export default App;
