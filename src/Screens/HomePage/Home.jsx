import React from 'react'
import { HeaderNav, Stopwatch, LocalTime, Timer } from '../../Components/Home/index.js'
import { useParams } from 'react-router-dom'
import './Home.css'

export const Home = () => {
    const { section } = useParams()

    if (section === 'Timer') {
        return (
            <main className='home'>
                <HeaderNav />
                <Timer />
            </main>
        )
    }

    else if (section === 'Stopwatch') {
        return (
            <main className='home'>
                <HeaderNav />
                <Stopwatch />
            </main>
        )
    }

    else if (section === 'LocalTime') {
        return (
            <main className='home'>
                <HeaderNav />
                <LocalTime />
            </main>
        )
    }

    else {
        return (
            <main className='home'>
                <HeaderNav />
            </main>
        )
    }
}