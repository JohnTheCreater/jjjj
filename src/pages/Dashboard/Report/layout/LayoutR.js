import React from 'react'
import DropdownL from '../../DropdownL'
import {MaterialTailwindProvider} from   '@material-tailwind/react';
import {BsFillArrowRightCircleFill,BsFillArrowLeftCircleFil} from 'react-icons/bs';

import { HiArrowCircleLeft,HiArrowCircleRight } from "react-icons/hi";
import { useState } from 'react';
import RPDetails from '../producution/RPDetails';




function ReportLayOut({products,children}) {

  
 
  let [current,setCurrent]=useState(0);
  let previousSlide = () => {
    console.log('prev')
    setCurrent((prevCurrent) => (prevCurrent - 1 + products.length) % products.length);
    
  };

  let nextSlide = () => {
    setCurrent((prevCurrent) => (prevCurrent + 1) % products.length);
  };

  if (!Array.isArray(products)) {
    // Return a message or render an empty state if products is not an array
    return <p>No products available</p>;
  }

  return (
    <div className='overflow-hidden relative'>
     <div className='flex justify-end mr-10'>
     
     </div>
      
        <div className='flex transition ease-out duration-40'
            style={{
              transform:`translateX(-${current*100}%)`
            }}>
                           {children}
        </div>

        <div className='flex justify-between absolute top-0 h-full w-full flex text-3xl p-4'>
          <button className='h-10 my-40' onClick={previousSlide}><HiArrowCircleLeft /></button>
          <button className='h-10 my-40'onClick={nextSlide}>
        <HiArrowCircleRight/></button>
        </div>
        <div className='bg-green-400 w-20 flex justify-center mx-0'>
          <button>edit</button>
        </div>
      
    </div>
  )
}

export default ReportLayOut
