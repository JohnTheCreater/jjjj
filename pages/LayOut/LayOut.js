import React from "react";

import Header from "../../components/header/header";
function LayOut({children}){
    return(
        <div>
            <Header/>
            <div>{children}</div>
        </div>

    );
}

export default LayOut;