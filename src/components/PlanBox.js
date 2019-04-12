import React, { Component } from 'react';



class PlanBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: '',
            type: ''
        }
    }

    setLevel(userLevel) {
        this.setState({
            level: userLevel
        })
    }

    render() {
        return (
            <div className="runPlanBox">
                    <div className="runBoxHead">
                        <div className="runBoxBg" style={
                    {backgroundImage: "url(" + this.props.background + ")"}}></div>
                        <div className="innerRunBox">
                        <p className="runHeader">{this.props.head}</p>
                        <p className="runInfo">{this.props.description}</p></div>
                    </div>
                    <p className="planType">Choose a Training Level:</p>
                    <div className="runPlanList">
                        <li 
                            id="begginer"
                            onClick={() => this.setLevel('beginner')}
                            >Beginner</li>
                        <li>Intermediate</li>
                        <li>Advanced</li>
                    </div>
                    <p>{this.props.level}</p>
                    <p className="planType">Choose a Training Type:</p>
                    <ul className="runPlanType">
                        <li>{this.props.type1}</li>
                        <li>{this.props.type2}</li>
                        <li>{this.props.type3}</li>
                        <li>{this.props.type4}</li>
                    </ul>
                    <div className="planOutput"></div>
                </div>
        )
    }
}

export default PlanBox;