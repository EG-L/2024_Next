import { useState,useEffect } from "react"
import { useQuery } from "react-query"
import axios from "axios"


function Funding(){

    useEffect(()=>{
        axios.get('http://localhost/1').then(response=>{
            console.log(response.data)
        })
    },[])
    return(
        <div>
            <h1>Funding Main</h1>
        </div>
    )
}

export default Funding