import React, { useEffect, useState } from 'react'
import './Timer.css'
 
export const Timer = () => {

    const [is_counting, setChange] = useState(false)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        let interval = 0

        if (is_counting) { /* si is_counting es truthly */
            interval = setInterval(() => { /* reasigno la variable interval en una funcion setInterval */
                setSeconds(prev_seconds => prev_seconds + 1)},  /* que llama al setter del useState, que recibe el segundo anterior, y le suma 1  */
                1000) /* cada 1 segundo */
        }

        else if (!is_counting && seconds !== 0) { /* en cambio, si is_counting es falsy y seconds no es 0 */
            clearInterval(interval) /* limpia la variable interval */
        }

        return () => clearInterval(interval) /* cada vez que se termina de ejecutar useEffect, limpia el intervalo asi cuando hayan nuevos intervalos, no se superpongan */

    }, [is_counting]) /* cada vez que is_counting cambie */

    const handleStartStop = () => {
        setChange(!is_counting) /* cambia el valor del is_counting */
    }

    const handleReset = () => {
        setSeconds(0) // reinicia el contador a 0
        setChange(false) // para el contador
    }

    return (
        <section className='timer-section'>
            <div className='timer-container'>
                <span className='timer'>{seconds} s</span>
            </div>
            <div className='btns-container'>
                <button className='start-stop-btn' onClick={handleStartStop}>
                    <span className={`span start-` + is_counting}>START</span>
                    <span className={`span stop-` + is_counting}>STOP</span>
                </button>
                <button className='reset-btn' onClick={handleReset}>
                    <span className='span'>RESET</span>
                </button>
            </div>
        </section>
    )
}
