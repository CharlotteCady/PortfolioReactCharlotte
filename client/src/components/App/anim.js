import { TweenLite } from 'gsap';
import { TimelineLite } from 'gsap';

export function AnimPreviousProject(element) {
	var tlPreviousProject = new TimelineLite();
	tlPreviousProject.add( TweenLite.from(element, 1, {ease: 'Back.easeOut.config(1.2)', opacity:0, x:-1000}) );
	tlPreviousProject.add( TweenLite.to(element, 3, {opacity:1, x:0}) );
}

export function AnimNextProject(element) {
	var tlNextProject = new TimelineLite();
	tlNextProject.add( TweenLite.from(element, 1, {ease: 'Back.easeOut.config(1.2)', opacity:0, x:1000}) );
	tlNextProject.add( TweenLite.to(element, 3, {opacity:1, x:0}) );
}
