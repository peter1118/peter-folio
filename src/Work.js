import React from 'react'
import './Work.css'

import WorkList from './WorkList.js'
import WorkCard from './WorkCard.js'
import data from './WorkData.js'

function Work() {
    return (
        <div className="Work">
            <div className="Work-wrapper">
                <div className="Work-top">
                    <p>What I have done</p>
                </div>
                <div className="Work-mid">
                    {data.map((row) => (
                        <WorkCard key={row.alias} work={row.alias} />
                    ))}
                    sdfsdfsf
                </div>
            </div>
        </div>
    )
    /*
    return (
        <div className="Work">
            <div className="Work-title">
                <div className="Work-title-main">Work</div>
                <div className="Work-title-sub"></div>
            </div>
            <div className="Work-list">
                <div className="Work-list-title"></div>
                <div className="Work-list-list">
                    <WorkList />
                </div>
            </div>
        </div>
    )
    */
}

export default Work
