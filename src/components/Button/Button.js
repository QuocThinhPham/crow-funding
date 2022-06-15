import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Button = ({ children, to, type, className, ...rest }) => {
   let buttonClass = `flex items-center justify-center px-[26px] py-[13px] md:py-[9px] rounded-[10px] md:rounded-[5px] font-primary font-semibold text-base leading-normal transition-all`;

   if (to)
      return (
         <NavLink to={to} className={`${buttonClass} ${className}`} {...rest}>
            {children}
         </NavLink>
      );
   return (
      <button type={type} className={`${buttonClass} ${className}`} {...rest}>
         {children}
      </button>
   );
};

Button.defaultProps = {
   to: '',
   type: 'button',
   className: '',
};

Button.propTypes = {
   children: PropTypes.any.isRequired,
   to: PropTypes.string,
   type: PropTypes.string,
   className: PropTypes.string,
   rest: PropTypes.object,
};

export default Button;
