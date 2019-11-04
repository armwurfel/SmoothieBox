import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Button from '../../utilitiesComponent/button/CustomButton';
import { NavLink } from 'react-router-dom';

import './header.css';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            navExpanded: false,
        }
    }
    setNavExpanded = (expanded) => {
        this.setState({ navExpanded: expanded });
    }
    
    closeNav = () => {
        this.setState({ navExpanded: false });
    }
    render() {
        return (
            <header>
                <Container>
                    <Navbar expand="lg" collapseOnSelect 
                        onToggle={this.setNavExpanded}
                        expanded={this.state.navExpanded}
                    >
                        <Navbar.Brand as={NavLink} to="/"><img src="/assets/images/smoothie-box-logo.png" alt="Hybrid Logo" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link onClick={this.closeNav} activeClassName="active" as={NavLink} to="/smoothies">
                                    <svg width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.9311 8.1588L11.7 5.6966V4.55C11.7 4.1912 11.4088 3.9 11.05 3.9H8.0522L8.918 1.3H11.05C11.4088 1.3 11.7 1.0088 11.7 0.65C11.7 0.2912 11.4088 0 11.05 0H8.45C8.1705 0 7.9222 0.1794 7.8325 0.4446L6.682 3.9H1.95C1.5912 3.9 1.3 4.1912 1.3 4.55V5.6953L0.0689 8.1588C0.0234 8.2498 0 8.3486 0 8.45V18.85C0 19.9251 0.8749 20.8 1.95 20.8H11.05C12.1251 20.8 13 19.9251 13 18.85V8.45C13 8.3486 12.9753 8.2498 12.9311 8.1588ZM11.7 10.1569C10.5443 9.8449 8.4396 9.5199 6.2465 10.4507C4.1743 11.3321 2.1255 10.8524 1.3 10.5911V8.6034L2.3517 6.5H10.6496L11.7 8.6034V10.1569Z" fill="white"/>
                                    </svg>
                                    Smoothies
                                </Nav.Link>
                                <Nav.Link onClick={this.closeNav} activeClassName="active" as={NavLink} to="/contact">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.6154 8.30769C16.6154 3.71947 12.8959 0 8.30769 0C3.71947 0 0 3.71947 0 8.30769C0 10.0441 0.533064 11.6559 1.44401 12.989L0.352826 16.2626L3.62648 15.1714C4.95951 16.0823 6.57125 16.6154 8.30769 16.6154C12.8959 16.6154 16.6154 12.8959 16.6154 8.30769Z" fill="white"/>
                                        <path d="M24.0001 15.6927C24.0001 11.9723 21.5542 8.82373 18.1829 7.76562C18.1926 7.9457 18.1979 8.12652 18.1979 8.30808C18.1979 9.64253 17.9362 10.9379 17.42 12.1582C16.9218 13.3361 16.2089 14.3936 15.3011 15.3014C14.3934 16.2092 13.3358 16.9221 12.1579 17.4203C10.9376 17.9365 9.64225 18.1982 8.3078 18.1982C8.12619 18.1982 7.94537 18.1922 7.76514 18.1824C8.82298 21.5541 11.9717 24.0004 15.6924 24.0004C17.4289 24.0004 19.0406 23.4673 20.3737 22.5564L23.6473 23.6476L22.5561 20.374C23.467 19.0409 24.0001 17.4291 24.0001 15.6927Z" fill="white"/>
                                    </svg>
                                    Hafa samband
                                </Nav.Link>
                                <Nav.Link onClick={this.closeNav} activeClassName="active" as={NavLink} to="/login">
                                    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.951773 8.04883C0.42702 8.04883 0 8.47585 0 9.00066C0 9.52479 0.426684 9.95181 0.951773 9.95181H4.95853V8.04883H0.951773Z" fill="white"/>
                                        <path d="M18.8287 0.479492H8.13077C6.38162 0.479492 4.95855 1.90188 4.95855 3.65071V3.74995V8.04812H13.5308L11.6976 6.21468C11.3271 5.84353 11.3271 5.23982 11.6976 4.86883C11.8773 4.68912 12.1158 4.59004 12.3699 4.59004C12.625 4.59004 12.8636 4.68917 13.0436 4.86883L16.5015 8.32691C16.5883 8.41338 16.6569 8.51588 16.706 8.63194C16.7569 8.7569 16.7804 8.87756 16.7804 9.00023C16.7804 9.12256 16.7572 9.24338 16.7097 9.35905C16.659 9.48127 16.5903 9.58321 16.5041 9.67102L13.0435 13.1309C12.8628 13.3106 12.6236 13.4092 12.3699 13.4092C12.1161 13.4092 11.8762 13.3106 11.6972 13.1309C11.3267 12.7591 11.3267 12.1554 11.6972 11.7846L13.5308 9.95133H4.9585V10.9921V12.9031V14.3491C4.9585 16.0972 6.38162 17.5197 8.13072 17.5197H18.8287C20.5778 17.5197 21.9999 16.0972 21.9999 14.3491V3.6511C22 1.90188 20.5779 0.479492 18.8287 0.479492Z" fill="white"/>
                                    </svg>
                                    Innskrá
                                </Nav.Link>
                                <Button onClick={this.closeNav} className="bgprimary" as={NavLink} to="/subscribe" title="Koma í áskrift" />
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </header>
        )
    }
}

export default Header;
