import React, { Component } from 'react';
import Button from '../../../utilitiesComponent/button/CustomButton';
import { NavLink } from 'react-router-dom';

import './startday.css'

class StartDay extends Component {
    render() {
        return (
            <div className="d-flex flex-column align-items-center startday">
                <h2 className="main-heading text-center txt-red pb-md-3 pb-lg-4">Byrjaðu daginn
                    <br /><span> á ferskum smoothie</span>
                </h2>
                <Button arrow={true} className="bgprimary btn-arrow" as={NavLink} to="/" title="Koma í áskrift" />
            </div>
        )
    }
}

export default StartDay
