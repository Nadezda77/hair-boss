import React, { Component } from 'react';
import './App.css';
import Navigation from "./components/Navigation.js";
import {Carousel, Well, Image, Grid, Row, Col, Thumbnail, Button} from "react-bootstrap";
import Map from './map.js';
import malisan from "./img/malisan.jpg";

import man from "./img/man.jpg";
import cupavi from "./img/cupavi.png";
import ljubicasta from "./img/ljubicasta.png";
import bed_head from "./img/bed_head.png";
import plava from "./img/plava.png";
import karusel_sala from "./img/karusel_sala.png";
import logo_plavi from "./img/logo_plavi.png";
import instagram from "./img/instagram.png";

class App extends Component {
  render() {
    return (
      <div >
        <Navigation/>
        
        <Carousel style={styles.container} >
          <Carousel.Item>
            <img  width={1200} height={500} alt="900x500" src={malisan} /> 
            <Carousel.Caption>
              <h3>Dečije</h3>
              <p></p>
            </Carousel.Caption>
            
          </Carousel.Item>
          <Carousel.Item>
            <img width={1200} height={500} alt="900x500" src={karusel_sala} />
            <Carousel.Caption>
              <h3>Muške</h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img  width={1200} height={500} alt="900x500" src={plava} />
            <Carousel.Caption>
              <h3>Posebne</h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item> 
        </Carousel> 
        
        <br/>
        <br/>
        <header>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 >Prepustite kosu profesionalcima</h1>
        </header>
        <p>
          Mi brinemo o Vašem stilu. 
        </p>
       
        <Row>
            <Col xs={6} md={4}>
              <Thumbnail src={bed_head} alt="242x200">
                <h3>Proizvodi za negu i oblikovanje</h3>
                <p>U salonu se koriste vrhunski preparati, Tigi kolekcija <b>Bed Head</b> </p>
                <p>
                
                  <Button bsStyle="default" href="http://www.tigi.com/bedhead/us/" target="_blank">više</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={ljubicasta} alt="242x200">
                <h3>Ženske frizure</h3>
                <p>Šišanje, farbanje, pramenovi.. </p>
                <p>
                 
                  <Button bsStyle="default">više</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={cupavi} alt="242x200">
                <h3>Muške frizure</h3>
                <p>Za mlađe i malo starije..</p>
                <p>
                  
                  <Button bsStyle="default">više</Button>
                </p>
              </Thumbnail>
            </Col>
        </Row>
        <Row>
          <Col sm={6} md={3}>
            <Image src={logo_plavi} alt="logo" responsive />
          </Col>
          <Col sm={6} md={3}>
          <a href="tel:+381113130394">tel: +381113130394 </a><br/>
          <a href="tel:+381638474970">mob: +381638474970 </a><br/>
          Bulevar Zorana Đinđića 45z <br/>
          Beograd <br/>
          <a href="https://www.instagram.com/salon_the_boss/"><img src={instagram}  alt="instagram icon"/>@salon_the_boss</a>
          </Col>
          <Col>
          <div className="map">
          <Map />
          </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const styles = {
  container: {
  },
  image: {
    objectFit: "cover",
   
    width: "100%"
  }
};

export default App;

