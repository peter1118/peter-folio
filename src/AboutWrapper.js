import React from 'react'
import './css/AboutWrapper.css'

import { useMediaQuery } from 'react-responsive'

function AboutWrapper({ data }) {
    const isPc = useMediaQuery({
        query: '(min-width:1024px)',
    })
    const isTablet = useMediaQuery({
        query: '(min-width:768px) and (max-width:1023px)',
    })
    const isMobile = useMediaQuery({
        query: '(max-width:767px)',
    })
    if (!isMobile) {
        return (
            <div className="AboutWrapper">
                <div className="AboutWrapper-title">{data['title']}</div>
                <div className="AboutWrapper-content">{data['content']}</div>
            </div>
        )
    } else {
        return (
            <div className="AboutWrapperNarrow">
                <div className="AboutWrapper-title">{data['title']}</div>
                <div className="AboutWrapper-content">{data['content']}</div>
            </div>
        )
    }
}

export default AboutWrapper
