import React from 'react'
import './css/WorkCard.css'

import data from './WorkData.js'

function WorkCard({ idx, onMoreClicked }) {
    const images = require.context('../public/images', true);
    const img = images(`./${data[idx]['pic']}`).default;
    return (
        <div className="WorkCard">
            <div className="WorkCard-left">
                <img src={img} alt={data[idx]['title']} />
            </div>
            <div className="WorkCard-right">
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
