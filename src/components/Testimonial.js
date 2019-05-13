import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import '../style/Testimonial.css';

class Testimonial extends Component {
    render() {
        return (
            <section className="testimonialSection">
                <Carousel 
                    showThumbs={false}
                    showStatus={false} 
                    interval={10000}
                    autoPlay
                    infiniteLoop
                    className="presentation-mode">
                    <div className="my-slide content testimonialBox" 
                        style={{backgroundImage: "url(/asphalt.jpg)"}}>
                        <p className="testimonialInfo"
                            style={{backgroundColor: "rgba(4, 4, 4, 0.44)",color:"white"}}>
                            <img src="./meryl.jpg" alt="user" className="testimonialImg" />
                            "Matt put together an amazing comprehensive 15 week training plan to get me prepared to 
                            run my first ever half marathon. Before putting it together he reached out to see what 
                            my normal workout plan was, how many miles I can run in one sitting, what kinds of 
                            lifting I do, etc. The plan was really put together for me and not just anyone wanting 
                            to train for this kind of distance run..."                        
                        </p>
                    </div>
                    <div className="my-slide content testimonialBox"
                         style={{backgroundImage: "url(/water.jpg)"}}>
                        <p className="testimonialInfo"
                           style={{backgroundColor: "rgba(30, 226, 243, 0.6)",color:"navy"}}>
                            <img src="./danny.jpg" alt="user" className="testimonialImg" />
                            "...He was able to put a plan together that felt like it ramped up perfectly for me and 
                            didn't leave me feeling like I was scared to start training. I never felt like I was running 
                            too much or overexerting my body - even as the schedule got more intense closer to the race date.  
                            It was super easy to follow with what i should be doing exactly on each day of the week, if it was 
                            strength how much weight I should use, how many reps, and even a "how to" on the exercise if I hadn't 
                            heard of it before..." 
                        </p>
                    </div>
                    <div className="my-slide content testimonialBox"
                         style={{backgroundImage: "url(/track.png)"}}>
                        <p className="testimonialInfo"
                           style={{backgroundColor: "rgba(243, 164, 150, 0.43)",color:"black"}}>
                            <img src="./barack.jpg" alt="user" className="testimonialImg" />
                            "...My desired time to finish the half marathon when I first reached out to Matt was 2.5 hours but 
                            with the 15 weeks of training I was able to complete the half in 1:54:41, I cut over 30 minutes off 
                            my finish time in 15 weeks - to a time that I didn't even think was possible without this training 
                            program from Matt." - Lauren S." 
                        </p>
                    </div>
                </Carousel>
            </section>
        )
    }
}

export default Testimonial;