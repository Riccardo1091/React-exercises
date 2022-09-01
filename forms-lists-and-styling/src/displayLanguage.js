import React, { useContext } from 'react'
import { LanguageContext } from './app'

export function DisplayLanguage() {
    const language = useContext(LanguageContext)
    const versioni = {
        it: {italiano: "Ciao, sono Riccardo"},
        en: {inglese: "Hi, I'm Riccardo"}
    }

    return (
        <>     
            {versioni[language].italiano}
            {versioni[language].inglese}
        </>
    )    
}