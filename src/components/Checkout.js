import React, { Component } from 'react';

import AddressForm from "./AddressForm";

import '../style/Checkout.css';

class Checkout extends Component {
    render() {
        return (
            <section className="checkoutSection">
                <AddressForm />
            </section>
        )
    }
}

export default Checkout;