import React from 'react';

const Loading = () => {
   return (
      <div className='flex items-center justify-center w-screen h-screen bg-[#D2F2E3] dark:bg-secondary-dark-stroke'>
         <div className='inline-block relative w-20 h-20'>
            <div className='absolute border-4 border-secondary-light-main dakrk:border-primary-main opacity-100 rounded-full animate-lds-ripple'></div>
            <div className='absolute border-4 border-secondary-light-main dakrk:border-primary-main opacity-100 rounded-full animate-lds-ripple-delay'></div>
         </div>
      </div>
   );
};

export default Loading;
