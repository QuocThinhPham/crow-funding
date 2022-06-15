import React from 'react';

const IconMenu = ({ ...rest }) => {
   return (
      <svg
         width='24'
         height='24'
         viewBox='0 0 24 24'
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
         {...rest}
      >
         <g clipPath='url(#clip0_1233_26662)'>
            <path
               d='M2 13.4H22V10.6H2V13.4ZM2 19H22V16.2H2V19ZM2 7.8H22V5H2V7.8Z'
               fill='currentColor'
            />
         </g>
         <defs>
            <clipPath id='clip0_1233_26662'>
               <rect width='24' height='24' fill='white' />
            </clipPath>
         </defs>
      </svg>
   );
};

export default IconMenu;
