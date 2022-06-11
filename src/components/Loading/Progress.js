import React from 'react';
import PropTypes from 'prop-types';

const Progress = ({ className }) => {
   return (
      <div
         className={`block h-[5px] rounded-[5px] bg-slate-100 before:content-[''] before:block before:w-[63.21%] before:h-full before:bg-primary-20% before:rounded-[inherit] ${
            className && className
         }`}
      ></div>
   );
};

Progress.defaultProps = {
   className: '',
};

Progress.propTypes = {
   className: PropTypes.string,
};

export default Progress;
