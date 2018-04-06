import React, { Component } from 'react';
//import './App.css';
import Navigation from "./components/Navigation.js";
import {Carousel, Well} from "react-bootstrap";
import crvena from "./img/crvena.jpg";
import wedding from "./img/wedding.jpg";
import man from "./img/man.jpg";
import logo_adresa_bela from "./img/logo_adresa_bela.jpg";

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
          <img src={logo_adresa_bela} alt="adresa"/>
        </Well>
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

