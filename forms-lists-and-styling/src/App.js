import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ClickCounter } from './clickCounter'
import { Welcome }  from './welcome'

export function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Welcome name="Riccardo"/>} />
                    <Route path='/counter' element={<ClickCounter initialValue={5} increment={5}/>} />
                </Routes>
            </BrowserRouter>
        </>
         
    )    
}