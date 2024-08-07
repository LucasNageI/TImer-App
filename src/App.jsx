import React, { useEffect, useState } from 'react'
import './App.css'

function App() {

    const [is_counting, setChange] = useState(false)
    
    let time = 0

    useEffect(() => {   

    }, [is_counting])

    const handleStartStop = () => {
        setChange(!is_counting)
        const countdown = setInterval(() => {
            if(time >= 0) {
                console.log(time)
                time++
            }
        }, 1000)
    }

  return (
    <main className='main-app'>
        <section className='section'>
            <div>
                <span>
                    <input type="number" />
                </span>
            </div>
            <div className='timer-container'>
                <span className='timer'>{time} s</span>
            </div>
            <div className='stop'>
                <button className='start-stop-btn' onClick={handleStartStop}>
                    <span className={`span start-` + is_counting}>START</span>
                    <span className={`span stop-` + is_counting}>STOP</span>
                </button>
            </div>  
        </section>
    </main>
  )
}

export default App
