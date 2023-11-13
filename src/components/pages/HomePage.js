import React from 'react';
import Pivot from '../Pivot';
import Navigation from '../Navigation';

import { isMobile } from 'react-device-detect';
import { HOME_IMAGE } from '../../services/imagePreloadService';

export default function HomePage() {
  return (
    <div
      className="flex-column bg-img"
      /*style={{background: '#4088db'}}*/
      style={{
        display: !isMobile && 'flex',
        height: !isMobile && '100vh',
        backgroundImage: `url(${HOME_IMAGE})`,
      }}
    >
      <Pivot
        title={['Ryan', 'Vandersmith']}
        delay={3}
        caret
        left={{ name: 'Contact', link: '/contact' }}
        right={{ name: 'Story', link: '/story' }}
      />
      <Navigation />
    </div>
  );
}
