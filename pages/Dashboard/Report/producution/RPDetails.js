import React from 'react'


function RPDetails({name,credited,used,grinded,produced,punnaku,saled_oil,saled_punnaku}) {
  return (
    <div className='flex'>
      <div className='  mx-20 mt-10 mb-40'>
        <h1 className='flex m-5 text-2xl'>sold products</h1>
        <div className='border w-96 h-60 rounded-2xl bg-grey'></div>
        </div>
        <div className='mr-80 mt-5 flex w-full text-3xl'>{name} Oil</div>
        <div className='flex gap-3  mr-40 mt-20 flex-col'>
            <span className='text-2xl'>day's stack</span>
            <div className="p-4 mb-4  w-60 border border-gray-200 bg-gray-200 rounded shadow-xl">
      <span className="inline-block mb-2 mr-4">credited:</span> {credited}
      
      <br />
      <span className="inline-block mb-2 mr-4 ">used:</span> {used}
      <br />
      <span className="inline-block mb-2 mr-4">grinded:</span> {grinded}
      <br />
      <span className="inline-block mb-2 mr-4 ">produced:</span> {produced}
      <br/>
     
      <span className="inline-block mb-2 mr-4 ">punnaku:</span> {punnaku}
      <br />
      <span className="inline-block mb-2 mr-3">saled_oil:</span> {saled_oil}
      <br />
      <span className="inline-block mr-4 ">saled_punnaku        :</span> {saled_punnaku}
   
   </div>
      
    </div>
    </div>
  )
}

export default RPDetails
