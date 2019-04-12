import React, { Component } from 'react';

import { PLAN } from '../PlanInfo';

import '../style/PlanModal.css';

class PlanModal extends Component {

    render(props) {
        return (
            <section className="planSection">
                <div className="bgImage" style={
                    {backgroundImage: "url(" + this.props.background + ")"}}></div>
                <div className="container">
                    <p id="back">&larr; back to plans</p>
                    <h2 className="planTitle">{this.props.planTitle}</h2>
                    <div className="planInnerBox">
                    <div className="planBoxLeftTop">
                    <p className="skuNumber">SKU: {this.props.sku}</p>
                    <p className="planWhat">What you will receive:</p>
                        <ul className="whatList">
                        <li>Call from Coach Matt to provide advice in order to maximize training time (Optional)</li>
                        <li>{this.props.weeks} week training plan ({this.props.miles} miles per week)</li>
                        <li>{this.props.weeks} laminated weekly plans for repeated use</li>
                        <li>Marker to cross off your daily accomplishments</li>
                        <li>Velcro - Stick your plan wherever you would like!</li>
                        </ul>
                    <p className="planWhy">Why choose this program?</p>
                        <ul className="whyList">
                        <li>{this.props.whyOne}</li>
                        <li>{this.props.whyTwo}</li>
                        </ul>
                    </div>
                    <div className="planBoxRightBottom">
                    <p className="price">${this.props.price}<span className="cents">.00</span></p>
                    <p className="quantity">Quantity: <input type="number" name="quantity" className="quantityInput" value="1" /></p>
                    <button type="submit" name="submit" for="quantity" className="addToCartButton">Add to Cart</button>
                    <hr />
                    <p className="returnPolicy">
                        <span className="returnHeader"><strong>RETURN & REFUND POLICY</strong></span><br />
                        I'm sorry but at this time we cannot accept refunds or exchanges. 
                        Please purchase your program with a seriously set goal.
                    </p>
                    <p className="shippingInfo">
                        <span className="shippingHeader"><strong>SHIPPING INFO</strong></span><br />
                        All orders will ship within 3-5 business days from the date of payment. All packages will be sent via USPS. 
                        When shipping overseas, customs can delay packages by up to 6 weeks. This doesn't happen often, but it can happen.
                        <br /><br />
                        All orders are sent via standard mail, unless noted otherwise.
                    </p>
                    </div>
                </div>
      </div>
      </section>
        )
    }
}

export default PlanModal;

/*        <PlanModal
          background="./bridgeStretch.jpeg"
          planTitle="Beginner's 5K"
          sku="2335"
          weeks="12"
          miles="9-13"
          whyOne="Could be your first race. Ever. AWESOME! Perfect distance to start."
          whyTwo="Same price as: A solid bottle of wine for your hot date"
          price="39"
          />
*/