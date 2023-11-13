import React from 'react';

import Background from '../Background';
import Time from '../Time';
import { ListGroup } from 'react-bootstrap';
import LinkItem from '../LinkItem';
import { FaGithub } from 'react-icons/fa';
import { NateCollabItem } from './items/NateCollabItem';

export default function Vekta(props) {
  return (
    <div style={{ background: 'black' }}>
      <Time month="March" year="2019" />
      <Background
        img="img/projects/vekta.jpg"
        heading={
          <>
            <h2 className="display-4 text-center mt-4">VEKTA</h2>
            <h3 className="text-center">Retro procedural space exploration.</h3>
            <hr />
            <div className="container pt-5" style={{ opacity: 0.6 }}>
              <ListGroup variant="flush">
                <LinkItem
                  url="https://github.com/rvanasa/vekta"
                  icon={<FaGithub />}
                >
                  Source Code
                </LinkItem>
                <NateCollabItem />
              </ListGroup>
            </div>
          </>
        }
      ></Background>
    </div>
  );
}
