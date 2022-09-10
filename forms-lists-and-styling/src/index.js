// import {App} from './app'
// import {createRoot} from 'react-dom/client'
import {counterReducer} from './state/CounterReducer'
import { combineReducers, legacy_createStore as createStore } from 'redux'
import { TodosReducer } from './state/TodosReducer'

const rootReducer = combineReducers({
    counter: counterReducer,
    todos: TodosReducer.reducer //con toolkit
  })

let store = createStore(rootReducer)
store.subscribe(() => console.log(store.getState()))

store.dispatch({type: 'counter/increment', by: 1})
store.dispatch({type: 'counter/decrement', by: 3})
store.dispatch({type: 'counter/reset'})

store.dispatch(TodosReducer.actions.add({id: 1, title: "Redux è una giungla", completed: true}))
store.dispatch(TodosReducer.actions.add({id: 2, title: "Redux è un po' una follia", completed: true}))
store.dispatch(TodosReducer.actions.remove(2))
store.dispatch(TodosReducer.actions.edit([1, {completed: false}]))



// const root = createRoot(document.querySelector('#root'))
// root.render(<App tab="home"/>)

