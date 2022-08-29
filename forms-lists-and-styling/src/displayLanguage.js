import React from 'react'
import { LanguageContext } from './app'

export class DisplayLanguage extends React.Component {
    render() {
        return (
            <>     
                <LanguageContext.Consumer>
                    {lang => (
                        lang === "it" ? <h1>Ciao, sono Riccardo</h1> : <h1>Hello, I'm Riccardo</h1>
                    )}
                </LanguageContext.Consumer> 
            </>
        )    
    } 
}