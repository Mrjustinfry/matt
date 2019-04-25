import React, { Component } from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';

import PlanModal from './PlanModal';
import ErrorBox from './ErrorBox';

let PLAN = require('../PlanInfo');

class ShowInfo extends Component {

    render(props) {
    switch(true) {
        case(this.props.planLevel === 'beginner' && this.props.planType === '5K'): 
            let beg5 = PLAN.PLAN.run.level.beg.fiveK
            return (
                <PlanModal
                    planTitle={beg5.title}
                    sku={beg5.sku}
                    weeks={beg5.weeks}
                    miles={beg5.miles}
                    whyOne={beg5.why1}
                    whyTwo={beg5.why2}
                    price={beg5.price}
                />
            );
        case(this.props.planLevel === 'beginner' && this.props.planType === '10K'): 
            let beg10 = PLAN.PLAN.run.level.beg.tenK
            return (
                <PlanModal
                    planTitle={beg10.title}
                    sku={beg10.sku}
                    weeks={beg10.weeks}
                    miles={beg10.miles}
                    whyOne={beg10.why1}
                    whyTwo={beg10.why2}
                    price={beg10.price}
                />
            );
        case(this.props.planLevel === 'beginner' && this.props.planType === 'Half Marathon'): 
            let begHM = PLAN.PLAN.run.level.beg.halfMarathon
            return (
                <PlanModal
                    planTitle={begHM.title}
                    sku={begHM.sku}
                    weeks={begHM.weeks}
                    miles={begHM.miles}
                    whyOne={begHM.why1}
                    whyTwo={begHM.why2}
                    price={begHM.price}
                />
            );
        case(this.props.planLevel === 'beginner' && this.props.planType === 'Marathon'): 
            let begM = PLAN.PLAN.run.level.beg.marathon
            return (
                <PlanModal
                    planTitle={begM.title}
                    sku={begM.sku}
                    weeks={begM.weeks}
                    miles={begM.miles}
                    whyOne={begM.why1}
                    whyTwo={begM.why2}
                    price={begM.price}
                />
            );
        case(this.props.planLevel === 'intermediate' && this.props.planType === '5K'): 
            let ifive = PLAN.PLAN.run.level.int.fiveK
            return (
            <PlanModal
                planTitle={ifive.title}
                sku={ifive.sku}
                weeks={ifive.weeks}
                miles={ifive.miles}
                whyOne={ifive.why1}
                whyTwo={ifive.why2}
                price={ifive.price}
            />
            );
        case(this.props.planLevel === 'intermediate' && this.props.planType === '10K'): 
                let iten = PLAN.PLAN.run.level.int.tenK
                return (
                <PlanModal
                    planTitle={iten.title}
                    sku={iten.sku}
                    weeks={iten.weeks}
                    miles={iten.miles}
                    whyOne={iten.why1}
                    whyTwo={iten.why2}
                    price={iten.price}
                />
                );
        case(this.props.planLevel === 'intermediate' && this.props.planType === 'Half Marathon'): 
                let iHM = PLAN.PLAN.run.level.int.halfMarathon
                return (
                <PlanModal
                    planTitle={iHM.title}
                    sku={iHM.sku}
                    weeks={iHM.weeks}
                    miles={iHM.miles}
                    whyOne={iHM.why1}
                    whyTwo={iHM.why2}
                    price={iHM.price}
                />
                ); 
        case(this.props.planLevel === 'intermediate' && this.props.planType === 'Marathon'): 
                let iM = PLAN.PLAN.run.level.int.marathon
                return (
                <PlanModal
                    planTitle={iM.title}
                    sku={iM.sku}
                    weeks={iM.weeks}
                    miles={iM.miles}
                    whyOne={iM.why1}
                    whyTwo={iM.why2}
                    price={iM.price}
                />
                );    
        case(this.props.planLevel === 'advanced' && this.props.planType === '5K'): 
                let adv5k = PLAN.PLAN.run.level.adv.fiveK
                return (
                <PlanModal
                    planTitle={adv5k.title}
                    sku={adv5k.sku}
                    weeks={adv5k.weeks}
                    miles={adv5k.miles}
                    whyOne={adv5k.why1}
                    whyTwo={adv5k.why2}
                    price={adv5k.price}
                />
                );   
        case(this.props.planLevel === 'advanced' && this.props.planType === '10K'): 
                let adv10k = PLAN.PLAN.run.level.adv.tenK
                return (
                <PlanModal
                    planTitle={adv10k.title}
                    sku={adv10k.sku}
                    weeks={adv10k.weeks}
                    miles={adv10k.miles}
                    whyOne={adv10k.why1}
                    whyTwo={adv10k.why2}
                    price={adv10k.price}
                />
                );
        case(this.props.planLevel === 'advanced' && this.props.planType === 'Half Marathon'): 
                let advHM = PLAN.PLAN.run.level.adv.halfMarathon
                return (
                <PlanModal
                    planTitle={advHM.title}
                    sku={advHM.sku}
                    weeks={advHM.weeks}
                    miles={advHM.miles}
                    whyOne={advHM.why1}
                    whyTwo={advHM.why2}
                    price={advHM.price}
                />
                );
        case(this.props.planLevel === 'advanced' && this.props.planType === 'Marathon'): 
                let advM = PLAN.PLAN.run.level.adv.marathon
                return (
                <PlanModal
                    planTitle={advM.title}
                    sku={advM.sku}
                    weeks={advM.weeks}
                    miles={advM.miles}
                    whyOne={advM.why1}
                    whyTwo={advM.why2}
                    price={advM.price}
                />
                );
        case(this.props.planLevel === 'beginner' && this.props.planType === 'Sprint'): 
                let begS = PLAN.PLAN.tri.level.beg.sprint
                return (
                <PlanModal
                    planTitle={begS.title}
                    sku={begS.sku}
                    weeks={begS.weeks}
                    miles={begS.miles}
                    whyOne={begS.why1}
                    whyTwo={begS.why2}
                    price={begS.price}
                />
                );
        case(this.props.planLevel === 'beginner' && this.props.planType === 'Olympic'): 
                let begO = PLAN.PLAN.tri.level.beg.olympic
                return (
                <PlanModal
                    planTitle={begO.title}
                    sku={begO.sku}
                    weeks={begO.weeks}
                    miles={begO.miles}
                    whyOne={begO.why1}
                    whyTwo={begO.why2}
                    price={begO.price}
                />
                );
        case(this.props.planLevel === 'beginner' && this.props.planType === 'Half Ironman'): 
                let begHI = PLAN.PLAN.tri.level.beg.halfIron
                return (
                <PlanModal
                    planTitle={begHI.title}
                    sku={begHI.sku}
                    weeks={begHI.weeks}
                    miles={begHI.miles}
                    whyOne={begHI.why1}
                    whyTwo={begHI.why2}
                    price={begHI.price}
                />
                );
        case(this.props.planLevel === 'beginner' && this.props.planType === 'Ironman'): 
                let begI = PLAN.PLAN.tri.level.beg.iron
                return (
                <PlanModal
                    planTitle={begI.title}
                    sku={begI.sku}
                    weeks={begI.weeks}
                    miles={begI.miles}
                    whyOne={begI.why1}
                    whyTwo={begI.why2}
                    price={begI.price}
                />
                );  
        case(this.props.planLevel === 'intermediate' && this.props.planType === 'Sprint'): 
                let intS = PLAN.PLAN.tri.level.int.sprint
                return (
                <PlanModal
                    planTitle={intS.title}
                    sku={intS.sku}
                    weeks={intS.weeks}
                    miles={intS.miles}
                    whyOne={intS.why1}
                    whyTwo={intS.why2}
                    price={intS.price}
                />
                );
        case(this.props.planLevel === 'intermediate' && this.props.planType === 'Olympic'): 
                let intO = PLAN.PLAN.tri.level.int.olympic
                return (
                <PlanModal
                    planTitle={intO.title}
                    sku={intO.sku}
                    weeks={intO.weeks}
                    miles={intO.miles}
                    whyOne={intO.why1}
                    whyTwo={intO.why2}
                    price={intO.price}
                />
                ); 
        case(this.props.planLevel === 'intermediate' && this.props.planType === 'Half Ironman'): 
                let intHI = PLAN.PLAN.tri.level.int.halfIron
                return (
                <PlanModal
                    planTitle={intHI.title}
                    sku={intHI.sku}
                    weeks={intHI.weeks}
                    miles={intHI.miles}
                    whyOne={intHI.why1}
                    whyTwo={intHI.why2}
                    price={intHI.price}
                />
                );
        case(this.props.planLevel === 'intermediate' && this.props.planType === 'Ironman'): 
                let intI = PLAN.PLAN.tri.level.int.iron
                return (
                <PlanModal
                    planTitle={intI.title}
                    sku={intI.sku}
                    weeks={intI.weeks}
                    miles={intI.miles}
                    whyOne={intI.why1}
                    whyTwo={intI.why2}
                    price={intI.price}
                />
                );
        case(this.props.planLevel === 'advanced' && this.props.planType === 'Sprint'): 
                let advS = PLAN.PLAN.tri.level.adv.sprint
                return (
                <PlanModal
                    planTitle={advS.title}
                    sku={advS.sku}
                    weeks={advS.weeks}
                    miles={advS.miles}
                    whyOne={advS.why1}
                    whyTwo={advS.why2}
                    price={advS.price}
                />
                );
        case(this.props.planLevel === 'advanced' && this.props.planType === 'Olympic'): 
                let advO = PLAN.PLAN.tri.level.adv.olympic
                return (
                <PlanModal
                    planTitle={advO.title}
                    sku={advO.sku}
                    weeks={advO.weeks}
                    miles={advO.miles}
                    whyOne={advO.why1}
                    whyTwo={advO.why2}
                    price={advO.price}
                />
                );
        case(this.props.planLevel === 'advanced' && this.props.planType === 'Half Ironman'): 
                let advHI = PLAN.PLAN.tri.level.adv.halfIron
                return (
                <PlanModal
                    planTitle={advHI.title}
                    sku={advHI.sku}
                    weeks={advHI.weeks}
                    miles={advHI.miles}
                    whyOne={advHI.why1}
                    whyTwo={advHI.why2}
                    price={advHI.price}
                />
                );
        case(this.props.planLevel === 'advanced' && this.props.planType === 'Ironman'): 
                let advI = PLAN.PLAN.tri.level.adv.iron
                return (
                <PlanModal
                    planTitle={advI.title}
                    sku={advI.sku}
                    weeks={advI.weeks}
                    miles={advI.miles}
                    whyOne={advI.why1}
                    whyTwo={advI.why2}
                    price={advI.price}
                />
                );
        default: 
                return (
                    <ErrorBox />
                )
    }
}
}


export default withRouter(connect()(ShowInfo));