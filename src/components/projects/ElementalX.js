import React from 'react';

import Background from '../Background';
import Time from '../Time';
import { ListGroup } from 'react-bootstrap';
import LinkItem from '../LinkItem';
import { FaGithub, FaMobileAlt, FaYoutube } from 'react-icons/fa';

export default function ElementalX(props) {
  return (
    <>
      <Time month="September" year="2020" />
      <Background
        img="img/projects/elemental-x.jpg"
        heading={
          <>
            <h2 className="display-4 text-center mt-4">Elemental X</h2>
            <h3 className="text-center">A revival of carykh's Elemental 3.</h3>
            <hr />
            <div className="container pt-5" style={{ maxWidth: '60em' }}>
              <ListGroup variant="flush">
                <LinkItem
                  url="https://ryanvandersmith.com/elemental-x/"
                  icon={<FaMobileAlt />}
                >
                  Play Online
                </LinkItem>
                <LinkItem
                  url="https://github.com/rvanasa/elemental-x"
                  icon={<FaGithub />}
                >
                  Source Code
                </LinkItem>
                <LinkItem
                  url="https://www.youtube.com/watch?v=rQWwfYSUckY"
                  icon={<FaYoutube />}
                >
                  Original Game
                </LinkItem>
              </ListGroup>
            </div>
          </>
        }
      ></Background>
    </>
  );
}
