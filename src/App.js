import React from 'react';
import { Switch, Route } from "react-router-dom";
import Header from './components/sections/header/Header';
import Footer from './components/sections/footer/Footer';
import HomePage from './components/pages/HomePage';
import SmoothiePage from './components/pages/SmoothiePage';
import ContactPage from './components/pages/ContactPage';
import LoginPage from './components/pages/LoginPage';
import SubscribePage from './components/pages/SubscribePage';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/smoothie' component={SmoothiePage} />
          <Route exact path='/contact' component={ContactPage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/subscribe' component={SubscribePage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
