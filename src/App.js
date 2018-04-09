import React, { Component } from 'react';
import './App.css';
import Navigation from "./components/Navigation.js";
import {Carousel, Well, Image, Grid, Row, Col, Thumbnail, Button} from "react-bootstrap";
import Map from './map.js';
import crvena from "./img/crvena.jpg";
import wedding from "./img/wedding.jpg";
import man from "./img/man.jpg";

import logo_plavi from "./img/logo_plavi.png";

class App extends Component {
  render() {
    return (
      <div >
        <Navigation/>
        
        <Carousel style={styles.container} >
          <Carousel.Item>
            <img  width={1200} height={500} alt="900x500" src={crvena} /> 
            <Carousel.Caption>
              <h3>Ženski</h3>
              <p></p>
            </Carousel.Caption>
            
          </Carousel.Item>
          <Carousel.Item>
            <img width={1200} height={500} alt="900x500" src={man} />
            <Carousel.Caption>
              <h3>Muški</h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img  width={1200} height={500} alt="900x500" src={wedding} />
            <Carousel.Caption>
              <h3>Posebne prilike</h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item> 
        </Carousel> 
        
        <br/>
        <br/>
        <header>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 >Welcome to React</h1>
        </header>
        <p>
          To get started, edit  and save to reload.
        </p>
        <Well>
          
        </Well>
        <Row>
            <Col xs={6} md={4}>
              <Thumbnail src="/thumbnaildiv.png" alt="242x200">
                <h3>Thumbnail label</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src="/thumbnaildiv.png" alt="242x200">
                <h3>Thumbnail label</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src="/thumbnaildiv.png" alt="242x200">
                <h3>Thumbnail label</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
        </Row>
        <Row>
          <Col sm={6} md={3}>
            <Image src={logo_plavi} alt="logo" responsive />
          </Col>
          <Col sm={6} md={3}>
          tel: +381113130394 <br/>
          mob: +381638474970 <br/>
          adr: Bulevar Zorana Đinđića 45z
              Beograd
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

