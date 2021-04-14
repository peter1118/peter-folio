import React from 'react'
import './css/Home.css'

import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

function Home() {
    /*
    const isPc = useMediaQuery({
        query: '(min-width:1024px)',
    })
    const isTablet = useMediaQuery({
        query: '(min-width:768px) and (max-width:1023px)',
    })
    */
    const isMobile = useMediaQuery({
        query: '(max-width:767px)',
    })
    let className = 'Home'
    if (isMobile) className = 'Home-narrow'
    return (
        <div className={className}>
            <div className="Home-left">
                <div className="Home-left-main">
                    Hi, I'm Peter Song
                    <div className="Home-left-main-sub">
                        프로답게 가치를 제공하고 싶은.
                        <br />
                        기술자로 살고 싶은. <br />
                        사람을 키우고 싶은.
                    </div>
                </div>
                <Link to="/about" style={{ textDecoration: 'none' }}>
                    <div className="Home-left-sub" id="home-about">
                        About me >
                    </div>
                </Link>
            </div>
            <div className="Home-right">
                <div className="Home-right-top">Home right top img</div>
            </div>
        </div>
    )
}

export default Home
