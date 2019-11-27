import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Product from '../../../utilitiesComponent/product/Product';
import './drinkselection.css';

class DrinkSelection extends Component {
    render() {
        return (
            <section className="drinkselection">
                <Container>
                    <Row className="m-0">
                        <Col md={12}>
                            <div >
                                <h2 className="main-heading text-center txt-red pb-md-3 pb-lg-4">Mikið úrval
                                    <br /><span> af gómsætum drykkjum</span>
                                </h2>
                            </div>
                        </Col>
                        <Product />
                    </Row>
                </Container>
            </section>
        )
    }
}

export default DrinkSelection
