/* Npm import */
import React from 'react';
import Particles from 'react-particles-js';

/* Local import */
import Form from './form'
import HeaderTitle from '../Elements/HeaderTitle';

/* Code */
const Contact = ({colors}) => {
	const styleBackGround = {
		background: colors[0],
	}
	return (
		<section id="contact" className="contact" style={styleBackGround}>
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
							"speed": 3.1565905665290903,
							"direction": "top-left",
							"random": false,
							"straight": false,
							"out_mode": "out",
							"bounce": false,
							"attract": {
								"enable": false,
								"rotateX": 600,
								"rotateY": 1200
							}
						}
					},
					"interactivity": {
						"detect_on": "canvas",
						"events": {
							"onhover": {
								"enable": true,
								"mode": "repulse"
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
								"distance": 109.63042366068159,
								"size": 12.181158184520177,
								"duration": 2,
								"opacity": 0.3329516570435515,
								"speed": 3
							},
							"repulse": {
								"distance": 105.57003759917487,
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
				}}
			/>
			<div className="contact-block">
				<HeaderTitle content='Contact' className='h3' colors={colors}/>
				<p className="content">
					Hey, <br/>If you’d like to talk about coding, foosball,
					<br/>French stuffs or anything else, feel free to contact me :)
				</p>
				<Form colors={colors}/>
			</div>
		</section>
	);
};

/* Export default */
export default Contact;
