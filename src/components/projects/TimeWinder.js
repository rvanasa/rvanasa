import React from 'react';

import Background from '../Background';
import Time from '../Time';
import { ListGroup } from 'react-bootstrap';
import LinkItem from '../LinkItem';
import { FaGithub, FaPlay } from 'react-icons/fa';

export default function TimeWinder(props) {
  return (
    <>
      <Time month="May" year="2020" />
      <Background
        img="img/projects/time-winder.jpg"
        heading={
          <>
            <h2 className="display-4 text-center mt-4">The Time-Winder</h2>
            <h3 className="text-center">A wacky abstract time puzzle.</h3>
            <hr />
            <div className="container pt-5" style={{ maxWidth: '60em' }}>
              <ListGroup variant="flush">
                <LinkItem
                  url="https://ryanvandersmith.com/time-winder/"
                  icon={<FaPlay />}
                >
                  Play Online
                </LinkItem>
                <LinkItem
                  url="https://github.com/rvanasa/time-winder"
                  icon={<FaGithub />}
                >
                  Source Code
                </LinkItem>
              </ListGroup>
            </div>
          </>
        }
      ></Background>
    </>
  );
}
