import React from 'react';
import ContactSection from '../ContactSection';
import Navigation from '../Navigation';
import Pivot from '../Pivot';
import {CONTACT_IMAGE} from '../../services/imagePreloadService';

export default function ContactPage() {
    return (
        <div className="bg-img" style={{backgroundImage: `url(${CONTACT_IMAGE})`}}>
            <Pivot
                title={['Let\'s', 'get', 'in', 'touch.']} caret background={'#0003'}
                left={{name: 'Projects', link: '/projects'}} right={{name: 'Home', link: '/'}}/>
            <div className="divider bg-success"/>
            <div style={{background: '#000A'}}>
                <ContactSection/>
            </div>
            <Navigation/>
        </div>
    );
}
