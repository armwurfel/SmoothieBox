import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './process.css'

class Process extends Component {
    render() {
        return (
            <section className="process">
                <Container>
                    <Row className="m-0">
                        <Col md={6}>
                            <h2 className="heading mb-5 pb-4">Hinn fullkomni smoothie á 2 mínútum</h2>
                            <Row className="m-0" >
                                <Col md={9}>
                                    <ol className="process-type">
                                        <li className="mb-5">Tear open your Crop’s Smoothie pack and tip the fruit into the blender.</li>
                                        <li className="mb-5">Splash in 250 ml of unsweetened juice (cloudy apple works best) or cow, soy, almond milk or water.</li>
                                        <li className="mb-5">Blend for 60 seconds.</li>
                                    </ol>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <img className="process-img" src="./assets/images/smoothie-fruit.jpg" alt=""/>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Process
