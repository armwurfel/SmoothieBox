import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './footer.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                <Container>
                    <Row>
                        <Col md={6}>
                            <img className="mb-4" src="/assets/images/smoothie-box-logo.png" alt="logo" />
                            <div className="footer-contact">
                                <div className="d-flex mb-2">
                                    <a href="#" >
                                        <img src="/assets/images/address-icon.svg" alt="address-icon" />
                                        <address>Klannahraun 2, 101 Reykjavík</address>
                                    </a>
                                </div>
                                <div className="d-flex mb-2">
                                    <a href="mailto:info@smoothiebox.is">
                                        <img src="/assets/images/email-icon.svg" alt="email-icon" />
                                        <span>info@smoothiebox.is</span>
                                    </a>
                                </div>
                                <div className="d-flex mb-2">
                                    <a href="+923545555511">
                                        <img src="/assets/images/phone-icon.svg" alt="phone-icon" />
                                        <span>354 555 5511</span>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}></Col>
                    </Row>
                </Container>
            </footer>
        )
    }
}

export default Footer
