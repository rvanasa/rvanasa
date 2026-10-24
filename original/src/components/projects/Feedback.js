import React from 'react';

import { ListGroup } from 'react-bootstrap';
import { FaGithub, FaInfinity } from 'react-icons/fa';
import Background from '../Background';
import LinkItem from '../LinkItem';
import Time from '../Time';

export default function Feedback(props) {
  return (
    <div className="bg-dark">
      <Time month="March" year="2023" />
      <Background
        img="img/projects/feedback.jpg"
        heading={
          <>
            <h2 className="display-4 text-center mt-4">Feedback Board</h2>
            <h3 className="text-center">Web3 community suggestions.</h3>
            <hr />
            <div className="container pt-5" style={{ maxWidth: '60em' }}>
              <ListGroup variant="flush">
                <LinkItem
                  url="https://dx.internetcomputer.org/"
                  icon={<FaInfinity />}
                >
                  Decentralized App
                </LinkItem>
                <LinkItem
                  url="https://github.com/dfinity/feedback"
                  icon={<FaGithub />}
                >
                  Source Code
                </LinkItem>
              </ListGroup>
            </div>
          </>
        }
      ></Background>
    </div>
  );
}
