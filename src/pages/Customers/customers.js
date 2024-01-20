import React from "react";


import LayOut from "../LayOut/LayOut";
import BillLayout from "./BillLayout/BillLayout";

function Customers(){
    return(
        <LayOut>
            <div className="text-black bg-blue-100">
              
                <BillLayout/>

            </div>
        </LayOut>

    );
}

export default Customers;