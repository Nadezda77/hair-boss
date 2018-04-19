import React, { Component } from 'react';
import Navigation from "./Navigation.js";

import {Image, Row, Col} from "react-bootstrap";
import Map from "../map";
import instagram from "../img/instagram.png";
import logo_plavi from "../img/logo_plavi.png";
import facebook from "../img/facebook.png";
import sale from "../img/sale.jpg";

class About extends Component {
render() {
    return (
        <div>
          <Navigation/>
          <br/>
          <br/>
            <div className="container">
                <h1>O nama</h1>
                <Image src={sale} circle center/>
                <h3>The Boss je Sale</h3>
                <p> Preko 20 godina iskustva u prestižnim beogradskim salonima, obuke, takmičenja i najvažnije, zadovoljne mušterije su naša najbolje preporuka. </p>
            </div>
        </div>
        );
    }
}

export default About;
