import classNames from 'classnames';
import React, { useState } from 'react';
import { PROJECTS_IMAGE } from '../../services/imagePreloadService';
import Navigation from '../Navigation';
import Pivot from '../Pivot';
import Antibody from '../projects/Antibody';
import Blocks from '../projects/Blocks';
import ColdSpace from '../projects/ColdSpace';
import DeltaFund from '../projects/DeltaFund';
import ElementalX from '../projects/ElementalX';
import EliteNavigator from '../projects/EliteNavigator';
import FastCode from '../projects/FastCode';
import Feedback from '../projects/Feedback';
import FunQy from '../projects/FunQy';
import Fungi from '../projects/Fungi';
import FurryFriends from '../projects/FurryFriends';
import Motoko from '../projects/Motoko';
import Outstrung from '../projects/Outstrung';
import PandasGPT from '../projects/PandasGPT';
import Plexa from '../projects/Plexa';
import Polymorph from '../projects/Polymorph';
import Pure from '../projects/Pure';
import QuantumXylophone from '../projects/QuantumXylophone';
import Redcoats from '../projects/Redcoats';
import RimCities from '../projects/RimCities';
import SIO from '../projects/SIO';
import Skiing from '../projects/Skiing';
import Storytime from '../projects/Storytime';
import TimeWinder from '../projects/TimeWinder';
import Vekta from '../projects/Vekta';
import WebStar from '../projects/WebStar';

const tags = {
  favorite: 'Favorites',
  website: 'Webapps',
  competition: 'Competitions',
  game: 'Games',
  business: 'Businesses',
  research: 'Research',
  all: 'Everything',
};

const projects = [
  [PandasGPT, [tags.favorite, tags.research]],
  [Feedback, [tags.website]],
  [Motoko, [tags.favorite]],
  [Blocks, [tags.favorite, tags.website]],
  [QuantumXylophone, []],
  [ElementalX, [tags.game]],
  [EliteNavigator, [tags.website, tags.game]],
  [Antibody, [tags.research]],
  [TimeWinder, []],
  [RimCities, [tags.favorite, tags.game]],
  [ColdSpace, []],
  [Polymorph, [tags.favorite, tags.research]],
  [Vekta, [tags.game]],
  [Redcoats, [tags.game]],
  [Pure, [tags.website]],
  [FunQy, [tags.favorite, tags.research]],
  [Fungi, [tags.website, tags.research]],
  [Plexa, [tags.favorite, tags.business]],
  [Storytime, [tags.game]],
  [Skiing, [tags.favorite, tags.game]],
  [DeltaFund, [tags.website, tags.competition]],
  [FastCode, [tags.business, tags.website]],
  [SIO, [tags.favorite, tags.website, tags.competition]],
  [WebStar, [tags.favorite, tags.business, tags.website]],
  [Outstrung, [tags.competition, tags.game]],
  [FurryFriends, [tags.competition]],
];

export default function ProjectsPage() {
  let [currentTag, setCurrentTag] = useState(tags.favorite);

  return (
    <div>
      <div
        className="bg-img"
        style={{ backgroundImage: `url(${PROJECTS_IMAGE})` }}
      >
        <Pivot
          title={['Timeline', 'Portfolio']}
          name
          caret
          background={'#0003'}
          left={{ name: 'Skills', link: '/skills' }}
          right={{ name: 'Contact', link: '/contact' }}
        />
        <div className="divider bg-light" />
        <div className="text-dark" style={{ background: '#FFFE' }}>
          <div className="container-lg d-md-flex text-center flex-wrap py-2 py-md-0">
            {Object.values(tags).map((tag) => (
              <div
                key={tag}
                className={classNames(
                  `h5 flex-grow-1 clickable m-0 py-4 py-md-5`,
                  tag === currentTag && 'text-success',
                )}
                style={
                  tag === currentTag
                    ? { background: '#FFF2', fontWeight: 'bold' }
                    : {}
                }
                onClick={() => setCurrentTag(tag)}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>

      {projects.map(
        ([component, projectTags], i) =>
          (currentTag === tags.all || projectTags.includes(currentTag)) && (
            <div key={i} className="flex-grow-1 h-100">
              {React.createElement(component)}
            </div>
          ),
      )}
      <Navigation />
    </div>
  );
}
