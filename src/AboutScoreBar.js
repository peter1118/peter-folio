import React from 'react'
import './css/AboutScoreBar.css'

import CheckIcon from '@material-ui/icons/Check'

function AboutScoreBar({ label, level }) {
    let flag = false
    if (label === '하' && level === 0) {
        flag = true
    } else if (label === '중' && level === 1) {
        flag = true
    } else if (label === '상' && level === 2) {
        flag = true
    }
    if (flag) {
        return (
            <div className="AboutScoreBar-selected AboutScoreBar">
                <CheckIcon fontSize="small" />
            </div>
        )
    } else {
        return <div className="AboutScoreBar-non AboutScoreBar">-</div>
    }
}

export default AboutScoreBar
