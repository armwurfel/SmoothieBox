import React, { Component } from 'react';
import Slider from '../sections/home/slider/Slider';
import Process from '../sections/home/process/Process';

class HomePage extends Component {
    render() {
        return (
            <> 
                <Slider />
                <Process />
            </>
        )
    }
}

export default HomePage;
