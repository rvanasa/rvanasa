import React from 'react';

import Background from '../Background';
import Time from '../Time';
import {ListGroup} from 'react-bootstrap';
import LinkItem from '../LinkItem';
import {FaGithub, FaWordpressSimple} from 'react-icons/all';

export default function QuantumXylophone(props) {
    return (
        <>
            <Time month="December" year="2020"/>
            <Background img="img/projects/quantum-xylophone.jpg"
                        heading={<>
                        <h2 className="display-4 text-center mt-4">Quantum Xylophone</h2>
                        <h3 className="text-center">A musical quantum computer.</h3>
                        <hr/>
                        <div className="container pt-5" style={{maxWidth: '60em'}}>
                            <ListGroup variant="flush">
                                <LinkItem
                                    url="https://ryanvandersmith.wordpress.com/2020/12/12/atls-3300-quantum-xylophone/"
                                    icon={<FaWordpressSimple/>}>
                                    Blog Post
                                </LinkItem>
                                <LinkItem
                                    url="https://github.com/rvanasa/quantum-xylophone"
                                    icon={<FaGithub/>}>
                                    Source Code
                                </LinkItem>
                            </ListGroup>
                        </div>
                    </>}>
            </Background>
        </>
    );
}