import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import {
  FaBroadcastTower,
  FaChartPie,
  FaChild,
  FaCode,
  FaCoffee,
  FaCubes,
  FaDropbox,
  FaGithub,
  FaLanguage,
  FaMap,
  FaMobileAlt,
  FaProjectDiagram,
  FaSlack,
  FaStar,
  FaSuitcase,
  FaUsers,
} from 'react-icons/fa';
import Sticky from 'react-stickynode';
import { BABY_IMAGE, STORY_IMAGE } from '../../services/imagePreloadService';
import Navigation from '../Navigation';
import Pivot from '../Pivot';

const story = [
  {
    name: 'Childhood',
    style: 'bg-primary text-white',
    items: [
      {
        icon: FaChild,
        text: 'Designed intricate toy train systems at a very young age',
      },
      {
        icon: FaDropbox,
        text: 'Expertise in building high-fidelity cardboard box forts',
      },
      {
        icon: FaBroadcastTower,
        text: 'Family-accredited LEGO set designer and optimizer',
      },
    ],
  },
  {
    name: 'Development',
    style: 'bg-info text-white',
    items: [
      {
        icon: FaCubes,
        text: 'Became proficient in Lua in 3rd grade',
      },
      {
        icon: FaCoffee,
        text: 'Became proficient in Java in 5th grade',
      },
      {
        icon: FaLanguage,
        text: 'Quickly adopted Python, C#, JS/CSS/HTML5, Rust',
      },
    ],
  },
  {
    name: 'Career',
    style: 'bg-success text-white',
    items: [
      {
        icon: FaStar,
        text: '<b>Now</b> an R&D software engineer (programming languages)',
      },
      {
        icon: FaProjectDiagram,
        text: '<b>6 years</b> as a freelance consultant (full-stack web development)',
      },
      {
        icon: FaSuitcase,
        text: '<b>4 years</b> interning at Douglas County School District (senior level)',
      },
      {
        icon: FaMap,
        text: 'Designed ArcGIS REST services and full-stack applications',
      },
      {
        icon: FaUsers,
        text: 'Provided mentorship and guidance to intern teams',
      },
    ],
  },
  {
    name: 'Today',
    style: 'bg-dark',
    items: [
      {
        icon: FaMobileAlt,
        iconClass: 'text-success',
        text: '<b>Progressive Web App</b> development',
        footnote:
          'React, Bootstrap, Sass, Node.js, Express, Webpack, Workbox, MongoDB, PostgreSQL',
      },
      {
        icon: FaGithub,
        iconClass: 'text-muted',
        text: 'Agile & modern software engineering',
        footnote:
          'Lean development, Git, continuous integration, release management, virtualization',
      },
      {
        icon: FaChartPie,
        iconClass: 'text-info',
        text: 'Programming language tools and UX research',
        footnote: 'R&D background with entrepreneurial perspective',
      },
      {
        icon: FaCode,
        iconClass: 'text-warning',
        text: 'Modern <b>multi-paradigm</b> languages & frameworks',
        footnote:
          'Full-stack development with TypeScript, Rust, OCaml, and Python',
      },
      {
        icon: FaSlack,
        iconClass: 'text-danger',
        text: 'Communicating to <b>technical</b> & <b>business</b> audiences',
        footnote: 'Probably worth emphasizing',
      },
    ],
  },
];

export default function StoryPage() {
  return (
    <div className="bg-img" style={{ backgroundImage: `url(${STORY_IMAGE})` }}>
      <Pivot
        title={['A', 'Story']}
        name
        caret
        background={'#0003'}
        left={{ name: 'Home', link: '/' }}
        right={{ name: 'Skills', link: '/skills' }}
      />
      <div className="divider bg-success" />
      <Sticky>
        <div className="d-flex flex-column" style={{ height: '100vh' }}>
          <div className="py-4" style={{ background: '#000B' }}>
            <hr />
            <h1 className="text-center text-thin text-glow">
              Let's start from the beginning.
            </h1>
            <hr />
          </div>
          <div
            className="flex-grow-1"
            style={{
              background: `url(${BABY_IMAGE}) center 20%`,
              backgroundSize: 'cover',
            }}
          />
        </div>
      </Sticky>
      <div style={{ opacity: 0.95 }}>
        {story.map((category) => (
          <Sticky key={category.name}>
            <div
              className={`container py-5 text-center text-lg-start ${category.style}`}
            >
              <h1 className="text-thin px-4 mb-3">{category.name}</h1>
              <ListGroup variant="flush" className="noselect">
                {category.items.map((item) => (
                  <ListGroupItem key={item.text}>
                    <div className="w-100">
                      <h3 className="text-thin pt-2 d-inline">
                        <span
                          className={`my-2 my-lg-0 pe-3 mx-auto mx-lg-0 d-block d-lg-inline ${item.iconClass}`}
                        >
                          <item.icon />
                        </span>
                        <span dangerouslySetInnerHTML={{ __html: item.text }} />
                      </h3>
                      <h5 className="text-muted ms-lg-5 mt-3 mt-md-0">
                        {item.footnote}
                      </h5>
                    </div>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Sticky>
        ))}
      </div>
      {/*<ContactSection/>*/}
      <Sticky>
        <Navigation />
      </Sticky>
    </div>
  );
}
