import React, { Component } from 'react';
import {connect} from 'react-redux';

import PlanBox from './PlanBox';
import Hero from './Hero';

import '../style/PlanSection.css';

class PlanSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plans: true,
            border2: '1px solid black',
            border1: '',
            margin1: '-1em',
            margin2: 'initial'
        }
    }

    displayRunPlans() {
        this.setState({
            plans: true,
            border2: '1px solid black',
            border1: 'none',
            margin1: '-1em',
            margin2: 'initial'
        })
    } 

    displayTriPlans() {
        this.setState({
            plans: false,
            border1: '1px solid black',
            border2: 'none',
            margin1: 'initial',
            margin2: '-1em'
        })
    }

    render(props) {
        return (
            <section className="PlanSection">
                <Hero />
                <div className="planTabs">
                    <button style={{borderBottom:this.state.border1,marginTop:this.state.margin1}}
                        className="runTab"
                        onClick={()=> this.displayRunPlans()}
                        >Running Plans
                    </button>
                    <button style={{borderBottom:this.state.border2,marginTop:this.state.margin2}}
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

PlanSection.defaultProps = {
    plans: true
}

export default connect()(PlanSection);