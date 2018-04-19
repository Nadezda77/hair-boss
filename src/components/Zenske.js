import React, { Component } from 'react';
import Navigation from "./Navigation.js";
import {Media, Image, Row, Col} from "react-bootstrap";
import Map from "../map";
import crvena from "../img/crvena.jpg";
import farbana from "../img/farbana.png";
import paz from "../img/paz.png";
import plava from "../img/plava.png";
import pramenovi from "../img/pramenovi.png";
import instagram from "../img/instagram.png";
import logo_plavi from "../img/logo_plavi.png";
import plave_lokne from "../img/plave_lokne.png";
import facebook from "../img/facebook.png";

class Zenske extends Component {
render() {
    return (
        <div>
            <Navigation/>
            <br/>
            <br/>
            <div className="container">
                <h1>Ženske frizure</h1>
                <br/>
                <Media>
      <Media.Heading>Šišanje</Media.Heading>
      <p>
        Profesionalno šišanje koje će vas istaći.
      </p>
      <Media.Right>
      <Image width={256} height={256} src={paz} alt="thumbnail" />
    </Media.Right>
   
  </Media>
  <Media>
  <Media.Heading>Farbanje</Media.Heading>
      <p>
        U salonu se koriste isključivo najkvalitetnije boje bez amonijaka, koje ne oštećuju Vašu kosu i daju joj prirodan izgled.  
      </p>
    <Media.Left>
      <Image width={345} height={475} src={farbana} alt="thumbnail" rounded />
    </Media.Left>

  </Media>
  <Media>
      <Media.Heading>Ombre</Media.Heading>
      <p>
        Već duže vreme popularna frizura za smele dame. 
      </p>
    <Media.Left>
      <img width={450} height={250} src={plava} alt="thumbnail" />
    </Media.Left>
      
    
    
  </Media>
  <Media>
      <Media.Heading>Pramenovi</Media.Heading>
      <p>
        Uvek aktuelni pramenovi u <i>balayage</i> tehnologiji, ili klasični pramenovi daće vam nežnu notu. 
      </p>
   
    <Media.Right>
      <img width={370} height={448} src={pramenovi} alt="thumbnail" />
    </Media.Right>
    </Media>
    <Media>
      <Media.Heading>Lokne</Media.Heading>
      <p>
        Lokne su odličan izbor za posebne prilike.
      </p>
   
    <Media.Right>
      <img width={236} height={295} src={plave_lokne} alt="thumbnail" />
    </Media.Right>
    </Media>


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

export default Zenske;
