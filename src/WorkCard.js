import React from 'react'
import './WorkCard.css'

import data from './WorkData.js'

function WorkCard({ idx }) {
    if (idx + 1 > data.length) {
        return <div className="WorkCard-empty"> empty card</div>
    } else {
        return <div className="WorkCard">work card of {idx} !!!</div>
    }
}

export default WorkCard
