import React from 'react';

import Background from '../Background';
import Time from '../Time';
import {ListGroup} from 'react-bootstrap';
import LinkItem from '../LinkItem';
import {FaGithub, FaLink, FaMobileAlt} from 'react-icons/fa';

export default function EliteNavigator(props) {
    return (
        <>
            <Time month="August" year="2020"/>
            <Background img="img/projects/elite-navigator.jpg"
                        heading={<>
                        <h2 className="display-4 text-center mt-4">Elite Navigator</h2>
                        <h3 className="text-center">An exploration tool for <br className="d-md-none"/>Elite Dangerous.</h3>
                        <hr/>
                        <div className="container pt-5" style={{maxWidth: '60em'}}>
                            <ListGroup variant="flush">
                                <LinkItem
                                    url="https://ryanvandersmith.com/elite-navigator/"
                                    icon={<FaMobileAlt/>}>
                                    Mobile Webapp
                                </LinkItem>
                                <LinkItem
                                    url="https://github.com/rvanasa/elite-navigator"
                                    icon={<FaGithub/>}>
                                    Source Code
                                </LinkItem>
                                <LinkItem
                                    url="https://en.wikipedia.org/wiki/Elite_Dangerous"
                                    icon={<FaLink/>}>
                                    Elite Dangerous
                                </LinkItem>
                            </ListGroup>
                        </div>
                    </>}>
            </Background>
        </>
    );
}