import React, {useState} from 'react';
import ColdSpace from '../projects/ColdSpace';
import Polymorph from '../projects/Polymorph';
import RimCities from '../projects/RimCities';
import Vekta from '../projects/Vekta';
import Pure from '../projects/Pure';
import FunQy from '../projects/FunQy';
import Storytime from '../projects/Storytime';
import Skiing from '../projects/Skiing';
import Redcoats from '../projects/Redcoats';
import SIO from '../projects/SIO';
import FastCode from '../projects/FastCode';
import Outstrung from '../projects/Outstrung';
import DeltaFund from '../projects/DeltaFund';
import FurryFriends from '../projects/FurryFriends';
import Pivot from '../Pivot';
import WebStar from '../projects/WebStar';
import Plexa from '../projects/Plexa';
import Fungi from '../projects/Fungi';
import Navigation from '../Navigation';

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
    [RimCities, [tags.favorite, tags.game]],
    [ColdSpace, []],
    [Polymorph, [tags.favorite, tags.research]],
    [Vekta, [tags.game]],
    [Redcoats, [tags.favorite, tags.game]],
    [Pure, [tags.website]],
    [FunQy, [tags.favorite, tags.research]],
    [Fungi, [tags.favorite, tags.competition, tags.research]],
    [Plexa, [tags.favorite, tags.business]],
    [Storytime, [tags.game]],
    [Skiing, [tags.favorite, tags.game]],
    [DeltaFund, [tags.website, tags.competition]],
    [FastCode, [tags.business, tags.website]],
    [SIO, [tags.favorite, tags.website, tags.competition]],
    [WebStar, [tags.favorite, tags.business, tags.website]],
    [Outstrung, [tags.competition, tags.game]],
    [FurryFriends, [tags.favorite, tags.competition]],
];

export default function ProjectsPage() {
    let [currentTag, setCurrentTag] = useState(tags.favorite);

    return (
        <div>
            <div className="bg-img" style={{backgroundImage: 'url(img/abstract.jpg)'}}>
                <Pivot title={['Timeline', 'Portfolio']} name caret background={'#0003'}
                       left={{name: 'Skills', link: '/skills'}} right={{name: 'Contact', link: '/contact'}}/>
                <div className="divider bg-light"/>
                <div style={{background: '#111E'}}>
                    <div className="container-lg d-md-flex text-center flex-wrap">
                        {Object.values(tags).map((tag => (
                            <div key={tag}
                                 className={`h5 flex-grow-1 clickable m-0 py-4 py-md-5 ${tag === currentTag ? 'text-success font-weight-bold' : ''}`}
                                 style={tag === currentTag ? {background: '#0002'} : {}}
                                 onClick={() => setCurrentTag(tag)}>
                                {tag}
                            </div>
                        )))}
                    </div>
                </div>
            </div>

            {projects.map(([component, projectTags], i) => (currentTag === tags.all || projectTags.includes(currentTag)) && (
                <div key={i} className="flex-grow-1 h-100">{React.createElement(component)}</div>
            ))}
            <Navigation/>
        </div>
    );
};
