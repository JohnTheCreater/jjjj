  import React, { useState } from 'react';
  import LayOut from '../../LayOut/LayOut';
  import ReportLayOut from './store/ReportLayOut';
  import DropdownL from '../DropdownL';
 
import RPLayout from './producution/RPLayout';

  function Report() {
    const options = ['Madurai','Karisal' ,'Production' , 'Others'];
    const [selectedLocationKey, setSelectedLocationKey] = useState({key:options[0],index:0});

    const locationData = {
      Madurai: [
        { name: 'Sasame', ltr: 1, half_ltr: 4, ml_200: 80, ml_100: 10 },
        { name: 'Groundnut', ltr: 0, half_ltr: 2, ml_200: 0, ml_100: 0 },
        { name: 'Coconut', ltr: 12, half_ltr: 20, ml_200: 5, ml_100: 2 },
            
      ],
      Karisal: [
        { name: 'Sasame', ltr: 0, half_ltr: 3, ml_200: 0, ml_100: 10 },
        { name: 'Groundnut', ltr: 0, half_ltr: 2, ml_200: 0, ml_100: 0 },
        { name: 'Coconut', ltr: 0, half_ltr: 2, ml_200: 5, ml_100: 9 },
    
      ],
      Production: [
        { name: 'Sasame',credited:10,used:20,grinded:2,produced:10,punnaku:30,saled_oil:30,saled_punnaku:40},
        { name: 'Groundnut', credited:10,used:20,grinded:2,produced:10,punnaku:30,saled_oil:30,saled_punnaku:40 },
        { name: 'Coconut', credited:10,used:20,grinded:2,produced:10,punnaku:30,saled_oil:30,saled_punnaku:40 },
    
      ],
      Others: [
        { name: 'Sasame', ltr: 0, half_ltr: 3, ml_200: 0, ml_100: 10 },
        { name: 'Groundnut', ltr: 0, half_ltr: 2, ml_200: 0, ml_100: 0 },
        { name: 'Coconut', ltr: 0, half_ltr: 2, ml_200: 5, ml_100: 9 },
    
      ],
      
    };

    const handleLocationChange = (locationKey) => {
      const index = options.indexOf(locationKey);
      setSelectedLocationKey({ key: locationKey, index: index });
    };
    
    console.log("Selected location key:", selectedLocationKey.index,Object.keys(locationData)); 
    

    return (
      <LayOut>
        <div className='relative'>
          <DropdownL className='absolute z-20' options={Object.keys(locationData)}  onSelect={handleLocationChange} />
          <div className=''></div>
          <div className='flex justify-end m-10'>{selectedLocationKey.key} Report</div>
          { 
          }

          {(()=>{
            switch (selectedLocationKey.index){
              case 0:
              case 1:
                return <ReportLayOut className='z-10'onSelect={handleLocationChange} products={locationData[selectedLocationKey.key]} />;
              case 2:
                return <RPLayout className='z-10'onSelect={handleLocationChange} products={locationData[selectedLocationKey.key]}/>;
              // case 3:
              //   return <
              
              default:
                return null;
            }
          })()}
            {console.log(locationData[selectedLocationKey.key])}
          
        </div>
      </LayOut>
    );
  }

  export default Report;
