import React from 'react'
import './WorkCard.css'

import data from './WorkData.js'
import img1 from './res/img1.png'

import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import GitHubIcon from '@material-ui/icons/GitHub'
import LanguageIcon from '@material-ui/icons/Language'

function WorkCard({ idx }) {
    if (idx + 1 > data.length) {
        return <div className="WorkCard-empty"> empty card</div>
    } else {
        return (
            <div className="WorkCard">
                <div className="WorkCard-thumbnail">
                    <img src={img1} alt={data[idx]['title']} />
                </div>
                <div className="WorkCard-title">{data[idx]['title']}</div>
                <div className="WorkCard-links">
                    <IconButton color="primary">
                        <GitHubIcon />
                    </IconButton>
                    <IconButton color="primary">
                        <LanguageIcon />
                    </IconButton>
                    <Button className="WorkCard-links-more">
                        더 알아보기 >
                    </Button>
                </div>
                <div className="WorkCard-desc">
                    <ul>
                        {data[idx]['desc'].map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default WorkCard
