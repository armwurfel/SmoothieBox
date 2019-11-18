import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './process.css'

class Process extends Component {
    render() {
        return (
            <section className="process">
                <Container>
                    <Row>
                        <Col md={6}>
                            <h2>Hinn fullkomni smoothie á 2 mínútum</h2>
                        </Col>
                        <Col md={6}></Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Process
