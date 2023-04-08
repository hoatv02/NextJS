import axios from "axios";
import { useEffect, useState } from "react";


export default function Fetch (url) {
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)
    const [data, setData] = useState(null)

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const response = await axios.get(url)
                setData(response)
                setLoading(false)
            } catch (error) {
                setLoading(false)
            }
        }
        fetchData()
    },[url])

    return {data,loading,error}
}
