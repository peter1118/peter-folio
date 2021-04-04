import React, { useState } from 'react'
import './css/WorkCard.css'

import data from './WorkData.js'
import WorkCardMore from './WorkCardMore.js'
import img1 from './res/img1.png'

import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import GitHubIcon from '@material-ui/icons/GitHub'
import LanguageIcon from '@material-ui/icons/Language'

function WorkCard({ idx }) {
    const [open, setOpen] = useState(false)
    const onMoreBtnClicked = (idx) => {
        setOpen(true)
    }
    const onDialogClosed = () => {
        setOpen(false)
    }
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
                    <Button
                        className="WorkCard-links-more"
                        onClick={onMoreBtnClicked}
                    >
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
                <WorkCardMore idx={idx} open={open} onClose={onDialogClosed} />
            </div>
        )
    }
}

export default WorkCard
