import React from 'react';
// import PropTypes from 'prop-types';
import { IconArrowDown, IconArrowUp } from 'assets/icons';
import { useDropdown } from './DropdownContext';

const Placeholder = () => {
   const { defaultPlaceholder, placeholder, show, toggle } = useDropdown();
   return (
      <div
         className='flex items-center justify-between py-[15px] px-[25px] dropdown'
         onClick={toggle}
      >
         <span
            className={`dropdown-placeholder text-sm ${
               placeholder !== defaultPlaceholder
                  ? 'text-letter-1 dark:text-white'
                  : 'text-letter-4 dark:text-letter-2'
            }`}
         >
            {placeholder}
         </span>
         <span className='text-icon'>
            {show ? (
               <IconArrowUp className='dropdown-icon' />
            ) : (
               <IconArrowDown className='dropdown-icon' />
            )}
         </span>
      </div>
   );
};

// Placeholder.propTypes = {};

export default Placeholder;
