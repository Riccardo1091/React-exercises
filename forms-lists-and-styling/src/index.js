import {App} from './app'
import {createRoot} from 'react-dom/client'
import "./index.css"

const root = createRoot(document.querySelector('#root'))
root.render(<App tab="home"/>)