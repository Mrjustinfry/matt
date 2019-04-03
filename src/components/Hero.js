import React, { Component } from 'react';

import '../style/Hero.css';

class Hero extends Component {
    render() {
        return (
            <section className="heroSection">
             <h1 className="heroQuote">"A goal without a plan is just a wish." <br /><span className="author">- Antoine de Saint-Exupéry</span></h1>
            </section>
        )
    }
}

export default Hero;
