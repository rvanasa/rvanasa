import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import HomePage from './page/HomePage';
import ProjectPage from './page/ProjectsPage';
import StoryPage from './page/StoryPage';
import SkillsPage from './page/SkillsPage';
import ScrollToTop from './util/ScrollToTop';
import ContactPage from './page/ContactPage';

import './App.scss';

import {createHashHistory} from 'history';

let history = createHashHistory();
// let _createHref = history.createHref;
// history.createHref = (location) => {
//     let href = _createHref(location);
//     if(href.endsWith('#/')) {
//         href = href.slice(0, -2);
//     }
//     return href;
// };

export default function App() {
    return (
        <Router history={history}>
            <ScrollToTop>
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route path="/story">
                        <StoryPage/>
                    </Route>
                    <Route path="/skills">
                        <SkillsPage/>
                    </Route>
                    <Route path="/projects">
                        <ProjectPage/>
                    </Route>
                    <Route path="/contact">
                        <ContactPage/>
                    </Route>
                </Switch>
            </ScrollToTop>
        </Router>
    );
};
