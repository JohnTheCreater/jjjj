import React, { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import ReportLayOut from './Report/store/ReportLayOut';




function DropdownL({ options, onSelect }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className={`rounded mx-10 w-60 ${isDropdownOpen ? 'bg-blue-100' : ''} absolute z-10`}
    >
      <button className='flex p-2 gap-4' onClick={handleToggleDropdown}>
        <div className=''>Dropdown items</div>
        <div className='mt-1'>
          {isDropdownOpen ? <HiChevronUp /> : <HiChevronDown />}
        </div>
      </button>

      {isDropdownOpen && (
        <div className='mt-2 p-2 border-t'>
          {/* Additional elements go here */}
          {options.map((option, index) => (
            <button
              className='flex flex-col p-2 hover:bg-green-200 w-full'
              key={index}
              onClick={() => {
                onSelect(option);
                handleToggleDropdown(); // Close the dropdown after selecting an option
              }}
            >
              {option}
            </button>
            
          ))}
        </div>
      )}
    </div>
  );
}

export default DropdownL;