import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ children, className, ...rest }) => {
   return (
      <label
         className={`font-primary font-medium text-sm text-letter-2 dark:text-letter-3 leading-6  ${className}`}
         {...rest}
      >
         {children}
      </label>
   );
};

Label.defaultProps = {
   className: '',
};

Label.propTypes = {
   children: PropTypes.string.isRequired,
   className: PropTypes.string,
   rest: PropTypes.object,
};

export default Label;
