import React from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import { ClickCounter } from './clickCounter'
import { Welcome }  from './welcome'
import { ShowGithubUser } from './showGithubUser'
import { GithubUserList } from './githubUserList'

export function App() {
    return (
        <>
            <BrowserRouter>
                <div className="inline-flex rounded-md shadow-sm">
                    <Link aria-current="page" className="py-2 px-4 text-sm font-medium text-blue-700 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white" to="/">Home</Link>
                    <Link className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white" to="/counter">Counter</Link>
                    <Link className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white" to="/users/riccardo1091">Username</Link>
                </div><br/>
                <Routes>
                    <Route
                        path='*'
                        element={
                        <>
                            <h1>Not Found</h1><br/>
                            <Link className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white" to="/">Return to Home</Link>
                        </>
                        }
                    />
                    <Route path='/' element={<Welcome name="Riccardo"/>} />
                    <Route path='/counter' element={<ClickCounter initialValue={5} increment={5}/>} />
                    <Route path='/users' element={<div><GithubUserList usernames={["Riccardo1091", "MAugelli", "msimile", "rickcrypto90"]}/><hr/><Outlet/></div>}>
                        <Route path=':username' element={<ShowGithubUser/>} />
                    </Route>
                    {/* <Route path='/users/:username' element={<ShowGithubUser/>} />  */}
                </Routes>
            </BrowserRouter>
        </>
         
    )    
}