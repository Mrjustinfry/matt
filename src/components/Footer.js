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
            <p className="mattFoot"><img src="/logo2.png" alt="logo" className="logoFoot" /> Matt's Coaching &copy; <span id="year">{this.getDate()}</span></p>
            <p className="socialFoot"><a href="https://www.strava.com/athletes/12726253" target="_blank" rel="noopener noreferrer"><img src="/strava3.png" alt="strava" className="stravaImg" /></a> <a href="https://www.instagram.com/mattscoaching/" target="_blank" rel="noopener noreferrer"><img src="/insta.png" className="instaFoot" alt="instagram" /></a></p>
            <p className="justinFoot">This website was built by <a href="https://github.com/Mrjustinfry" target="_blank" rel="noopener noreferrer" className="justinLink">Justin Fry</a></p>
          </footer>
        )
    }
}

export default Footer;