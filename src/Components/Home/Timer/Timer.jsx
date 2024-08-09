import React from 'react'
import './Timer.css'

export const Timer = () => {

    const handleCountdown = (e) => {
        e.preventDefault()
        let countdown_hours = parseInt(e.target.elements['countdown-hours'].value)
        let countdown_minutes = parseInt(e.target.elements['countdown-minutes'].value)
        let countdown_seconds = parseInt(e.target.elements['countdown-seconds'].value)

        console.log("Hours:", countdown_hours)
        console.log("Minutes:", countdown_minutes)
        console.log("Seconds:", countdown_seconds)

        e.target.elements['countdown-hours'].value = ""
        e.target.elements['countdown-minutes'].value = ""
        e.target.elements['countdown-seconds'].value = ""
    }

    return (
        <section>
            <span className='timer'>seconds</span>
            <form onSubmit={handleCountdown}>
                <input type="number" id='countdown-hours' className='timer-countdown-value' placeholder='hr'/>
                <input type="number" id='countdown-minutes' className='timer-countdown-value' placeholder='min'/>
                <input type="number" id='countdown-seconds' className='timer-countdown-value' placeholder='sec'/>
                <button type='submit'>start</button>
            </form>
        </section>
    )
}
