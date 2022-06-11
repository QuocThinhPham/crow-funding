import React from 'react';
import Sidebar from './Sidebar';

const Main = ({ children }) => {
   return (
      <div className='flex items-start gap-x-10 flex-1'>
         <Sidebar />
         <div className='w-full flex flex-col gap-y-10'>{children}</div>
      </div>
   );
};

export default Main;
