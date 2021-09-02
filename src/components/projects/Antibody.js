import React from 'react';

import Background from '../Background';
import Time from '../Time';
import {ListGroup} from 'react-bootstrap';
import LinkItem from '../LinkItem';
import {FaGithub, FaKaggle, FaMedium, FaMobile, FaMobileAlt, FaPlay, FaYoutube} from 'react-icons/all';

export default function Antibody(props) {
    return (
        <>
            <Time month="June" year="2020"/>
            <Background img="img/projects/antibody.jpg"
                        heading={<>
                        <h2 className="display-4 text-center mt-4">Deep-Antibody</h2>
                        <h3 className="text-center">An open-source mAb design workflow.</h3>
                        <hr/>
                        <div className="container pt-5" style={{maxWidth: '60em'}}>
                            <ListGroup variant="flush">
                                <LinkItem
                                    url="https://www.kaggle.com/rvanasa/monoclonal-antibodies"
                                    icon={<FaKaggle/>}>
                                    Kaggle Dataset
                                </LinkItem>
                                <LinkItem
                                    url="https://github.com/rvanasa/deep-antibody"
                                    icon={<FaGithub/>}>
                                    Research Notebooks
                                </LinkItem>
                                <LinkItem
                                    url="https://ryanvandersmith.medium.com/monoclonal-antibodies-explained-the-first-treatment-for-covid-19-ce8485c23da1"
                                    icon={<FaMedium/>}>
                                    Background Information
                                </LinkItem>
                            </ListGroup>
                        </div>
                    </>}>
            </Background>
        </>
    );
}