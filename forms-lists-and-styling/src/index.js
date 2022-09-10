// import {App} from './app'
// import {createRoot} from 'react-dom/client'
import {counterReducer} from './storeCounter/CounterReducer'
import { legacy_createStore as createStore } from 'redux'

let store = createStore(counterReducer)
store.subscribe(() => console.log(store.getState()))

store.dispatch({type: 'counter/increment', by: 1})
store.dispatch({type: 'counter/decrement', by: 3})
store.dispatch({type: 'counter/reset'})

// const root = createRoot(document.querySelector('#root'))
// root.render(<App tab="home"/>)

