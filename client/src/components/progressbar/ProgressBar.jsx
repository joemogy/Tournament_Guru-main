import React, { useEffect, useRef } from 'react'

const ProgressBar = ({ value }) => {
    const barInnerRef = useRef()

// eslint-disable-next-line
useEffect(() => {
    barInnerRef.current.style.width = `${value}%`
}, [value])

    return (
        <div className='progress-bar'>
            <div ref={barInnerRef} className="progress-bar__inner"></div>
        </div>
    )
}

export default ProgressBar
