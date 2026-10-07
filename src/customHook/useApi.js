import React, { useEffect, useState } from 'react'

export default function useApi(apiPath,extra=[]) {

    let [result,setResult]=useState([]);

    useEffect(()=>{
        fetch(apiPath)
        .then(res=>res.json())
        .then(value=>{console.log(value);
            setResult(value);
        }
    );
    },extra)

    return result;
}


