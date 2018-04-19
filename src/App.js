import React, { Component } from 'react';
import './App.css';
import Navigation from "./components/Navigation.js";
import {Carousel, PageHeader, Image,  Row, Col, Thumbnail, Button, Media} from "react-bootstrap";
import Map from './map.js';
import malisan from "./img/malisan.png";
import logo from './img/logo.png';
import karusel_sala from "./img/karusel_sala.png";

import man_sala from "./img/man_sala.png";
import ljubicasta from "./img/ljubicasta.png";
import bed_head from "./img/bed_head.png";
import naslovna_1 from "./img/naslovna_1.png";
import logo_plavi from "./img/logo_plavi.png";
import instagram from "./img/instagram.png";
import facebook from "./img/facebook.png";
import salon_1 from "./img/salon_1.jpg";


class App extends Component {
  render() {
    return (
      <div >  
      <Navigation/>
        <br/>
        <br/> 
        <br/>
      <Image src={logo} alt="logo" responsive />
        <Carousel style={styles.container} >
          <Carousel.Item>
            <img  width={1200} height={500} alt="900x500" src={malisan} /> 
            <Carousel.Caption>
              {/* <h3>Dečije</h3> */}
              <p></p>
            </Carousel.Caption>
            
          </Carousel.Item>
          <Carousel.Item>
            <img width={1200} height={500} alt="900x500" src={naslovna_1} />
            <Carousel.Caption>
              {/* <h3>Muške</h3> */}
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img  width={1200} height={500} alt="900x500" src={karusel_sala} />
            <Carousel.Caption>
              {/* <h3>Posebne</h3> */}
              <p></p>
            </Carousel.Caption>
          </Carousel.Item> 
        </Carousel> 
        
        <br/>
        <br/>
        <PageHeader>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
         Prepustite kosu profesionalcima <br/>
         <small>
          Mi brinemo o Vašem stilu. 
        </small>
        </PageHeader>
        
       
        <Row>
          
            <Col sm={6} md={4}>
              <Thumbnail src={bed_head} alt="242x200">
                <h3>Proizvodi za negu i oblikovanje</h3>
                <p>U salonu se koriste vrhunski preparati, Tigi kolekcija <b>Bed Head</b> </p>
                <p>
                
                  <Button bsStyle="default" href="http://www.tigi.com/bedhead/us/" target="_blank">više</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col sm={6} md={4}>
              <Thumbnail src={ljubicasta} alt="242x200">
                <h3>Ženske frizure</h3>
                <p>Šišanje, farbanje, pramenovi.. </p>
                <p>
                 
                  <Button bsStyle="default" href="/zenske">više</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col sm={6} md={4}>
              <Thumbnail src={man_sala} alt="242x200">
                <h3>Muške frizure</h3>
                <p>Za mlađe i starije..</p>
                <p>
                  
                  <Button bsStyle="default" href="/muske">više</Button>
                </p>
              </Thumbnail>
            </Col>
        </Row>
        <Media>
        <Media.Heading>
          <header>Dođite i uverite se 
          </header>
          </Media.Heading>
     
      <Media.Right>
      <Image src={salon_1}  width={500} height={500} alt="salon" />
      </Media.Right>
      </Media>
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
        <a href="https://www.instagram.com/salon_the_boss/"><img src={instagram}  alt="instagram icon" align="center"/></a>
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


const styles = {
  container: {
  },
  image: {
    objectFit: "cover",
   
    width: "100%"
  }
};



export default App;

