import React, { useState } from 'react'
import './css/WorkCardWrapper.css'

import { useMediaQuery } from 'react-responsive'

import WorkCard from './WorkCard.js'
import WorkCardNarrow from './WorkCardNarrow.js'
import WorkCardMore from './WorkCardMore.js'

function WorkCardWrapper({ idx }) {
    const [open, setOpen] = useState(false)
    const onMoreBtnClicked = (idx) => {
        setOpen(true)
    }
    const onDialogClosed = () => {
        setOpen(false)
    }
    const isPc = useMediaQuery({
        query: '(min-width:1024px)',
    })
    const isTablet = useMediaQuery({
        query: '(min-width:768px) and (max-width:1023px)',
    })
    const isMobile = useMediaQuery({
        query: '(max-width:767px)',
    })
    return (
        <div className="WorkCardWrapper">
            {isPc && <WorkCard idx={idx} onMoreClicked={onMoreBtnClicked} />}
            {isTablet && (
                <WorkCard idx={idx} onMoreClicked={onMoreBtnClicked} />
            )}
            {isMobile && (
                <WorkCardNarrow idx={idx} onMoreClicked={onMoreBtnClicked} />
            )}
            <WorkCardMore idx={idx} open={open} onClose={onDialogClosed} />
        </div>
    )
}

export default WorkCardWrapper
