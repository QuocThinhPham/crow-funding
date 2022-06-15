import React from 'react';
import Sidebar from './Sidebar';

const Main = ({ children }) => {
   return (
      <div className='flex items-start gap-x-10'>
         <Sidebar />
         <div className='relative w-full flex flex-col gap-y-10 md:gap-y-[30px]'>
            {children}
         </div>
      </div>
   );
};

export default Main;
