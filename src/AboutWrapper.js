import React from 'react'
import './css/AboutWrapper.css'

function AboutWrapper({ data }) {
    return (
        <div className="AboutWrapper">
            <div className="AboutWrapper-title">{data['title']}</div>
            <div className="AboutWrapper-content">{data['content']}</div>
        </div>
    )
}

export default AboutWrapper
