import React, { Component } from 'react';

import '../style/ContactForm.css';

class ContactForm extends Component {
    render() {
        return (
            <section className="contactSection">
            <h2 className="contactHeader">Contact Matt</h2>
            <form action="contact.php" method="POST" className="contactForm">
              <label htmlFor="name" aria-label="name" id="name"><input type="text" name="name" className="inputText inputs" placeholder="Name *" /></label><br />
              <label htmlFor="email" aria-label="email" id="email"><input type="text" name="email" className="inputText inputs" placeholder="Email *" /></label><br />
              <label htmlFor="phone" aria-label="phone" id="phone"><input type="tel" name="phone" className="inputText inputs" placeholder="Phone" /></label><br />
              <label htmlFor="message" aria-label="message" id="message"><textarea name="message" rows="6" cols="25" className="inputTextArea inputs" placeholder="Message"></textarea></label><br />
              <input type="submit" value="Send" name="submit" className="btns" /><input type="reset" value="Clear" className="btns" />
            </form>
          </section>
        )
    }
}

export default ContactForm;