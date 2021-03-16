import React from 'react'
import './Work.css'

import WorkList from './WorkList.js'

function Work() {
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
                    {/*

                    <WorkList
                        year="Year"
                        title="Title"
                        at="Made at"
                        tech="Build with"
                        links="Links"
                    />
                    <WorkList
                        year="2018 ~ 2019"
                        title="test"
                        at="Tmax Office"
                        tech="c++ websockets lws js ..."
                        links="aaaaaaaa"
                    />
            */}
                </div>
            </div>
        </div>
    )
}

export default Work
