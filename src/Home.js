import React from 'react'
import './css/Home.css'

function Home() {
    return (
        <div className="Home">
            <div className="Home-left">
                <div className="Home-left-main">
                    Hi, I'm Peter Song
                    <div className="Home-left-main-sub">
                        프로답게 가치를 제공하고 싶은.
                        <br />
                        기술자로 살고 싶은. <br />
                        사람을 키우고 싶은.{' '}
                    </div>
                </div>
                <div className="Home-left-sub" id="home-about">
                    About me >
                </div>
            </div>
            <div className="Home-right">
                <div className="Home-right-top">Home right top img</div>
            </div>
        </div>
    )
}

export default Home
