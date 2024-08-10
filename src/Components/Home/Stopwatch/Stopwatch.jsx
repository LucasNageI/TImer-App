import React, { useEffect, useState } from 'react'
import './Stopwatch.css'
 
export const Stopwatch = () => {

    const [is_counting, setChange] = useState(false)
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)

    useEffect(() => {
        let interval = 0

        if (is_counting) {
            interval = setInterval(() => {
                if (seconds === 59) {
                    setSeconds(0)
                    if (minutes === 59) {
                        setMinutes(0)
                        setHours(prev_hours => prev_hours + 1)
                    } else {
                        setMinutes(prev_minutes => prev_minutes + 1)
                    }
                } else {
                    setSeconds(prev_seconds => prev_seconds + 1)
                }
            }, 1000)
        }

        return () => clearInterval(interval)

    }, [is_counting, seconds, minutes, hours])

    const handleStartStop = () => {
        setChange(!is_counting)
    }

    const handleReset = () => {
        setSeconds(0)
        setMinutes(0)
        setHours(0)
        setChange(false)
    }

    return (
        <section className='stopwatch-section'>
            <div className='stopwatch-container'>
            <span className='stopwatch'>
                    {hours} h : {minutes} m : {seconds} s
                </span>
            </div>
            <div className='btns-container'>
                <button className='start-stop-btn' onClick={handleStartStop}>
                    <span className={`span start-` + is_counting}><i className="bi bi-skip-start-fill"></i></span>
                    <span className={`span stop-` + is_counting}><i className="bi bi-pause-fill"></i></span>
                </button>
                <button className='reset-btn' onClick={handleReset}>
                    <span className='span'><i className="bi bi-arrow-clockwise"></i></span>
                </button>
            </div>
        </section>
    )
}
