import PropTypes from 'prop-types';
import { DropdownProvider } from './DropdownContext';

const Dropdown = ({ children, defaultPlaceholder }) => {
   return (
      <DropdownProvider defaultPlaceholder={defaultPlaceholder}>
         <div className='relative inline-block w-full border border-input-b dark:border-secondary-dark-stroke rounded-[10px] cursor-pointer'>
            {children}
         </div>
      </DropdownProvider>
   );
};

Dropdown.propTypes = {
   children: PropTypes.any.isRequired,
};

export default Dropdown;
