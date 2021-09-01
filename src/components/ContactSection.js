import React from 'react';
import {FaEnvelopeOpen, FaGithub, FaLinkedin, FaMedium, FaStackOverflow, FaTwitter} from 'react-icons/all';

const media = [{
    icon: FaGithub,
    color: 'danger',
    link: 'https://github.com/rvanasa',
    style: {opacity: .7},
}, {
    icon: FaTwitter,
    color: 'info',
    link: 'https://twitter.com/rvandersmith',
    style: {opacity: .8},
}, {
    icon: FaEnvelopeOpen,
    color: 'success',
    link: 'mailto:ryanvandersmith@gmail.com',
}, {
    icon: FaLinkedin,
    color: 'primary',
    link: 'https://www.linkedin.com/in/ryan-vandersmith-b59135101/',
}, {
    icon: FaMedium,
    color: 'light',
    link: 'https://medium.com/@ryanvandersmith',
    style: {opacity: .8},
}];

export default function ContactSection() {
    return (
        <div className="story-page py-4" style={{background: '#0005'}}>
            <div className="text-center">
                <img style={{width: '80%', maxWidth: '450px'}} src={'img/profile.jpg'} alt=""/>
            </div>
            <div className="text-center px-5">
                <hr/>
                <h1 className="text-thin text-light py-2">Ryan Vandersmith</h1>
                <div className="container">
                    {media.map(m => (
                        <a key={m.link}
                           className={`btn btn-lg px-3 py-3 mb-3 mx-2 btn-outline-${m.color || 'dark'} text-${m.color || 'dark'}`}
                           style={{borderRadius: '50% !important', ...m.style}}
                           href={m.link}
                           target="_blank"
						   rel="noopener noreferrer">
                            <m.icon size="1.5em"/>
                        </a>
                    ))}
                </div>
                <hr className="mt-5"/>
            </div>
        </div>
    );
};
