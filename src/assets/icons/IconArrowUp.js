import React from 'react';

const IconArrowUp = ({ ...rest }) => {
   return (
      <svg
         width='24'
         height='24'
         viewBox='0 0 24 24'
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
         {...rest}
      >
         <path
            d='M7 14L12 9L17 14'
            stroke='currentColor'
            strokeWidth='2'
            {...rest}
         />
      </svg>
   );
};

export default IconArrowUp;
