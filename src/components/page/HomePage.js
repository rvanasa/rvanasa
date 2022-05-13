import React from 'react';
import Pivot from '../Pivot';
import Navigation from '../Navigation';

export default function HomePage() {
    return (
        <div className="d-flex flex-column vh-100 bg-img" /*style={{background: '#4088db'}}*/ style={{backgroundImage: 'url(img/clouds.jpg)'}}>
            <Pivot
                title={['Ryan', 'Vandersmith']} delay={3} caret
                left={{name: 'Contact', link: '/contact'}} right={{name: 'Story', link: '/story'}}/>
            <Navigation/>
        </div>
    );
};
