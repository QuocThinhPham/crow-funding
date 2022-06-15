import React from 'react';
import PropTypes from 'prop-types';

const Textarea = ({ name, rows, className, ...rest }) => {
   return (
      <textarea
         name={name}
         id={rest.id || name}
         className='w-full py-[15px] px-[25px] bg-transparent dark:border-secondary-dark-stroke border border-input-b rounded-[10px] leading-normal text-sm text-letter-1 dark:text-white placeholder:text-letter-4 dark:placeholder:text-letter-2 resize-y'
         rows={rows}
         {...rest}
      />
   );
};

Textarea.defaultProps = {
   className: '',
   rows: 5,
};

Textarea.propTypes = {
   className: PropTypes.string,
   rows: PropTypes.number,
   rest: PropTypes.object,
};

export default Textarea;
