import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Footer from './components/Footer';
import Galerija from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';





ReactDOM.render(
    <Router>
      <div className="container">
          <Route exact path='/' component={App} />
          <Route path='/about' component={About} />
          <Route path='/gallery' component={Galerija} />
          <Route path='/contact' component={Contact} />
        <Footer/>
      </div>
  </Router>, 
     document.getElementById('root'));
registerServiceWorker();