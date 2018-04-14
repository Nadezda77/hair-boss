
import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import logo from '../img/logo.png';
import hairdresser from '../img/hairdresser.png';
import "./Navigation.css";

class Navigation extends Component {
    render() {
      return (
            <Navbar inverse fixedTop collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                        <a href="/" target="_blank"><img src={hairdresser} alt="logo"/></a>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                        <LinkContainer to="/zenske">
                                <NavItem eventKey={1} >Dame</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/muske">
                                <NavItem eventKey={2} >Muške</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <NavItem eventKey={3} >O nama</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/contact">
                                <NavItem eventKey={4} >Kontakt</NavItem>
                            </LinkContainer> 
                            <LinkContainer to="/gallery">
                                <NavItem eventKey={5} >Galerija</NavItem>
                            </LinkContainer>
                        </Nav>
                            </Navbar.Collapse>
            </Navbar>
            );
        }
      }
      
      export default Navigation;
      