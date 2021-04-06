import React, { useState } from 'react'
import './css/WorkCardWrapper.css'

import WorkCard from './WorkCard.js'
import WorkCardMore from './WorkCardMore.js'

function WorkCardWrapper({ idx }) {
    const [open, setOpen] = useState(false)
    const onMoreBtnClicked = (idx) => {
        setOpen(true)
    }
    const onDialogClosed = () => {
        setOpen(false)
    }
    return (
        <div className="WorkCardWrapper">
            <WorkCard idx={idx} onMoreClicked={onMoreBtnClicked} />
            <WorkCardMore idx={idx} open={open} onClose={onDialogClosed} />
        </div>
    )
}

export default WorkCardWrapper
