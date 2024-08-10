import React from 'react'
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Home } from './Screens/HomePage/Home.jsx'

function App() {

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/Home/Timer" replace />} />
            <Route path="/Home/:section" element={<Home />} />
        </Routes>
    )
}

export default App
