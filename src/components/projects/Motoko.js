import React from 'react';

import { ListGroup } from 'react-bootstrap';
import {
  FaAlignLeft,
  FaCode,
  FaLightbulb,
  FaNodeJs,
  FaPlug,
  FaRecycle
} from 'react-icons/fa';
import Background from '../Background';
import LinkItem from '../LinkItem';
import Time from '../Time';

export default function Motoko(props) {
  return (
    <div className="bg-dark">
      <Time month="August" year="2022" />
      <Background
        img="img/projects/motoko.jpg"
        heading={
          <>
            <h2 className="display-4 text-center mt-4">Motoko</h2>
            <h3 className="text-center">
              Developer tools for a
              <br />
              modern smart contract language.
            </h3>
            <h4
              className="text-center text-warning mt-4 py-2"
              style={{ background: '#0005' }}
            >
              Over 40,000 VS Code installations
            </h4>
            <hr />
            <div className="container pt-5" style={{ maxWidth: '60em' }}>
              <ListGroup variant="flush">
                <LinkItem
                  url="https://github.com/dfinity/vscode-motoko#readme"
                  icon={<FaPlug />}
                >
                  VS Code Extension
                </LinkItem>
                <LinkItem
                  url="https://medium.com/dfinity/announcing-the-motoko-dev-server-live-reloading-for-web3-dapps-20363088afb4"
                  icon={<FaRecycle />}
                >
                  Live-Reload Server
                </LinkItem>
                <LinkItem
                  url="https://github.com/dfinity/prettier-plugin-motoko#readme"
                  icon={<FaAlignLeft />}
                >
                  Formatter
                </LinkItem>
                {/* <LinkItem
                  url="https://levelup.gitconnected.com/how-we-created-blocks-an-online-drag-and-drop-smart-contract-editor-fe23eff4d933"
                  icon={<FaProjectDiagram />}
                >
                  Low-Code Editor
                </LinkItem> */}
                <LinkItem url="https://embed.motoko.org/" icon={<FaCode />}>
                  Embed Service
                </LinkItem>
                <LinkItem
                  url="https://github.com/rvanasa/vite-react-motoko#readme"
                  icon={<FaLightbulb />}
                >
                  Starter Project
                </LinkItem>
                <LinkItem
                  url="https://github.com/dfinity/node-motoko#readme"
                  icon={<FaNodeJs />}
                >
                  NPM Package
                </LinkItem>
              </ListGroup>
            </div>
          </>
        }
      ></Background>
    </div>
  );
}
