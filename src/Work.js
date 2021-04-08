import React from 'react'
import './css/Work.css'

import WorkList from './WorkList.js'
import data from './WorkData.js'
import WorkCardWrapper from './WorkCardWrapper.js'

//해상도에 따라 몇깨의 card wrapper를 둘지, 거기에 몇개 데이터를 줄지 결정
//일단 고정 2개:
function Work() {
    return (
        <div className="Work">
            <div className="Work-wrapper">
                <div className="Work-top">portfolio</div>
                {data.map((row, index) => (
                    <WorkCardWrapper key={index} idx={index} />
                ))}
            </div>
        </div>
    )
}

export default Work
