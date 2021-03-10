import React from 'react';
import './App.css';

import Home from './Home.js';
import About from './About.js';
import Footer from './Footer.js';
import HeaderButton from './HeaderButton';

import { useMediaQuery } from "react-responsive"
import { Link, Route, BrowserRouter as Router } from "react-router-dom"

function App() {
  const isPc = useMediaQuery({
    query : "(min-width:1024px)"
  });
  const isTablet = useMediaQuery({
    query : "(min-width:768px) and (max-width:1023px)"
  });
  const isMobile = useMediaQuery({
    query : "(max-width:767px)"
  });
    return (
        <div className="App">
            <Router>
                <div className='Header'>
                <Link to="/">
                    <HeaderButton name='Home' />
                </Link>
                <Link to="/about">
                    <HeaderButton name='About' />
                </Link>
                <Link to="/work">
                    <HeaderButton name='Work' />
                </Link>
                    <div className='HeaderRight'>
                    <Link to="/contact">
                        <HeaderButton name='Contact' />
                    </Link>
                    </div>
                </div>
                <Route exact path="/" component={Home} /> 
                <Route exact path="/about" component={About} /> 
                {/*
                <Route path="/work" component={Work} /> 
                <Route path="/contact" component={Contact} /> 
                    */}
            </Router>
            <Footer />
        </div>
    );
}

export default App;
