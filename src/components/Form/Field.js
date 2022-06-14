import React from 'react';
import PropTypes from 'prop-types';

const Field = ({ children, className }) => {
   return (
      <div
         className={`w-full flex flex-col items-start gap-y-[10px] ${
            className && className
         }`}
      >
         {children}
      </div>
   );
};

Field.defaultProps = {
   className: '',
};

Field.propTypes = {
   children: PropTypes.any.isRequired,
   className: PropTypes.string,
};

export default Field;
