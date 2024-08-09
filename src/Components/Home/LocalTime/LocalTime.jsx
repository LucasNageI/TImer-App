import React, { useState, useEffect } from 'react'
import './LocalTime.css'

export const LocalTime = () => {
    
    const [time, setTime] = useState(new Date().toLocaleTimeString({ hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })) 

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString({ hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }))
        }, 1000)

        return () => clearInterval(intervalId) /* luego de cada ejecucion limpia el intervalo, asi no se acumulan */
    }, []) /* siempre que se renderice la pagina, el useEffect se va a  */

    return (
        <div className='loca-time-container'>
            <span className='local-time'>{time}</span>
        </div>
    )
}