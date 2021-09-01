import React, {useState} from 'react';
import {
    FaAddressBook,
    FaAppStore,
    FaAward,
    FaBookOpen,
    FaCode,
    FaDesktop,
    FaGlobe,
    FaGraduationCap,
    FaHardHat,
    FaMedal,
    FaMobileAlt,
    FaMoneyBillAlt,
    FaQrcode,
    FaRegBuilding,
    FaRegFlag,
    FaRibbon,
    FaRunning,
    FaSchool,
    FaShoppingCart, FaWarehouse
} from 'react-icons/all';
import Skill from '../Skill';
import Pivot from '../Pivot';
import {Col, Row} from 'react-bootstrap';
import Navigation from '../Navigation';
import {Link} from 'react-router-dom';

const skills = [{
    name: 'Technologies',
    icon: FaCode,
    parts: [{
        name: 'HTML5',
        toggle: true,
        parts: [{
            name: 'Frameworks & Tools',
            parts: [{
                name: 'React'
            }, {
                name: 'AngularJS'
            }, {
                name: 'Webpack'
            }, {
                name: 'Workbox'
            }]
        }, {
            name: 'Layout & Style',
            parts: [{
                name: 'Bootstrap'
            }, {
                name: 'Material Design'
            }, {
                name: 'Sass'
            }]
        }, {
            name: 'Misc.',
            parts: [{
                name: 'TypeScript'
            }, {
                name: 'WebAssembly (Rust)'
            }, {
                name: 'WebRTC'
            }, {
                name: 'GraphQL'
            }]
        }]
    }, {
        name: 'Node.js',
        toggle: true,
        parts: [{
            name: 'Server',
            parts: [{
                name: 'Express'
            }, {
                name: 'Socket.io'
            }, {
                name: 'Passport'
            }]
        }, {
            name: 'Database',
            parts: [{
                name: 'MongoDB'
            }, {
                name: 'PostgreSQL'
            }, {
                name: 'GraphQL'
            }]
        }, {
            name: 'Integrations',
            parts: [{
                name: 'Google APIs'
            }, {
                name: 'Universal Analytics'
            }, {
                name: 'Braintree'
            }]
        }, {
            name: 'Testing',
            parts: [{
                name: 'Jest'
            }, {
                name: 'Mocha'
            }]
        }, {
            name: 'Misc.',
            parts: [{
                name: 'TensorFlow.js'
            }, {
                name: 'Lighthouse'
            }, {
                name: 'LibP2P'
            }, {
                name: 'Ethereum'
            }]
        }]
    }, {
        name: 'Python',
        toggle: true,
        parts: [{
            name: 'Deep Learning',
            parts: [{
                name: 'Models',
                parts: [{
                    name: 'Keras'
                }, {
                    name: 'TensorFlow'
                }, {
                    name: 'Transformers'
                }, {
                    name: 'GPT-2'
                }, {
                    name: 'BERT'
                }]
            }]
        }, {
            name: 'Natural Language Processing',
            parts: [{
                name: 'NLTK'
            }, {
                name: 'SpaCy'
            }, {
                name: 'NeuralCoref'
            }]
        }, {
            name: 'Platforms',
            parts: [{
                name: 'Apache Airflow'
            }, {
                name: 'Jupyter / Colab'
            }, {
                name: 'Anaconda'
            }]
        }, {
            name: 'Misc.',
            parts: [{
                name: 'Pandas'
            }, {
                name: 'Astropy'
            }, {
                name: 'Scrapy'
            }],
        }]
    }, {
        name: 'Rust',
        toggle: true,
        parts: [{
            name: 'Networking',
            parts: [{
                name: 'Tokio'
            }, {
                name: 'Serde'
            }]
        }, {
            name: 'Platforms',
            parts: [{
                name: 'WASM-Bindgen'
            }, {
                name: 'x86_64'
            }]
        }, {
            name: 'Misc.',
            parts: [{
                name: 'Nom'
            }, {
                name: 'Adapton'
            }]
        }]
    }, {
        name: 'Infrastructure',
        toggle: true,
        parts: [{
            name: 'Hosting',
            parts: [{
                name: 'AWS'
            }, {
                name: 'Google Cloud'
            }, {
                name: 'Heroku'
            }]
        }, {
            name: 'Misc.',
            parts: [{
                name: 'Cloudflare'
            }, {
                name: 'Docker'
            }, {
                name: 'Vagrant'
            }, {
                name: 'Jenkins'
            }]
        }]
    }]
}, {
    name: 'Work Experience',
    icon: FaRegBuilding,
    parts: [{
        name: 'Freelance Consulting',
        toggle: true,
        parts: [{
            name: '2017 - 2020',
            parts: [{
                name: 'Progressive Web Apps'
            }, {
                name: 'SEO & landing pages'
            }, {
                name: 'Full-stack and UX design'
            }]
        }, {
            name: '2016 - 2017',
            parts: [{
                name: 'Full-stack webapps'
            }, {
                name: 'Decentralized applications'
            }, {
                name: 'Software mentoring'
            }]
        }, {
            name: 'Highlighted Clients',
            parts: [{
                name: 'FBLA Colorado Chapter'
            }, {
                name: 'Galway Aviation'
            }]
        }]
    }, {
        name: 'University of Colorado Boulder',
        toggle: true,
        parts: [{
            name: '2018',
            parts: [{
                name: 'Language design'
            }, {
                name: 'Full-stack webapp'
            }, {
                name: 'WebAssembly (Rust)'
            }]
        }]
    }, {
        name: 'Douglas County School District',
        toggle: true,
        parts: [{
            name: 'Summers 2014-2017',
            parts: [{
                name: 'Agile / Scrum'
            }, {
                name: 'Angular 2'
            }, {
                name: 'Vue.js'
            }, {
                name: 'MySQL & SQL Server'
            }, {
                name: 'REST Integrations'
            }, {
                name: 'ArcGIS'
            }, {
                name: 'Drupal'
            }]
        }]
    }]
}, {
    name: 'Achievements',
    icon: FaMedal,
    parts: [{
        name: 'Scholarships',
        icon: FaBookOpen,
        toggle: true,
        parts: [{
            name: '2017-2022: Boettcher Scholar',
            icon: FaGlobe,
        }, {
            name: '2017: CSM PATHS Scholar',
            icon: FaHardHat,
        }, {
            name: '2017: National AP Scholar',
            icon: FaSchool,
        }]
    }, {
        name: 'Grants',
        icon: FaMoneyBillAlt,
        toggle: true,
        parts: [{
            name: '2016: Verizon App Challenge ($5,000)',
            icon: FaAppStore
        }, {
            name: '2015: SIM Sponsorship (FBLA Nationals)',
            icon: FaMoneyBillAlt,
        }]
    }, {
        name: 'Rock Canyon High School',
        icon: FaGraduationCap,
        toggle: true,
        parts: [{
            name: 'Wall of Honor (Academics)',
            icon: FaWarehouse
        }, {
            name: 'Wall of Honor (Activities)',
            icon: FaWarehouse
        }, {
            name: 'Highest Academic Honors',
            icon: FaRibbon
        }, {
            name: 'Outstanding Technology Student 2013-2014',
            icon: FaQrcode
        },]
    }, {
        name: 'Future Business Leaders of America',
        icon: FaRegFlag,
        toggle: true,
        parts: [{
            name: '2017 FBLA State Conference',
            icon: FaMobileAlt,
            parts: [{
                name: '1st place: Mobile App Development'
            }, {
                name: '1st place: Cyber Security'
            }]
        }, {
            name: '2016 Verizon App Challenge',
            icon: FaAward,
            parts: [{
                name: 'Best in Region (U.S. West)'
            }, {
                name: 'Best in State (Colorado)'
            }]
        }, {
            name: '2016 FBLA State Conference',
            icon: FaMobileAlt,
            parts: [{
                name: '2nd place: Game & Simulation Design'
            }]
        }, {
            name: '2015 FBLA National Conference',
            icon: FaDesktop,
            parts: [{
                name: 'Top 10: Desktop App Development'
            }]
        }, {
            name: '2015 FBLA State Conference',
            icon: FaDesktop,
            parts: [{
                name: '1st place: Desktop App Development'
            }]
        }]
    }, {
        name: 'Misc.',
        icon: FaAddressBook,
        toggle: true,
        parts: [{
            name: '2013: Second Degree Black Belt',
            icon: FaRunning
        }]
    }]
}];

