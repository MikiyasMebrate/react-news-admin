import { useEffect, useState } from "react"
import axios from 'axios'


let useFetch =(url)=>{
    const [data, setData] = useState(null)
    const [pending, setPending] = useState(true)
    const [error, setError] = useState(null)


    useEffect(()=>{
        axios.get(url)
        .then((data) =>{
            setData(data)
            setPending(false)
        })
        .catch((err) => {
            setError(err.message)
            setPending(false)
        })
    },[url])

    return [data, pending, error]
}

export default useFetch