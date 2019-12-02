import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import './product.css';

class Product extends Component {
    render() {
        return (
            <Col md={3} className="product">
                <div className="product-container">
                    <div className="product-inner">
                        <div className="product-img pb-3">
                            <img src="./assets/images/delicious-drinks.svg" alt="product" />
                        </div>
                        <div className="prodct-info">
                            <h3 className="product-title">Græna orkan</h3>
                            <div className="product-drinks">
                                <div className="drinks-content">
                                    <img src="./assets/images/kale-icon.svg" alt=" " />
                                    <h4>Grænkál</h4>
                                </div>
                                <div className="drinks-content">
                                    <img src="./assets/images/banana-icon.svg" alt=" "/>
                                    <h4>Banani</h4>
                                </div>
                                <div className="drinks-content">
                                    <img src="./assets/images/mango-icon.svg" alt=" " />
                                    <h4>Mango</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        )
    }
}

export default Product
