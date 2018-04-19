import React, { Component } from 'react';
import Navigation from "./Navigation.js";
import {Media, Image, Row, Col} from "react-bootstrap";
import Map from "../map";
import instagram from "../img/instagram.png";
import logo_plavi from "../img/logo_plavi.png";
import facebook from "../img/facebook.png";


class Contact extends Component {
render() {
    return (
        <div>
            <Navigation/>
           <br/>
           <br/>
            <br/>
            <p>
                <a href="mailto:salontheboss@gmail.com">salontheboss@gmail.com</a>
            </p>
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
          &nbsp; &nbsp;
          <a href="https://www.instagram.com/salon_the_boss/"><img src={instagram}  alt="instagram icon" align="center"/>@salon_the_boss</a>
         
          <br/>
          <br/>
          radno vreme: utorak-subota 12-20h 
          </Col>
          <Col xs={6} md={4}>
            <Image src={logo_plavi} alt="logo" responsive align="right" />
          </Col>
        </Row>
        <br/>
        <br/>
        </div>
        );
    }
}

export default Contact;
