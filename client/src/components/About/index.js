/* Npm import */
import React from 'react';

/* Local import */
import HeaderTitle from '../Elements/HeaderTitle';
/* Code */
const About = ({ colors }) => {
  const today = new Date();
  const birthDate = new Date('July 4, 1987 23:15:30');
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return (
    <section id="about" className="about">
      <HeaderTitle content='About me' className='h3' colors={colors}/>
    	<div className="content">
    		<div className="col-1">
          <p>
            Hey, I’m {age} years old, from France.
            I’m a Front-end Developer who loves to combine user experiences, design and coding.
          </p>
          <p>
            My passion for web development started when I was a fundraising consultant for startups.
            I first discovered HTML and CSS when I was in charge of developing the company’s online presence.
            At that moment, I knew I wanted to become a web developer.
          </p>
          <p>
            After this incredible discovery, I quit my job, went to Le Wagon (a web developer bootcamp),
            learned Ruby On Rails, co-founded WorkUp, a non-profit organization, and developed Workup’s
            website on my own. I have also worked on several big companies’ websites like Veolia, GRDF,
            and Hello Bank! (the online bank of BNP Paribas).
          </p>
        </div>
        <div className="col-2">
          <p>
            For a bigger challenge (and sun), my partner and I have left Paris for
            Sydney to experience the freelance lifestyle. We have been working on a MERN
            (MongoDB, Express JS, React JS, Node JS) Stack project.
          </p>
          <p>
            I enjoy playing foosball (a lot !), sports, going to the beach,
            traveling around the world, and sharing a drink.
          </p>
          <p>
            If you’d like to talk about coding, foosball, French stuffs or anything else, feel free to contact me :)
          </p>
          <p>
            <svg version="1.1" className="linkedin" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 49.652 49.652">
              <g>
                <path d="M29.35,21.298c-2.125,0-3.074,1.168-3.605,1.988v-1.704h-4.002c0.052,1.128,0,12.041,0,12.041h4.002v-6.727c0-0.359,0.023-0.72,0.131-0.977c0.29-0.72,0.948-1.465,2.054-1.465c1.448,0,2.027,1.104,2.027,2.724v6.442h4.002h0.001v-6.905C33.958,23.019,31.983,21.298,29.35,21.298z M25.742,23.328h-0.025c0.008-0.014,0.02-0.027,0.025-0.041V23.328z"/><rect x="15.523" y="21.582" width="4.002" height="12.041"/>
                <path d="M24.826,0C11.137,0,0,11.137,0,24.826c0,13.688,11.137,24.826,24.826,24.826c13.688,0,24.826-11.138,24.826-24.826C49.652,11.137,38.516,0,24.826,0z M37.991,36.055c0,1.056-0.876,1.91-1.959,1.91H13.451c-1.08,0-1.957-0.854-1.957-1.91V13.211c0-1.055,0.877-1.91,1.957-1.91h22.581c1.082,0,1.959,0.856,1.959,1.91V36.055z"/>
                <path d="M17.551,15.777c-1.368,0-2.264,0.898-2.264,2.08c0,1.155,0.869,2.08,2.211,2.08h0.026c1.396,0,2.265-0.925,2.265-2.08C19.762,16.676,18.921,15.777,17.551,15.777z"/>
              </g>
            </svg>
            <a href="https://www.linkedin.com/in/charlottecady/?locale=en_US" target="_blank" rel="noopener noreferrer">My Linkedin Profile</a>
          </p>
        </div>
    	</div>
    </section>
  );
}

/* Export default */
export default About;
