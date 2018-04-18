import React, { Component } from 'react';
import Navigation from "./Navigation.js";
import {Media, Image, Row, Col} from "react-bootstrap";
import Map from "../map";
import step_1 from "../img/step_1.png";
import sala_2 from "../img/sala_2.png";
import step_3 from "../img/step_3.png";

import instagram from "../img/instagram.png";
import logo_plavi from "../img/logo_plavi.png";
import facebook from "../img/facebook.png";


class Muske extends Component {
render() {
    return (
        <div>
            <Navigation/>
            <br/>
            <br/>
            <div className="container">
                <h1>Muške frizure</h1>
                <br/>

           <p> Znamo šta želite </p>
    <Row>
    <Col sm={6} md={4}>
      <Image width={256} height={256} src={step_1} alt="thumbnail" />
    </Col>
 
    <Col sm={6} md={4}> 
      <Image width={256} height={256} src={step_3} alt="thumbnail" />
    </Col>

    <Col>
    <Image width={256} height={256} src={sala_2} alt="thumbnail" />
    </Col>
    </Row>
    
  

     </div>

     <br/>
     <br/>
        <Row>
        <Col xs={6} md={4}>
          <div className="map">
          <Map />
          </div>
          </Col>
          
          <Col xs={6} md={4}>
          <a href="tel:+381113130394">tel: +381113130394 </a><br/>
          <a href="tel:+381638474970">mob: +381638474970 </a><br/>
          Bulevar Zorana Đinđića 45z <br/>
          Beograd <br/>
          <a href="https://www.facebook.com/salontheboss/"><img src={facebook}  alt="facebook icon" align="center"/></a>
          <a href="https://www.instagram.com/salon_the_boss/"><img src={instagram}  alt="instagram icon" align="center"/>@salon_the_boss</a>
          </Col>
          <Col xs={6} md={4}>
            <Image src={logo_plavi} alt="logo" responsive align="right" />
          </Col>
          <Col xs={6} md={4}>
          <table>
            <thead>
            <th>radno vreme:</th>
            </thead>
            <tbody>
            <td>utorak - subota 12 - 20h</td>
            </tbody>
          </table>
          </Col>
        </Row>
        <br/>
        <br/>
        </div>
        );
    }
}

export default Muske;
