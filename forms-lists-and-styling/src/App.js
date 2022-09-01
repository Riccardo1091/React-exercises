import React from 'react'
import { FilteredList } from './filteredList'

const lista = [
    {id:1, name:"Riccardo", age:30},
    {id:2, name:"Gino", age:15},
    {id:3, name:"Lino", age:32},
    {id:4, name:"Pino", age:10},
    {id:5, name:"Rino", age:34},
    {id:6, name:"Mino", age:5}
]

export function App() {
    return (
        <>  
            <FilteredList lista={lista}/>
        </>
    )    
}
