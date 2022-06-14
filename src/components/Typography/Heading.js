import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ children, className }) => {
   return (
      <h3
         className={`font-primary font-semibold text-letter-1 dark:text-white leading-normal ${
            className && className
         }`}
      >
         {children}
      </h3>
   );
};

Heading.defaultProps = {
   className: '',
};

Heading.propTypes = {
   children: PropTypes.any.isRequired,
   className: PropTypes.string,
};

export default Heading;
