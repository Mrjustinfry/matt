import React, { Component } from 'react';

import '../style/AboutMatt.css';

class AboutMatt extends Component {
    render() {
        return (
            <section className="aboutMeSection">
            <div className="bannerImgBox">
              <img src="./transparentAccent.png" alt="accent" className="accent" />
              <img src="./transparentAccent.png" alt="accent" className="accent accentAlt" />
              <img src="./transparentAccent.png" alt="accent" className="accent" />
            </div>
            <div className="aboutInfo">
              <p>
                <img src="./newspaper.png" alt="Conquering the Alps" className="newsImg" />
                <span id="aboutMe">About Matt</span><br />
              I have been an athlete my whole life – from soccer to baseball, football, wrestling, track –
              I made it my daily goal to be as physically active as possible. Nailed a 4:43 mile in college,
              conquered the IRONMAN Triathlon in Coeur D'Alene Idaho and placed 16th in my age group.
              </p>
              <p>
              I was honored to have been chosen to compete in the SWISSMAN Xtreme Triathlon on June 2017–
              dubbed one of the hardest Ironman distance triathlons in the world based off of the sky high
              (literally) altitude and intense weather conditions. Currently training to qualify for the
              Boston Marathon with a goal of 2 hours and 55 minutes.
              </p>
              <p>
              I dedicate my spare time to create
              training programs for individuals looking to get fit or conquer a specific physical feat –
              like a marathon, triathlon, or perhaps transform that one pack into a six pack for your first race!
              Being physically fit, and having a personal workout plan made just for you will empower you to
              feel better and enjoy life. That is what has always given me such joy, and I can't wait to
              help you conquer the road before you.
              </p>
            </div>
            <div className="bannerImgBox">
              <img src="./transparentAccent.png" alt="accent" className="accent accentAlt" />
              <img src="./transparentAccent.png" alt="accent" className="accent" />
              <img src="./transparentAccent.png" alt="accent" className="accent accentAlt" />
            </div>
          </section>
        )
    }
}

export default AboutMatt;