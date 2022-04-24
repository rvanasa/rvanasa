import React from 'react';

import Background from '../Background';
import Time from '../Time';
import {ListGroup} from 'react-bootstrap';
import LinkItem from '../LinkItem';
import {FaGithub, FaHome, FaMedium, FaMobileAlt} from 'react-icons/fa';

export default function Blocks(props) {
    return (
        <div className="bg-dark">
            <Time month="September" year="2021"/>
            <Background img="img/projects/blocks.jpg"
                        heading={<>
                            <h2 className="display-4 text-center mt-4">Blocks</h2>
                            <h3 className="text-center">A low-code smart contract editor.</h3>
                            <h4 className="text-center text-warning mt-4 py-2" style={{background: '#0005'}}>$25,000 DFINITY Developer Grant</h4>
                            <hr/>
                            <div className="container pt-5" style={{maxWidth: '60em'}}>
                                <ListGroup variant="flush">
                                    <LinkItem
                                        url="https://blocks-editor.github.io/"
                                        icon={<FaHome/>}>
                                        Homepage
                                    </LinkItem>
                                    <LinkItem
                                        url="https://blocks-editor.github.io/blocks/"
                                        icon={<FaMobileAlt/>}>
                                        Web Application
                                    </LinkItem>
                                    <LinkItem
                                        url="https://github.com/Blocks-Editor/blocks"
                                        icon={<FaGithub/>}>
                                        Source Code
                                    </LinkItem>
                                    <LinkItem
                                        url="https://levelup.gitconnected.com/how-we-created-blocks-an-online-drag-and-drop-smart-contract-editor-fe23eff4d933"
                                        icon={<FaMedium/>}>
                                        Design Process
                                    </LinkItem>
                                </ListGroup>
                            </div>
                        </>}>
            </Background>
        </div>
    );
}