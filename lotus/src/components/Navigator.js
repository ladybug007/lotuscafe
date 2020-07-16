import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from "reactstrap";
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = { isNavOpen: false };
    }

    toggleNav() {
        this.setState({ isNavOpen: !this.state.isNavOpen });
    }


    render() {

        return (
            <div>

                <Navbar dark sticky='top' expand='lg'>

                    <div className='container'>
                        <NavbarBrand style={{marginLeft:'80px',marginTop:'-15px'}} href="/"><img src="assets/images/lotus-white.png" height='60px' width='60px'  alt='none' />
                        <span style={{fontSize:'14px', color:'white',marginLeft:'-10px'}}>LOTUS COWORK CAFE</span></NavbarBrand>

                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className='nav-link' to='/home'> HOME </NavLink>
                                </NavItem>

                                <NavItem>
                                    <HashLink to="/home#member">MEMBERSHIP</HashLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className='nav-link' to='/cafe'>CAFE</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className='nav-link' to='/contact'>CONTACT</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                    </Navbar>
            </div>
        );
    }
}