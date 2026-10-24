import React from 'react';
import {
  FaEnvelopeOpen,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaTwitter,
} from 'react-icons/fa';
import classNames from 'classnames';

const media = [
  {
    icon: FaGithub,
    color: 'danger',
    link: 'https://github.com/rvanasa',
    style: { opacity: 0.7 },
  },
  {
    icon: FaTwitter,
    color: 'info',
    link: 'https://twitter.com/rvandersmith',
    style: { opacity: 0.8 },
  },
  {
    icon: FaEnvelopeOpen,
    color: 'success',
    link: 'mailto:ryanvandersmith@gmail.com',
    mobileOnly: true,
  },
  {
    icon: FaLinkedin,
    color: 'primary',
    link: 'https://www.linkedin.com/in/ryan-vandersmith-b59135101/',
  },
  {
    icon: FaMedium,
    color: 'light',
    link: 'https://medium.com/@ryanvandersmith',
    style: { opacity: 0.8 },
  },
];

export default function ContactSection() {
  return (
    <div className="story-page py-4" style={{ background: '#0005' }}>
      <div className="text-center">
        <img
          style={{ width: '80%', maxWidth: 450 }}
          src={'img/profile.jpg'}
          alt=""
        />
      </div>
      <div className="text-center px-5">
        <hr />
        <h1 className="text-thin text-light py-2 mb-0">Ryan Vandersmith</h1>
        <div className="h4 text-success mb-4">
          <a
            href="mailto:ryanvandersmith@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            ryanvandersmith@gmail.com
          </a>
        </div>
        <div className="container">
          {media.map((m) => (
            <a
              key={m.link}
              className={classNames(
                `btn btn-lg px-3 py-3 mb-3 mx-2 btn-outline-${
                  m.color || 'dark'
                }`,
                m.mobileOnly && 'd-md-none',
              )}
              style={{ borderRadius: '50% !important', ...m.style }}
              href={m.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <m.icon size="1.5em" />
            </a>
          ))}
        </div>
        <hr className="mt-5" />
      </div>
    </div>
  );
}
