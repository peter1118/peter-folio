import React from 'react'
import './css/AboutHeaderScore.css'

import AboutScoreBar from './AboutScoreBar.js'

function AboutHeaderScore({ title, level }) {
    return (
        <div className="AboutHeaderScore">
            <h3>{title}</h3>
            <div className="AboutScoreBar-wrapper">
                <AboutScoreBar label={'하'} level={level} />
                <AboutScoreBar label={'중'} level={level} />
                <AboutScoreBar label={'상'} level={level} />
            </div>
        </div>
    )
}

export default AboutHeaderScore
