import { useState, useEffect } from "react"

export function UseGithubUser(loc) {
    const [location, setLocation] = useState(loc)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        try {
        setLoading(true)
        navigator.geolocation.getCurrentPosition(position => {
            setLocation(position)
          })
        } catch(e) {
            setError(e)
        } finally {
            setLoading(false)
        }
    }, [loc])

   function trovami() {
    try {
        setLoading(true)
        navigator.geolocation.getCurrentPosition((position) => {
            return {
                X: position.coords.latitude,
                Y: position.coords.longitude
            }
        })
    } catch(e) {
        setError(e)
    } finally {
        setLoading(false)
    }
    
   } 

    return {
        location, error, loading, trovami
    }
}