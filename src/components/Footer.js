import React, { Component } from 'react';

import '../style/Footer.css';

class Footer extends Component {

     getDate() {
        let today = new Date();
        let year = today.getFullYear();
        return year;
      }
      
    render() {
        return (
            <footer>
            <p className="mattFoot">&copy; Matt's Coaching (logo?/email link?) <span id="year">{this.getDate()}</span></p>
            <p className="justinFoot">This website was built by <a href="https://github.com/Mrjustinfry" target="_blank" rel="noopener noreferrer" className="justinLink">Justin Fry</a></p>
          </footer>
        )
    }
}

export default Footer;