import { useMemo } from "react"

export function FilteredList({lista}) {

    function listaRendering(lista) {
        return lista.map(el => el.age>18 && <li key={el.id}>Name is: {el.name}, {el.age} years old</li>)      
    }

    const cachedListaRendering = useMemo(() => listaRendering(lista), [lista])

    return (
        <>
            {cachedListaRendering}
        </>
    )
}