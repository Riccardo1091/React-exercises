import React, { createContext } from 'react'
import { DisplayLanguage } from './displayLanguage'

const LanguageContext = createContext('it')

export class App extends React.Component {
    state = {
        language: 'it'
    }

    handleLang = e => {
        this.setState({
            language: e.target.value
        })
    }

    render() {
        return (
            <>
                <select onChange={this.handleLang} name="language">
                    <option value="it">Italiano</option>
                    <option value="en">English</option>
                </select>
                <LanguageContext.Provider value={this.state.language}>
                    <DisplayLanguage />
                </LanguageContext.Provider> 
            </>
        )    
    } 
}