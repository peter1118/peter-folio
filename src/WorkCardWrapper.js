import React from 'react'
import './css/WorkCardWrapper.css'

import WorkCard from './WorkCard.js'

function WorkCardWrapper({ startIdx, maxCount }) {
    const startIdxList = []
    for (let i = startIdx; i < startIdx + maxCount; i++) {
        startIdxList.push(i)
    }
    return (
        <div className="WorkCardWrapper">
            {startIdxList.map((index) => (
                <WorkCard key={index} idx={index} />
            ))}
        </div>
    )
}

export default WorkCardWrapper
