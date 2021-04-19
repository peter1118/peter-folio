import React from 'react'
import './css/Home.css'

import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import data from './HomeData.js'

function Home() {
    const isMobile = useMediaQuery({
        query: '(max-width:767px)',
    })
    if (!isMobile) {
        return (
            <div className="Home">
                <div className="Home-left">
                    <div className="Home-left-main">
                        <h4>Hi, I'm Peter Song</h4>
                        <div className="Home-left-main-sub">
                            <ul>
                                {data.map((desc, index) => (
                                    <li key={index}> {desc} </li>
                                ))}
                            </ul>
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
    } else {
        return (
            <div className="HomeNarrow">
                <div className="HomeNarrow-top">
                    <div className="HomeNarrow-top-img">Home right top img</div>
                </div>
                <div className="HomeNarrow-bottom">
                    <div className="HomeNarrow-bottom-main">
                        <h4>Hi, I'm Peter Song</h4>
                        <div className="Home-left-main-sub">
                            <ul>
                                {data.map((desc, index) => (
                                    <li key={index}> {desc} </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <Link to="/about" style={{ textDecoration: 'none' }}>
                        <div className="Home-left-sub" id="home-about">
                            About me >
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Home
