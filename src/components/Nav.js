import React, { Component } from 'react';

import '../style/Nav.css';

class Nav extends Component {
    render() {
        return (
            <nav aria-live="polite">
            <ul className="navList">
              <li className="navAbout navLink">About</li>
              <li className="navPlans navLink">Plans</li>
              <li><img src="./logo2.png" alt="Matt's Coaching" className="navLogo" /></li>
              <li className="navSocial navLink">Social</li>
              <li className="navContact navLink">Contact</li>
            </ul>
          </nav>
        );
        }
}

export default Nav;