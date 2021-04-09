import React from 'react'
import './css/WorkCard.css'

import data from './WorkData.js'
import img1 from './res/img1.png'

function WorkCard({ idx, onMoreClicked }) {
    return (
        <div className="WorkCardNarrow">
            <div className="WorkCardNarrow-top">
                <img src={img1} alt={data[idx]['title']} />
            </div>
            <div className="WorkCardNarrow-bottom">
                <div className="WorkCard-right-top">
                    <div className="WorkCard-right-top-title">
                        <h3>{data[idx]['title']}</h3>
                    </div>
                    <div className="WorkCard-right-top-list">
                        <ul>
                            {data[idx]['desc'].map((list, index) => (
                                <li key={index}>{list}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="WorkCard-right-bot" onClick={onMoreClicked}>
                    더 알아보기 >
                </div>
            </div>
        </div>
    )
}

export default WorkCard
