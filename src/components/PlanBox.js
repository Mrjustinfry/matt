import React, { useState } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import ShowInfo from './ShowInfo';

let PLAN = require('../PlanInfo');

function PlanBox(props) {
    const [ level, setLevel ] = useState('');
    const [ type, setType ] = useState('');
    const [ planHidden, setPlanHidden ] = useState('none');
        return (
            <div className="runPlanBox">
                    <div className="runBoxHead">
                        <div className="runBoxBg" style={
                    {backgroundImage: "url(" + props.background + ")"}}></div>
                        <div className="innerRunBox">
                        <p className="runHeader">{props.head}</p>
                        <p className="runInfo">{props.description}</p></div>
                    </div>
                    <p className="planType">Choose a Training Level: </p>
                    <div className="runPlanList">
                        <li onClick={() => setLevel('beginner')}>Beginner</li>
                        <li onClick={() => setLevel('intermediate')}>Intermediate</li>
                        <li onClick={() => setLevel('advanced')}>Advanced</li>
                    </div>
                    <p className="planType">Choose a Training Type:</p>
                    <ul className="runPlanType">
                        <li onClick={() => setType(props.type1)}>{props.type1}</li>
                        <li onClick={() => setType(props.type2)}>{props.type2}</li>
                        <li onClick={() => setType(props.type3)}>{props.type3}</li>
                        <li onClick={() => setType(props.type4)}>{props.type4}</li>
                    </ul>
                    <div className="planOutput">
                        <div className="chosenHead">
                            <p className="planHead">Level:</p><p className="chosenInfo">{level}</p>
                        </div>
                        <div className="chosenSub"><p className="planHead">Type:</p><p className="chosenInfo">{type}</p></div>
                        <button className="chosenBtn"
                        onClick={() => setPlanHidden('initial')}
                        >See Details</button>
                                                <button className="chosenBtn"
                        onClick={() => setPlanHidden('none')}
                        >Hide Details</button>
                    <div style={{display: planHidden}}>
                    <p id="back"
                        onClick={() => setPlanHidden('none')}
                    >&larr; back to plans</p>
                    <ShowInfo
                        planLevel={level}
                        planType={type}
                    />
                        </div>
                </div>
                </div>
        )
    }

    const mapStateToProps = state => ({
        level: state.level,
        type: state.type
    });

export default connect()(PlanBox);

//just in case: <Link className="planLink" to={"/plan/" + JSON.stringify(level).replace(/\"/g, "") + JSON.stringify(type).replace(/\"/g, "")}></Link>