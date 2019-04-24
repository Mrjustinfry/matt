import React, { Component } from 'react';

import '../style/Testimonial.css';

class Testimonial extends Component {
    render() {
        return (
            <section className="testimonialSection">
                <div className="testimonialArrow">
                &#8678;
                </div>
                <div className="testimonialBox">
                <p className="testimonialInfo">
                            <img src="./meryl.jpg" alt="user" className="testimonialImg" />
                            "Matt put together an amazing comprehensive 15 week training plan to get me prepared to 
                            run my first ever half marathon. Before putting it together he reached out to see what 
                            my normal workout plan was, how many miles I can run in one sitting, what kinds of 
                            lifting I do, etc. The plan was really put together for me and not just anyone wanting 
                            to train for this kind of distance run..."                        
                            </p>
               </div>
                <div className="testimonialArrow">
                &#8680;
                </div>
            </section>
        )
    }
}

export default Testimonial;