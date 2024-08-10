import React from 'react'
import { Link } from 'react-router-dom'
import './HeaderNav.css'

export const HeaderNav = () => {
  return (
    <header className='header'>
        <nav className='nav-bar'>
            <Link className='link' to={'/Home/Timer'}>Timer</Link>
            <Link className='link' to={'/Home/Stopwatch'}>Stopwatch</Link>
            <Link className='link' to={'/Home/LocalTime'}>LocalTime</Link>
        </nav>
    </header>
  )
}
