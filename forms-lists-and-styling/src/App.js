import React, { createContext, useState } from 'react'
import { DisplayLanguage } from './displayLanguage'

export const LanguageContext = createContext('it')

export function App() {
    const [lang, setLang] = useState('it')

    function handleLang(e) {
        setLang(e.target.value)
    }

    return (
        <>
            <select onChange={handleLang} name="language">
                <option value="it">Italiano</option>
                <option value="en">English</option>
            </select>
            <br/><br/>
            <LanguageContext.Provider value={lang}>
                <DisplayLanguage />
            </LanguageContext.Provider> 
        </>
    )    
}