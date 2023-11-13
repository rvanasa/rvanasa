import React from 'react';

import { ListGroup } from 'react-bootstrap';
import { FaMedium, FaPython, FaStickyNote } from 'react-icons/fa';
import Background from '../Background';
import LinkItem from '../LinkItem';
import Time from '../Time';

export default function PandasGPT(props) {
  return (
    <div className="bg-dark">
      <Time month="March" year="2023" />
      <Background
        img="img/projects/pandas-gpt.jpg"
        heading={
          <>
            <h2 className="display-4 text-center mt-4">Pandas-GPT</h2>
            <h3 className="text-center">Data science with LLMs.</h3>
            <hr />
            <div className="container pt-5" style={{ maxWidth: '60em' }}>
              <ListGroup variant="flush">
                <LinkItem
                  url="https://levelup.gitconnected.com/pandas-gpt-power-up-your-data-science-workflow-with-ai-dataframe-queries-868515d798f0"
                  icon={<FaMedium />}
                >
                  Announcement
                </LinkItem>
                <LinkItem
                  url="https://pypi.org/project/pandas-gpt/"
                  icon={<FaPython />}
                >
                  Python Package
                </LinkItem>
                <LinkItem
                  url="https://colab.research.google.com/github/rvanasa/pandas-gpt/blob/main/notebooks/pandas_gpt_demo.ipynb"
                  icon={<FaStickyNote />}
                >
                  Examples
                </LinkItem>
              </ListGroup>
            </div>
          </>
        }
      ></Background>
    </div>
  );
}
