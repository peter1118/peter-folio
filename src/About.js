import React from 'react'
import './css/About.css'

import rows from './AboutData.js'
import AboutWrapper from './AboutWrapper.js'

function About() {
    return (
        <div className="About">
            {rows.map((data, index) => (
                <AboutWrapper key={index} data={data} />
            ))}
        </div>
    )
}

export default About
