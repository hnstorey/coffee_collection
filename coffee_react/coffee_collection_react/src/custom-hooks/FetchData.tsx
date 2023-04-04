import { useEffect, useState } from 'react'
import { server_calls } from '../api/server'

export const useGetData = () => {
    const [ coffeeData, setData ] = useState<[]>([])

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }
  
    useEffect( () => {
        handleDataFetch();
    }, [])

    return { coffeeData, getData:handleDataFetch }
}

export default useGetData