import React from 'react'
import './css/AboutHeader.css'

import { lang, tool } from './AboutHeaderData.js'
import AboutHeaderScore from './AboutHeaderScore.js'

function AboutHeader() {
    return (
        <div className="AboutHeader">
            <div className="AboutHeader-category">
                <div className="AboutHeader-left">Language</div>
                <div className="AboutHeader-score">
                    {lang.map((row, index) => (
                        <AboutHeaderScore
                            key={index}
                            title={row['title']}
                            level={row['level']}
                        />
                    ))}
                </div>
            </div>
            <div className="AboutHeader-category">
                <div className="AboutHeader-left">Tools</div>
                <div className="AboutHeader-score">
                    {tool.map((row, index) => (
                        <AboutHeaderScore
                            key={index}
                            title={row['title']}
                            level={row['level']}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AboutHeader
