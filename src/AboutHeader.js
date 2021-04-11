import React from 'react'
import './css/AboutHeader.css'

import data from './AboutHeaderData.js'
import AboutHeaderScore from './AboutHeaderScore.js'

function AboutHeader() {
    return (
        <div className="AboutHeader">
            <div className="AboutHeader-left">Skills</div>
            <div className="AboutHeader-score">
                {data.map((row, index) => (
                    <AboutHeaderScore
                        key={index}
                        title={row['title']}
                        level={row['level']}
                    />
                ))}
            </div>
        </div>
    )
}

export default AboutHeader
