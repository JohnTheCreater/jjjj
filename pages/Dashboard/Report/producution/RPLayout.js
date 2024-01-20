

import React from 'react';
import RPDetails from './RPDetails'; // Add missing import statement
import LayoutR from '../layout/LayoutR'




function RPLayout({products}) {

return (
  <LayoutR
    products={products}
    // ...

    children={products.map((product,index)=>(
      <div key={index} className='flex-shrink-0 w-full h-full '>
      <RPDetails
        key={index} // Add a unique key prop
        name={product.name}
        credited={product.credited}
        used={product.used}
        grinded={product.grinded}
        produced={product.produced}
        punnaku={product.punnaku}
        saled_oil={product.saled_oil}
        saled_punnaku={product.saled_punnaku}
      />
      </div>
    ))}
  />
);
 

}

export default RPLayout
