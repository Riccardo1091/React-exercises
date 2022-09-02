import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Welcome }  from './welcome'

export function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Welcome name="Riccardo"/>} />
                </Routes>
            </BrowserRouter>
        </>
         
    )    
}