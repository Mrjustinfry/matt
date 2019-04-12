import React, { Component } from 'react';

import PlanBox from './PlanBox';
import PlanInfo from '../PlanInfo';

import '../style/PlanSection.css';

let PLAN = require('../PlanInfo');

class PlanSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plans: true
        }
    }

    displayRunPlans() {
        this.setState({
            plans: true
        })
    } 

    displayTriPlans() {
        this.setState({
            plans: false
        })
    }

    render(props) {
        return (
            <section className="PlanSection">
                <p>{PLAN.type}</p>
                <div className="planTabs">
                    <button 
                        className="runTab"
                        onClick={()=> this.displayRunPlans()}
                        >Running Plans
                    </button>
                    <button 
                        className="triTab"
                        onClick={() => this.displayTriPlans()}
                        >Triathlon Plans
                    </button>
                </div>
                {(this.state.plans)
                ? <PlanBox
                    background='./sneakers.jpg'
                    head='Running Plans'
                    description='My plans provide you with some flexibility. Each race distance comes with three separate levels of training. Whether you are a beginner or advanced runner, you will be able to a find a plan suitable for the race distance you are looking to complete.'
                    type1='5K'
                    type2='10K'
                    type3='Half Marathon'
                    type4='Marathon'
                />
                : <PlanBox
                    background='./sunriseRun.jpg'
                    head='Triathlon Plans'
                    description="Matt's triathlon plans provide you with a proven, effective way to take your performance to the next level. All plans begin with moderate volume, intensity and build over the course of your training. The coaching methodology that informs these plans has taken all of my clients to the next level in health and race goals."
                    type1='Sprint'
                    type2='Olympic'
                    type3='Half Ironman'
                    type4='Ironman'
                />
                }
            </section>
        )
    }
}

export default PlanSection;