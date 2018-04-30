import hellobank from '../assets/image/hellobank.jpg';
import battlerite from '../assets/image/battlerite.jpg';
import workup from '../assets/image/workup-job.jpg';
import cardiweb from '../assets/image/cardiweb-home.jpg';
import cdm from '../assets/image/cdm.jpg';
import bertrand from '../assets/image/portfolio-bertrand-signorelli.jpg';

const projectsList = [
	{
		id: 1,
		name: 'Battlerite Pro',
		site: '#',
		picture: battlerite,
		description: 'Battlerite Pro provides game stats to help players to improve their performance. I fully designed the website and developed the front-end.',
		techno: ['React', 'Express JS', 'MongoDB', 'Flexbox', 'Bootstrap', 'HTML 5', 'SASS']
	},
	{
		id: 2,
		name: 'Hello bank!',
		site: 'https://www.hellobank.fr/',
		picture: hellobank,
		description: 'Hello bank! is the online bank of BNP Paribas in France. I fully participated in the redesign of the website with a team of 4 great developers.',
		techno: ['JavaScript', 'Require JS', 'JQuery', 'Flexbox', 'Bootstrap', 'HTML 5', 'SASS']
	},
	{
		id: 3,
		name: 'WorkUp',
		site: 'https://www.workuper.com',
		picture: workup,
		description: 'WorkUp combines tools, websites, solutions on a single web application to help people in career transition in France. I fully designed and developed the website',
		techno: ['Ruby on Rails', 'Bootstrap', 'JQuery', 'HTML 5', 'SASS']
	},
	{
		id: 4,
		name: 'Cardiweb',
		site: 'https://www.cardiweb.com/',
		picture: cardiweb,
		description: 'Cardiweb is a parisian digital agency. I fully redesigned his website based on a custom template' ,
		techno: ['Bootstrap', 'HTML 5', 'CSS 3']
	},{
		id: 5,
		name: 'La Cité des Métiers de Paris',
		site: 'http://cacdmparis.fr/',
		picture: cdm,
		description: 'The Cité des Métiers is a place of information and advice in Paris for people looking for a job or in career transition. I fully designed and developed their website.',
		techno: ['Simple Grid', 'Grid CSS', 'HTML 5', 'SASS']
	},
	{
		id: 6,
		name: 'Bertrand\'s Portfolio',
		site: 'http://signore.be/',
		picture: bertrand,
		description: 'I fully designed and developed Bertrand\'s portfolio, based on the Divi Wordpress Plugin' ,
		techno: ['WordPress', 'Divi', 'Javascript']
	}
]

export default projectsList;
