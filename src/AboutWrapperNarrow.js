import React from 'react'
import './css/AboutWrapper.css'

function AboutWrapperNarrow({ data }) {
    return (
        <div className="AboutWrapperNarrow">
            <div className="AboutWrapper-title">{data['title']}</div>
            <div className="AboutWrapper-content">{data['content']}</div>
        </div>
    )
}

export default AboutWrapper
