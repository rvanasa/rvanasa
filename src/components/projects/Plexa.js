import React from 'react';

import Background from '../Background';
import Time from '../Time';
import {ListGroup} from 'react-bootstrap';
import LinkItem from '../LinkItem';
import {FaLinkedin, FaMobileAlt} from 'react-icons/fa';

export default function Plexa(props) {
    return (
        <>
            <Time month="October" year="2017"/>
            <Background img="img/projects/plexa.jpg"
                        heading={<>
                            <h2 className="display-4 text-center mt-4">Plexa Tech</h2>
                            <h3 className="text-center">Decentralized software consulting.</h3>
                            <hr/>
                            <div className="container pt-5">
                                <ListGroup variant="flush">
                                    <LinkItem
                                        url="https://plexatech.github.io/"
                                        icon={<FaMobileAlt/>}>
                                        Promotional Site
                                    </LinkItem>
                                </ListGroup>
                                <ListGroup variant="flush">
                                    <LinkItem
                                        url="https://www.linkedin.com/company/plexa-technologies"
                                        icon={<FaLinkedin/>}>
                                        LinkedIn Page
                                    </LinkItem>
                                </ListGroup>
                            </div>
                        </>}>
            </Background>
        </>
    );
}