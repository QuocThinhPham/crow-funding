import PropTypes from 'prop-types';

const Input = ({ type, name, className, icon, ...rest }) => {
   let inputIconClass = '';
   if (icon) {
      inputIconClass += icon?.left ? 'pl-[69px] ' : '';
      inputIconClass += icon?.right ? 'pr-[69px]' : '';
   }
   return (
      <div className='relative w-full'>
         <input
            type={type}
            name={name}
            id={rest.id || name}
            className={`relative w-full py-[15px] px-[25px] bg-transparent border border-input-b dark:border-secondary-dark-stroke rounded-[10px] leading-6 text-sm text-letter-1 dark:text-white placeholder:text-letter-4 dark:placeholder:text-letter-2 ${inputIconClass} ${
               className && className
            }`}
            {...rest}
         />
         {icon?.left && (
            <div className='absolute top-4 left-[25px] text-icon'>
               {icon?.left}
            </div>
         )}
         {icon?.right && (
            <div className='absolute top-4 right-[25px] text-icon'>
               {icon?.right}
            </div>
         )}
      </div>
   );
};

Input.defaultProps = {
   type: 'text',
   className: '',
   icon: {},
};

Input.propTypes = {
   type: PropTypes.string,
   name: PropTypes.string.isRequired,
   className: PropTypes.string,
   icon: PropTypes.shape({ left: PropTypes.node, right: PropTypes.node }),
   rest: PropTypes.object,
};

export default Input;
