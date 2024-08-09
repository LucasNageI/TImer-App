import React from 'react'
import { HeaderNav, Stopwatch, LocalTime, Timer } from '../../Components/Home/index.js'
import { useParams } from 'react-router-dom'
import './Home.css'

export const Home = () => {
    const { section } = useParams()

    if (section === 'Stopwatch') {
        return (
            <main className='home'>
                <header>
                    <HeaderNav />
                </header>
                <section>
                    <Stopwatch />
                </section>
            </main>
        )
    }
    else if (section === 'LocalTime') {
        return(
        <main className='home'>
            <header>
                <HeaderNav />
            </header>
            <section>
                <LocalTime />
            </section>
        </main>
        )
    }
    else if (section === 'Timer') {
        return(
        <main className='home'>
            <header>
                <HeaderNav />
            </header>
            <section>
                <Timer />
            </section>
        </main>
        )
    }
    else {
        return(
            <main className='home'>
                <header>
                    <HeaderNav />
                </header>   
            </main>
            )
    }
}