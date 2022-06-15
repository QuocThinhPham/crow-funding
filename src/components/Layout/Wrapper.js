import React from 'react';
import PropTypes from 'prop-types';
import TopBar from './TopBar';
import Main from './Main';

const Wrapper = ({ children }) => {
   return (
      <div className='w-full h-full p-10 md:p-6 flex flex-col justify-center gap-y-[30px] lg:gap-y-5'>
         <TopBar />
         <Main>{children}</Main>
      </div>
   );
};

Wrapper.propTypes = {
   children: PropTypes.node.isRequired,
};

export default Wrapper;
