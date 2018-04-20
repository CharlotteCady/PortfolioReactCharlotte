/* Npm import */
import React from 'react';
import Particles from 'react-particles-js';

/* Local import */
import Intro from './intro';

/* Code */
const Banner = ({onColorButton, loaded, colors}) => {
  const styleBannerBackGround = {
    background: colors[0],
    backgroundImage: `-webkit-linear-gradient(to right, ${colors[0]}, ${colors[1]})`,
    backgroundImage: `linear-gradient(to right, ${colors[0]}, ${colors[1]})`,
  }

  return (
    <section className="banner" style={styleBannerBackGround}>
    	<Particles className="particles" params={{
    		"particles": {
    		  "number": {
    		    "value": 100,
    		    "density": {
    		      "enable": false,
    		      "value_area": 800
    		    }
    		  },
    		  "color": {
    		    "value": "#ffffff"
    		  },
    		  "shape": {
    		    "type": "star",
    		    "stroke": {
    		      "width": 0,
    		      "color": "#000000"
    		    },
    		    "polygon": {
    		      "nb_sides": 5
    		    },
    		    "image": {
    		      "src": "http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg",
    		      "width": 100,
    		      "height": 100
    		    }
    		  },
    		  "opacity": {
    		    "value": 0.5,
    		    "random": false,
    		    "anim": {
    		      "enable": false,
    		      "speed": 1,
    		      "opacity_min": 0.1,
    		      "sync": false
    		    }
    		  },
    		  "size": {
    		    "value": 4,
    		    "random": true,
    		    "anim": {
    		      "enable": false,
    		      "speed": 40,
    		      "size_min": 0.1,
    		      "sync": false
    		    }
    		  },
    		  "line_linked": {
    		    "enable": false,
    		    "distance": 150,
    		    "color": "#ffffff",
    		    "opacity": 0.4,
    		    "width": 1
    		  },
    		  "move": {
    		    "enable": true,
    		    "speed": 2,
    		    "direction": "left",
    		    "random": false,
    		    "straight": false,
    		    "out_mode": "out",
    		    "bounce": false,
    		    "attract": {
    		      "enable": false,
    		      "rotateX": 160.3412060865523,
    		      "rotateY": 2485.28869434156
    		    }
    		  }
    		},
    		"interactivity": {
    		  "detect_on": "canvas",
    		  "events": {
    		    "onhover": {
    		      "enable": true,
    		      "mode": "grab"
    		    },
    		    "onclick": {
    		      "enable": true,
    		      "mode": "repulse"
    		    },
    		    "resize": true
    		  },
    		  "modes": {
    		    "grab": {
    		      "distance": 200,
    		      "line_linked": {
    		        "opacity": 1
    		      }
    		    },
    		    "bubble": {
    		      "distance": 400,
    		      "size": 40,
    		      "duration": 2,
    		      "opacity": 8,
    		      "speed": 3
    		    },
    		    "repulse": {
    		      "distance": 200,
    		      "duration": 0.4
    		    },
    		    "push": {
    		      "particles_nb": 4
    		    },
    		    "remove": {
    		      "particles_nb": 2
    		    }
    		  }
    		},
    		"retina_detect": true
    	}}/>
    	<Intro onColorButton={onColorButton} loaded={loaded} colors={colors}/>
    </section>
  );

}



/* Export default */
export default Banner;
