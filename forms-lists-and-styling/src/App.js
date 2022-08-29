import React from 'react'
import { TodoList }  from './todoList'

export class App extends React.Component {
    render() {
        return (
            <TodoList>
                {({items, addTodo, resetList, delTodo}) => {
                    return (
                        <div className="container w-96 m-5">
                            <h1 className="text-3xl font-bold text-center mb-3">TO DO LIST</h1>
                            <form className="text-md font-small flex items-center justify-between mb-3 pb-4 gap-4 rounded-t-lg border-b border-gray-200 dark:border-gray-600" onSubmit={addTodo}>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="addTodo" type="text"/>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 px-2 rounded" type="reset" onClick={resetList}>Reset</button>
                                <button className="bg-green-500 hover:bg-blue-700 text-white font-bold p-2 px-2 rounded" type="submit">Add</button>
                            </form>
                            <ul className="text-lg font-small text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                {items.map((item, index) => <li className="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600 flex items-center justify-between" key={item + index}>{item} <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={() => delTodo(item)}> Delete</button></li>)}
                            </ul>
                        </div>
                    )
                }}  
            </TodoList>  
        )    
    } 
}



// render={({items, addTodo, resetList, delTodo}) => {
//     return (
//         <div className="container w-96 m-5">
//             <h1 className="text-3xl font-bold text-center mb-3">TO DO LIST</h1>
//             <form className="text-md font-small flex items-center justify-between mb-3 pb-4 gap-4 rounded-t-lg border-b border-gray-200 dark:border-gray-600" onSubmit={addTodo}>
//                 <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="addTodo" type="text"/>
//                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 px-2 rounded" type="reset" onClick={resetList}>Reset</button>
//                 <button className="bg-green-500 hover:bg-blue-700 text-white font-bold p-2 px-2 rounded" type="submit">Add</button>
//             </form>
//             <ul className="text-lg font-small text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
//                 {items.map((item, index) => <li className="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600 flex items-center justify-between" key={item + index}>{item} <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={() => delTodo(item)}> Delete</button></li>)}
//             </ul>
//         </div>
//     )
// }}