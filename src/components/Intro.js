import React from 'react';

import '../style/Intro.css'

export default function Intro() {
        return (
            <div className="introBox">
                <h2 className="introHead">Matt's Coaching</h2>
                <p className="introInfo">Beginner Plans starting at only <span className="introPrice">$39<span className="cents">.00</span></span>!</p>
            </div>
        )
    }
