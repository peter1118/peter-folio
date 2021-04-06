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
                <div className="WorkCard-right-top">{data[idx]['title']}</div>
                <div className="WorkCard-right-bot">
                    <div onClick={onMoreClicked}>더 알아보기 ></div>
                </div>
            </div>
        </div>
    )
}

export default WorkCard
