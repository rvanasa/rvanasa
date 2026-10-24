import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectsPage';
import StoryPage from './pages/StoryPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './utils/ScrollToTop';

import './App.scss';

export default function App() {
  return (
    <React.StrictMode>
      <HashRouter>
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/story">
              <StoryPage />
            </Route>
            <Route path="/skills">
              <SkillsPage />
            </Route>
            <Route path="/projects">
              <ProjectPage />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
          </Switch>
        </ScrollToTop>
      </HashRouter>
    </React.StrictMode>
  );
}
