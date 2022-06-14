import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ children, className }) => {
   return (
      <p
         className={`font-primary font-normal text-sm text-letter-3 leading-normal ${
            className && className
         }`}
      >
         {children}
      </p>
   );
};

Description.defaultProps = {
   className: '',
};

Description.propTypes = {
   children: PropTypes.any.isRequired,
   className: PropTypes.string,
};

export default Description;