export default function SkillsPage(props) {
    let [selected, setSelected] = useState(new Set());

    function onToggle(tree, toggled) {
        selected = new Set(selected);
        toggled ? selected.add(tree) : selected.delete(tree);
        setSelected(selected);
    }

    return (
        <div className="bg-img" style={{backgroundImage: 'url(img/city.jpg)'}}>
            <Pivot title={['Skills', '&', 'Achievements']} name caret
                   left={{name: 'Story', link: '/story'}} right={{name: 'Projects', link: '/projects'}}/>
            <div className="divider bg-warning"/>
            <div style={{background: '#181818F5'}}>
                <Row>
                    <Col md={3}>

                    </Col>
                    <Col md={6}>
                        <div className="pt-5 pb-4">
                            <Skill tree={skills} onToggle={onToggle}/>
                        </div>
                    </Col>
                    <Col md={3}>

                    </Col>
                </Row>
                <Navigation/>
            </div>
            <div className={`position-fixed clickable-subtle skill-checkout ${selected.size ? 'enabled' : ''}`}
                 style={{right: 0, bottom: 0}}>
                <Link to="/contact">
                    <div className="p-4 bg-info text-white rounded-left" style={{opacity: .9}}>
                        <h5 className="mb-0">
                            <FaShoppingCart className="mr-3 mb-1 small"/>
                            Proceed to Checkout
                        </h5>
                    </div>
                </Link>
            </div>
        </div>
    );
};
