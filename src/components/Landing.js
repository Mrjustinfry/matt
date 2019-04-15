import React, { Component } from 'react';

import AboutMatt from './AboutMatt';
import Testimonial from './Testimonial';
import Intro from './Intro';

class Landing extends Component {
    render() {
        return (
            <div>
            <Intro />
            <AboutMatt />
            <Testimonial />
            </div>
        )
    }
}

export default Landing;;