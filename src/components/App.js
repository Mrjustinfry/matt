import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {connect} from 'react-redux';

import Nav from './Nav';
import AboutMatt from './AboutMatt';
import Testimonial from './Testimonial';
import PlanSection from './PlanSection';
import ContactForm from './ContactForm';
import Footer from './Footer';
import Landing from './Landing';
import Checkout from './Checkout';
import ShowInfo from './ShowInfo';

import '../style/App.css';


class App extends Component {

render(props) {
  return (
      <Router>
              <main role="main" className="App">
              <Link to="/checkout"><img src="./cart.png" alt="checkout" className="checkoutIcon" /></Link>
              <Nav />
                <Switch>
                  <Route exact path="/"
                    component={Landing}
                    />
                  <Route exact path="/about"
                    component={AboutMatt}
                    />
                  <Route exact path="/plan" component={PlanSection} />
                  <Route exact path="/social"
                    component={Testimonial}
                    />
                  <Route exact path="/checkout"
                    component={Checkout}
                    />
                  <Route exact path="/plan/info"
                    component={ShowInfo}
                    level={this.props.level}
                    type={this.props.type}
                    />
                </Switch>
                <ContactForm />
                <Footer />
              </main>
      </Router>
  );
}
}

export default connect()(App);
