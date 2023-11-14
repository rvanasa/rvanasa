import React, { useState } from 'react';
import {
  FaAddressBook,
  FaAppStore,
  FaAward,
  FaBookOpen,
  FaBoxes,
  FaBus,
  FaClipboard,
  FaCode,
  FaCubes,
  FaDesktop,
  FaGlobe,
  FaGraduationCap,
  FaHardHat,
  FaHtml5,
  FaInfinity,
  FaMedal,
  FaMobileAlt,
  FaMoneyBillAlt,
  FaNodeJs,
  FaPlayCircle,
  FaPython,
  FaQrcode,
  FaRegBuilding,
  FaRegFlag,
  FaRibbon,
  FaRunning,
  FaRust,
  FaSchool,
  FaShoppingCart,
  FaTrophy,
  FaUniversity,
  FaUserShield,
  FaWarehouse,
} from 'react-icons/fa';
import Skill from '../Skill';
import Pivot from '../Pivot';
import { Col, Row } from 'react-bootstrap';
import Navigation from '../Navigation';
import { Link } from 'react-router-dom';
import { SKILLS_IMAGE } from '../../services/imagePreloadService';

const skills = [
  {
    name: 'Technologies',
    icon: FaCode,
    parts: [
      {
        name: 'HTML5',
        icon: FaHtml5,
        toggle: true,
        parts: [
          {
            name: 'Frameworks & Tools',
            parts: [
              {
                name: 'Vite',
              },
              {
                name: 'React',
              },
              {
                name: 'AngularJS',
              },
              {
                name: 'Workbox',
              },
            ],
          },
          {
            name: 'Layout & Style',
            parts: [
              {
                name: 'Tailwind',
              },
              {
                name: 'Bootstrap',
              },
              {
                name: 'Emotion / Twin.macro',
              },
              {
                name: 'Styled-Components',
              },
              {
                name: 'Sass',
              },
            ],
          },
          {
            name: 'Misc.',
            parts: [
              {
                name: 'TypeScript',
              },
              {
                name: 'WebAssembly (Rust, Motoko)',
              },
              {
                name: 'GraphQL',
              },
              {
                name: 'WebRTC',
              },
            ],
          },
        ],
      },
      {
        name: 'Node.js',
        icon: FaNodeJs,
        toggle: true,
        parts: [
          {
            name: 'Server',
            parts: [
              {
                name: 'Express',
              },
              {
                name: 'Webpack',
              },
              {
                name: 'Socket.io',
              },
              {
                name: 'Passport',
              },
            ],
          },
          {
            name: 'Database',
            parts: [
              {
                name: 'MongoDB',
              },
              {
                name: 'PostgreSQL',
              },
              {
                name: 'GraphQL',
              },
            ],
          },
          {
            name: 'Integrations',
            parts: [
              {
                name: 'Google Cloud APIs',
              },
              {
                name: 'Google Analytics',
              },
              {
                name: 'Stripe',
              },
              {
                name: 'Braintree',
              },
            ],
          },
          {
            name: 'Testing',
            parts: [
              {
                name: 'Jest',
              },
              {
                name: 'Cypress',
              },
            ],
          },
          {
            name: 'Misc.',
            parts: [
              {
                name: 'TensorFlow.js',
              },
              {
                name: 'LibP2P',
              },
              {
                name: 'Ethereum Web3',
              },
            ],
          },
        ],
      },
      {
        name: 'Python',
        icon: FaPython,
        toggle: true,
        parts: [
          {
            name: 'High-Performance',
            parts: [
              {
                name: 'NumPy / SciPy',
              },
              {
                name: 'Pandas / RAPIDS',
              },
              {
                name: 'JAX / Numba',
              },
            ],
          },
          {
            name: 'Visualization',
            parts: [
              {
                name: 'Seaborn',
              },
              {
                name: 'Altair',
              },
              {
                name: 'Folium',
              },
            ],
          },
          {
            name: 'Environments',
            parts: [
              {
                name: 'Airflow',
              },
              {
                name: 'Streamlit',
              },
              {
                name: 'Jupyter',
              },
            ],
          },
          {
            name: 'AI & Natural Language',
            parts: [
              {
                name: 'Large language models (ChatGPT, Llama 2)',
              },
              {
                name: 'Sentence Transformers',
              },
              {
                name: 'NLTK',
              },
              {
                name: 'SpaCy',
              },
              {
                name: 'Flair',
              },
            ],
          },
          {
            name: 'ML & Data Science',
            toggle: true,
            parts: [
              {
                name: 'PyCaret',
              },
              {
                name: 'Scikit-Learn',
              },
              {
                name: 'Keras',
              },
              {
                name: 'PyTorch',
              },
              {
                name: 'Bambi',
              },
            ],
          },
          {
            name: 'Natural Sciences',
            toggle: true,
            parts: [
              {
                name: 'SHARPpy',
              },
              {
                name: 'MetPy',
              },
              {
                name: 'Astropy',
              },
              {
                name: 'Lightkurve',
              },
              {
                name: 'Biopython',
              },
            ],
          },
          {
            name: 'Misc.',
            toggle: true,
            parts: [
              {
                name: 'Scrapy',
              },
              {
                name: 'Flask',
              },
            ],
          },
        ],
      },
      {
        name: 'Rust',
        icon: FaRust,
        toggle: true,
        parts: [
          {
            name: 'Networking',
            parts: [
              {
                name: 'Tokio',
              },
              {
                name: 'Serde',
              },
            ],
          },
          {
            name: 'Platforms',
            parts: [
              {
                name: 'WebAssembly',
              },
              {
                name: 'x86_64',
              },
            ],
          },
          {
            name: 'Misc.',
            parts: [
              {
                name: 'Nom',
              },
              {
                name: 'Adapton',
              },
            ],
          },
        ],
      },
      {
        name: 'Infrastructure',
        icon: FaBoxes,
        toggle: true,
        parts: [
          {
            name: 'Deployment',
            parts: [
              {
                name: 'AWS Lambda / Cloud Functions',
              },
              {
                name: 'GCP Compute Engine',
              },
              {
                name: 'Heroku',
              },
            ],
          },
          {
            name: 'CI / CD',
            parts: [
              {
                name: 'Jenkins',
              },
              {
                name: 'Chef',
              },
              {
                name: 'GitHub Actions',
              },
            ],
          },
          {
            name: 'Misc.',
            parts: [
              {
                name: 'Cloudflare',
              },
              {
                name: 'Docker',
              },
              {
                name: 'Vagrant',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Work Experience',
    icon: FaRegBuilding,
    parts: [
      {
        name: 'DFINITY Foundation',
        icon: FaInfinity,
        toggle: true,
        parts: [
          {
            name: 'Lead Engineer',
            parts: [
              {
                name: 'Motoko programming language tools',
                toggle: true,
                parts: [
                  {
                    name: 'VS Code extension',
                  },
                  {
                    name: 'Formatter',
                  },
                  {
                    name: 'Embed service',
                  },
                  {
                    name: 'Live-reload dev server',
                  },
                  {
                    name: 'Unit testing system',
                  },
                  {
                    name: 'Documentation generator',
                  },
                  {
                    name: 'Node.js and browser integrations',
                  },
                ],
              },
              {
                name: 'Ethereum blockchain integration',
              },
              {
                name: 'Developer feedback board (frontend)',
              },
              {
                name: 'AI compute marketplace (MVP frontend)',
              },
            ],
          },
          {
            name: 'Major Contributor',
            parts: [
              {
                name: 'Motoko: online compiler playground',
              },
              {
                name: 'Generative UX research',
              },
              {
                name: 'Community developer grant mentoring',
              },
            ],
          },
        ],
      },
      {
        name: 'Freelance Consulting',
        icon: FaClipboard,
        toggle: true,
        parts: [
          {
            name: '2021 - 2022',
            parts: [
              {
                name: 'Low-code platforms',
              },
              {
                name: 'Data engineering pipelines',
              },
            ],
          },
          {
            name: '2018 - 2020',
            parts: [
              {
                name: 'Progressive Web Apps',
              },
              {
                name: 'SEO & landing pages',
              },
              {
                name: 'Full-stack and UX design',
              },
            ],
          },
          {
            name: '2016 - 2017',
            parts: [
              {
                name: 'Full-stack webapps',
              },
              {
                name: 'Decentralized applications',
              },
              {
                name: 'Software mentoring',
              },
            ],
          },
          {
            name: 'Highlighted Clients',
            parts: [
              {
                name: 'DFINITY Foundation',
              },
              {
                name: 'FBLA Colorado',
              },
              {
                name: 'Galway Aviation',
              },
            ],
          },
        ],
      },
      {
        name: 'University of Colorado Boulder',
        toggle: true,
        icon: FaUniversity,
        parts: [
          {
            name: '2018',
            parts: [
              {
                name: 'Research w/ Dr. Matthew Hammer',
              },
              {
                name: 'Adapton (incremental computing)',
              },
              {
                name: 'Language compiler design',
              },
              {
                name: 'Full-stack web application',
              },
              {
                name: 'WebAssembly (Rust)',
              },
            ],
          },
        ],
      },
      {
        name: 'Douglas County School District',
        toggle: true,
        icon: FaBus,
        parts: [
          {
            name: 'Summers 2014-2017',
            parts: [
              {
                name: 'Agile, Scrum',
              },
              {
                name: 'Angular',
              },
              {
                name: 'Vue',
              },
              {
                name: 'MySQL & SQL Server',
              },
              {
                name: 'REST Integrations',
              },
              {
                name: 'ArcGIS',
              },
              {
                name: 'Drupal',
              },
              {
                name: 'Vagrant',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Achievements',
    icon: FaMedal,
    parts: [
      {
        name: 'Scholarships',
        icon: FaBookOpen,
        toggle: true,
        parts: [
          {
            name: '2017-2022: Boettcher Scholar',
            icon: FaGlobe,
          },
          {
            name: '2017: CSM PATHS Scholar',
            icon: FaHardHat,
          },
          {
            name: '2017: National AP Scholar',
            icon: FaSchool,
          },
        ],
      },
      {
        name: 'Grants',
        icon: FaMoneyBillAlt,
        toggle: true,
        parts: [
          {
            name: '2021: DFINITY Developer Grant ($25,000)',
            icon: FaCubes,
          },
          {
            name: '2016: Verizon App Challenge ($5,000)',
            icon: FaAppStore,
          },
          {
            name: '2015: SIM Sponsorship (FBLA Nationals)',
            icon: FaMoneyBillAlt,
          },
        ],
      },
      {
        name: 'High School',
        icon: FaGraduationCap,
        toggle: true,
        parts: [
          {
            name: 'Wall of Honor (Academics)',
            icon: FaWarehouse,
          },
          {
            name: 'Wall of Honor (Activities)',
            icon: FaWarehouse,
          },
          {
            name: 'Highest Academic Honors',
            icon: FaRibbon,
          },
          {
            name: 'Outstanding Technology Student 2013-2014',
            icon: FaQrcode,
          },
          {
            name: 'Future Business Leaders of America',
            icon: FaRegFlag,
            parts: [
              {
                name: '2017 FBLA State Conference',
                icon: FaMedal,
                parts: [
                  {
                    name: '1st place: Mobile App Development',
                    icon: FaMobileAlt,
                  },
                  {
                    name: '1st place: Cyber Security',
                    icon: FaUserShield,
                  },
                ],
              },
              {
                name: '2016 FBLA State Conference',
                icon: FaMedal,
                parts: [
                  {
                    name: '2nd place: Game & Simulation Design',
                    icon: FaPlayCircle,
                  },
                ],
              },
              {
                name: '2015 FBLA National Conference',
                icon: FaTrophy,
                parts: [
                  {
                    name: 'Top 10: Desktop App Development',
                    icon: FaDesktop,
                  },
                ],
              },
              {
                name: '2015 FBLA State Conference',
                icon: FaMedal,
                parts: [
                  {
                    name: '1st place: Desktop App Development',
                    icon: FaDesktop,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Misc.',
        icon: FaAddressBook,
        toggle: true,
        parts: [
          {
            name: '2016: Verizon App Challenge',
            icon: FaAward,
            parts: [
              {
                name: 'Best in State (Colorado)',
              },
              {
                name: 'Best in Region (U.S. West)',
              },
              {
                name: 'National Finalist',
              },
            ],
          },
          {
            name: '2013: Second Degree Black Belt',
            icon: FaRunning,
          },
        ],
      },
    ],
  },
];

export default function SkillsPage(props) {
  let [selected, setSelected] = useState(new Set());

  function onToggle(tree, toggled) {
    selected = new Set(selected);
    toggled ? selected.add(tree) : selected.delete(tree);
    setSelected(selected);
  }

  return (
    <div className="bg-img" style={{ backgroundImage: `url(${SKILLS_IMAGE})` }}>
      <Pivot
        title={['Skills', '&', 'Achievements']}
        name
        caret
        left={{ name: 'Story', link: '/story' }}
        right={{ name: 'Projects', link: '/projects' }}
      />
      <div className="divider bg-warning" />
      <div style={{ background: '#181818F5' }}>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <div className="pt-5 pb-4">
              <Skill tree={skills} onToggle={onToggle} />
            </div>
          </Col>
          <Col md={3}></Col>
        </Row>
        <Navigation />
      </div>
      <div
        className={`position-fixed clickable-subtle skill-checkout ${
          selected.size ? 'enabled' : ''
        }`}
        style={{ right: 0, bottom: 0 }}
      >
        <Link to="/contact">
          <div
            className="p-4 bg-info text-white rounded-start"
            style={{ opacity: 0.9 }}
          >
            <h5 className="mb-0">
              <FaShoppingCart className="me-3 mb-1 small" />
              Proceed to Checkout
            </h5>
          </div>
        </Link>
      </div>
    </div>
  );
}
