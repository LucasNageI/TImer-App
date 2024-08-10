import React, { useEffect, useState } from 'react'
import './Timer.css'

export const Timer = () => {

    const [is_counting, setChange] = useState(false)
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)

    useEffect(() => {
        let interval

        if (is_counting) {
            interval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(prev_seconds => prev_seconds - 1)
                } else if (minutes > 0) {
                    setMinutes(prev_minutes => prev_minutes - 1)
                    setSeconds(59)
                } else if (hours > 0) {
                    setHours(prev_hours => prev_hours - 1)
                    setMinutes(59)
                    setSeconds(59)
                } else {
                    clearInterval(interval)
                    setChange(false)
                }
            }, 1000)
        }

        return () => clearInterval(interval)

    }, [is_counting, seconds, minutes, hours])

    const limitInputLength = (e) => {
        const current_value = e.target.value

        if (current_value.length >= 2 && e.key !== 'Backspace' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
            e.preventDefault()
        }
    }

    const handleCountdownForm = (e) => {
        e.preventDefault()
        let countdown_hours = parseInt(e.target.elements['countdown_hours'].value) || 0 /* si el valor ingresado es NaN, lo convierte a 0 */
        let countdown_minutes = parseInt(e.target.elements['countdown_minutes'].value) || 0
        let countdown_seconds = parseInt(e.target.elements['countdown_seconds'].value) || 0

        setHours(countdown_hours)
        setMinutes(countdown_minutes)
        setSeconds(countdown_seconds)

        setChange(true)

        e.target.elements['countdown_hours'].value = ""
        e.target.elements['countdown_minutes'].value = ""
        e.target.elements['countdown_seconds'].value = ""
    }

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
        <section className='timer-container'>
            <form className='timer-form' onSubmit={handleCountdownForm}>
                <input type="number" id="countdown_hours" className="timer-countdown-value" placeholder="hr" onKeyDown={limitInputLength} />
                <input type="number" id="countdown_minutes" className="timer-countdown-value" placeholder="min" onKeyDown={limitInputLength} />
                <input type="number" id="countdown_seconds" className="timer-countdown-value" placeholder="sec" onKeyDown={limitInputLength} />
                <button className='submit-timer-btn' type="submit">Start</button>
            </form>
            <span className='timer'>
                {hours} h : {minutes} m : {seconds} s
            </span>
            <div className='btns-timer-container'>
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
