import React from 'react';
import PropTypes from 'prop-types';
import { useDropdown } from './DropdownContext';

const Option = ({ children, data }) => {
   const { setShow, setPlaceholder } = useDropdown();
   return (
      <div
         className='flex items-center justify-between py-[15px] px-[25px] transition-all text-sm hover:bg-primary-extra-2 dark:hover:bg-secondary-dark-stroke'
         onClick={() => {
            setPlaceholder(data.name);
            setShow(false);
         }}
      >
         {children}
      </div>
   );
};

Option.propTypes = {
   children: PropTypes.string.isRequired,
};

export default Option;
