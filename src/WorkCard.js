import React, { useState } from 'react'
import './css/WorkCard.css'

import data from './WorkData.js'
import WorkCardMore from './WorkCardMore.js'
import img1 from './res/img1.png'

import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import GitHubIcon from '@material-ui/icons/GitHub'
import LanguageIcon from '@material-ui/icons/Language'

function WorkCard({ idx, onMoreClicked }) {
    return (
        <div className="WorkCard">
            <img src={img1} />
            <div className="WorkCard-right">
                <div className="WorkCard-right-top">
                    <div className="WorkCard-right-top-title">
                        {data[idx]['title']}
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
