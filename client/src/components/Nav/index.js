/* Npm import */
import React from 'react';
import { TweenMax } from 'gsap';
import 'gsap/ScrollToPlugin';


/* Local import */
import NavLi from '../Elements/NavLi';

/* Component */
class Nav extends React.Component {

	onClickMenu = (evt) => {
		evt.preventDefault();
		const href = evt.target.getAttribute('href');
		const navHeight = document.querySelector('.nav').offsetHeight;

		TweenMax.to(window, 1, {
	        scrollTo:{y:href, offsetY:navHeight},
	        ease:'Power3.easeOut'
	    });
	}

	render() {
		const { colors, displayNavBackground } = this.props;
		const displayNavOnScroll = displayNavBackground ? 'nav scrolled' : 'nav';

		return (
		    <nav className={displayNavOnScroll}>
			  	<ul>
						<NavLi href="#about" onClick={this.onClickMenu} content="About me" colors={colors}/>
						<NavLi href="#projects" onClick={this.onClickMenu} content="Projects" colors={colors}/>
						<NavLi href="#contact" onClick={this.onClickMenu} content="Contact" colors={colors}/>
			  	</ul>
		    </nav>
		);
	}
}

/* Export default */
export default Nav;
