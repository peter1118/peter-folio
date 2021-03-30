import React from 'react'
import './WorkCardWrapper.css'

import WorkCard from './WorkCard.js'

function WorkCardWrapper({ startIdx, maxCount }) {
    const startIdxList = []
    for (let i = startIdx; i < startIdx + maxCount; i++) {
        startIdxList.push(i)
    }
    return (
        <div className="WorkCardWrapper">
            {startIdxList.map((idx) => (
                <WorkCard key={idx} idx={idx} />
            ))}
        </div>
    )
}

export default WorkCardWrapper
