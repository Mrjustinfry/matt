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
                    transitionTime={2000}
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
                            "Matt put together an amazing comprehensive 15 week training plan to get me prepared to 
                            run my first ever half marathon. Before putting it together he reached out to see what 
                            my normal workout plan was, how many miles I can run in one sitting, what kinds of 
                            lifting I do, etc. The plan was really put together for me and not just anyone wanting 
                            to train for this kind of distance run..." 
                        </p>
                    </div>
                    <div className="my-slide content testimonialBox"
                         style={{backgroundImage: "url(/track.png)"}}>
                        <p className="testimonialInfo"
                           style={{backgroundColor: "rgba(243, 164, 150, 0.43)",color:"black"}}>
                            <img src="./barack.jpg" alt="user" className="testimonialImg" />
                            "Matt put together an amazing comprehensive 15 week training plan to get me prepared to 
                            run my first ever half marathon. Before putting it together he reached out to see what 
                            my normal workout plan was, how many miles I can run in one sitting, what kinds of 
                            lifting I do, etc. The plan was really put together for me and not just anyone wanting 
                            to train for this kind of distance run..." 
                        </p>
                    </div>
                </Carousel>
            </section>
        )
    }
}

export default Testimonial;