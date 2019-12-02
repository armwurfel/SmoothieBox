import React, { Component } from 'react';
import Slider from '../sections/home/slider/Slider';
import Process from '../sections/home/process/Process';
import StartDay from '../sections/home/startday/StartDay';
import DrinkSelection from '../sections/home/drinkselection/DrinkSelection';

class HomePage extends Component {
    render() {
        return (
            <> 
                <Slider />
                <Process />
                <DrinkSelection />
                <StartDay />
            </>
        )
    }
}

export default HomePage;
