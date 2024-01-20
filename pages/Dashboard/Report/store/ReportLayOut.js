import React, { Children } from 'react'
import LayoutR from '../layout/LayoutR'
import RStoreDetails from './RStoreDetails';



function ReportLayOut({products}){


  return (
         <LayoutR 
         products={products}
           children={products.map((product,index)=>(
            <div key={index} className='flex-shrink-0 w-full h-full '>
              {<RStoreDetails 
              key={index}
              ltr={product.ltr}
              half_ltr={product.half_ltr}
              ml_200={product.ml_200}
              ml_100={product.ml_100}
              oilName={product.name}/>}
              
              </div>
             
            
            ))
           }
           />
  )
}

export default ReportLayOut
