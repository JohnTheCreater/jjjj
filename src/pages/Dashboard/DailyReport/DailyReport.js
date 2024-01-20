import React from 'react'

function DailyReport({day,date,month,year}) {
  return (
    <div>
       
        <div className="border p-10 m-10 rounded-xl bg-gradient-linear">
                    <a href="#" data-page="dashboard/report/report.html" >
                       <div className='flex gap-4 text-2xl '>
                            <span class="day">{day}</span>
                            <div className="font-bold"><span >{date}</span></div>
                        </div>                                            
                        <span className='mt-10 mr-2'>{month}</span>
                        <span className='mt-10 mr-2'>{year}</span>
                    </a>
                </div>
          </div>
    
  )
}

export default DailyReport
