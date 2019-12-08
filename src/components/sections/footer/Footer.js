import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './footer.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                <Container>
                    <Row className="m-0">
                        <Col md={6}>
                            <Row className="m-0">
                                <Col md={8} className="p-0">
                                    <img className="mb-4" src="/assets/images/smoothie-box-logo.png" alt="logo" />
                                    <div className="footer-contact">
                                        <div className="d-flex mb-2">
                                            <a className="d-flex align-items-center" href="#a" >
                                                <img src="/assets/images/address-icon.svg" alt="address-icon" />
                                                <address>Klannahraun 2, 101 Reykjavík</address>
                                            </a>
                                        </div>
                                        <div className="d-flex mb-2">
                                            <a className="d-flex align-items-center" href="mailto:info@smoothiebox.is">
                                                <img src="/assets/images/email-icon.svg" alt="email-icon" />
                                                <span>info@smoothiebox.is</span>
                                            </a>
                                        </div>
                                        <div className="d-flex mb-2">
                                            <a className="d-flex align-items-center" href="+923545555511">
                                                <img src="/assets/images/phone-icon.svg" alt="phone-icon" />
                                                <span>354 555 5511</span>
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={4} className="m-0 p-0 footer-social">
                                    <div className="d-flex mb-2">
                                        <a className="d-flex align-items-center" href="https://facebook.com">
                                            <img className="fb" src="/assets/images/facebook-icon.svg" alt="facebook-icon" />
                                            <span>Facebook</span>
                                        </a>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <a className="d-flex align-items-center" href="+923545555511">
                                            <img src="/assets/images/instagram-icon.svg" alt="instagram-icon" />
                                            <span>Instagram</span>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6}></Col>
                    </Row>
                </Container>
            </footer>
        )
    }
}

export default Footer
