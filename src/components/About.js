import React, { Component } from 'react';
import Navigation from "./Navigation.js";



class About extends Component {
render() {
    return (
        <div>
            <Navigation/>
            <br/>
            <br/>
            <div className="container">
                <h1>O nama</h1>
                <br/>
                <p>
                Lorem ipsum
                </p>
            </div>
        </div>
        );
    }
}

export default About;
