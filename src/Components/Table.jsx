
import React, { useState, useEffect } from 'react'
import TableData from './TableData'

function Table() {
    const [data, setData] = useState([]);


    const fetchUserData = () => {


        const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"



        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setData(data)
            })
    }
    useEffect(() => {
        fetchUserData()
    }, [])


    
    return (
        <>
            <h1>asdkfjajkdsfj</h1>
            <TableData data={data} />
        </>
    )
}

export default Table;