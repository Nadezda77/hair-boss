import React, { Component } from 'react';
import Navigation from "./Navigation.js";



class Contact extends Component {
render() {
    return (
        <div>
            <Navigation/>
            <br/>
            <br/>
            <div className="container">
                <h1>O Nalazimo se..</h1>
                <br/>
                <p>
                tel:+381
                <br/>
                salontheboss@gmail.com
                </p>
            </div>
        </div>
        );
    }
}

export default Contact;
