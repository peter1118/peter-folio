import React from 'react';
import './App.css';

import Header from './Header.js';
import Home from './Home.js';
import Footer from './Footer.js';

import { useMediaQuery } from "react-responsive"

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
    //const page = 0; 0이면 home 1이면...
    //이 값에 따라 어떤 component를 렌더할지 결정하겠지

    return (
        <div className="App">
            <Header />
            <Home />
            <Footer />
        </div>
    );
}

export default App;
