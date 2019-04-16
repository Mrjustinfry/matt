import React, { useState } from 'react';



function PlanBox(props) {
    const [ level, setLevel ] = useState('');
    const [ type, setType ] = useState('');

    const showInfo = () => {  //for the modal. 
        console.log('type' + JSON.stringify({type}) + 'level' + JSON.stringify({level}));
    }

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
                        <li onClick={() => setLevel('Beginner')}>Beginner</li>
                        <li onClick={() => setLevel('Intermediate')}>Intermediate</li>
                        <li onClick={() => setLevel('Advanced')}>Advanced</li>
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
                        <button 
                            className="chosenBtn"
                            onClick={() => showInfo()}
                            >See Details
                        </button>
                    </div>
                </div>
        )
    }


export default PlanBox;