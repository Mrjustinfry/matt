import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import '../style/Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      visible: false
    }
  this.toggleHidden = this.toggleHidden.bind(this);
  }

  toggleHidden () {
    this.setState({
      visible: !this.state.visible
    })
  }

  render(props) {
    if(this.state.visible === true) {
        return (
            <nav aria-live="polite">
            <ul className="navList">
              <li className="navLi logoLi"><Link to="/" onClick={this.toggleHidden}><img src="./logo.gif" alt="Matt's Coaching" className="navLogo" /></Link></li>
              <li className="navLi"><Link to="/about" onClick={this.toggleHidden} className="navLink">About</Link></li>
              <li className="navLi"><Link to="/plan" onClick={this.toggleHidden} className="navLink">Plans</Link></li>
              <li className="navLi"><Link to="/social" onClick={this.toggleHidden} className="navLink">Social</Link></li>
              <li className="navLi"><Link to="#contact" onClick={this.toggleHidden} className="navLink">Contact</Link></li>
              <li className="navLi closeLi"><button
                className="closeBtn"
                onClick={this.toggleHidden}
                >&#9746;
              </button></li>
            </ul>
          </nav>
        );
        } else {
          return (
            <img
            src="/menu.png"
            alt="menu"
            className="navBtn"
            role="button"
            onClick={this.toggleHidden} />
          )
        }
}
}

export default Nav;