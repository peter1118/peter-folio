import React from 'react'
import './Work.css'

import WorkList from './WorkList.js'
import data from './WorkData.js'
import WorkCardWrapper from './WorkCardWrapper.js'

//해상도에 따라 몇깨의 card wrapper를 둘지, 거기에 몇개 데이터를 줄지 결정
//일단 고정 2개:
function Work() {
    const cardNumPerLine = 2 //나중엔 동적으로 바꿔야 함
    const startIdxList = []
    for (let i = 0; i < Math.floor(data.length / cardNumPerLine); i++) {
        startIdxList.push(i * cardNumPerLine)
    }
    return (
        <div className="Work">
            <div className="Work-wrapper">
                <div className="Work-top">
                    <p>What I have done</p>
                </div>
                {startIdxList.map((startIdx) => (
                    <WorkCardWrapper
                        startIdx={startIdx}
                        maxCount={cardNumPerLine}
                    />
                ))}
            </div>
        </div>
    )
}

export default Work
