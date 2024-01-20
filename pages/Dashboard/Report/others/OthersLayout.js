import React from 'react'


function OthersLayout({fe_goat,ma_goat,sm_fe_goat,sm_ma_goat,}) {
  return (
    <div className='flex'>
      <div className='  mx-20 mt-10 mb-40'>
        <h1 className='flex m-5 text-2xl'>sold products</h1>
        <div className='border w-96 h-60 rounded-2xl bg-grey'></div>
        </div>
        <div className='mr-80 mt-5 text-3xl'>{oilName} Oil</div>
        <div className='flex gap-3  mr-40 mt-20 flex-col'>
            <span className='text-2xl'>day's stack</span>
            <div className="p-4 mb-4 bg-white border border-gray-200 bg-gray-200 rounded shadow-xl">
      <span className="inline-block mb-2 mr-8  ">1 ltr:</span> {ltr}
      <br />
      <span className="inline-block mb-2 mr-4 ">1/2 ltr:</span> {half_ltr}
      <br />
      <span className="inline-block mb-2 mr-3">200 ml:</span> {ml_200}
      <br />
      <span className="inline-block mr-3 ">100 ml:</span> {ml_100}
   
   </div>
      
    </div>
    </div>
  )
}

export default OthersLayout
