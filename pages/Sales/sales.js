import React from "react";

import Header from "../../components/header/header";
import LayOut from "../LayOut/LayOut";
import { useState,useEffect } from "react";
function Sales(){
    const [data,setData]=useState(null);

        useEffect(()=>{

            fetch('/api')
                .then((res)=>res.json())
                .then((data)=> setData(data.message));

        },[]);

    

    return(
        <LayOut>
            <div>
                <h1>{!data?'loading':data}</h1>
            </div>
        </LayOut>

    );

}



export default Sales;