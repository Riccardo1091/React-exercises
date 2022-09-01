import React, { useEffect, useRef } from 'react'
export function CarDetails({initialValues}) {

    const defaultRef = useRef()
    
    useEffect(() => {
        defaultRef.current.elements.model.value = initialValues.model
        defaultRef.current.elements.year.value = initialValues.year
        defaultRef.current.elements.color.value = initialValues.color
    }, [initialValues])
    

    return (
        <>  
            <h1>Car Details</h1>
            <form ref={defaultRef}>
                <label htmlFor="model"> Model <br/>
                    <input type="text" name="model"/>
                </label><br/>
                <label htmlFor="year"> Year <br/>
                    <input type="text" name="year"/>
                </label><br/>
                <label htmlFor="Color"> Color <br/>
                    <input type="text" name="color"/>
                </label>
            </form>
        </>
    )
}
