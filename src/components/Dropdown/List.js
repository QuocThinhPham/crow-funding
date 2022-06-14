import useOnClickOutside from 'hooks/useOnClickOutside';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useDropdown } from './DropdownContext';

const List = ({ children }) => {
   const { show, setShow } = useDropdown();
   const ref = useRef();
   useOnClickOutside(ref, () => setShow(false));
   return (
      <>
         {show && (
            <div
               className='z-[999] absolute top-full mt-2 py-1 w-full border border-input-b dark:border-secondary-dark-stroke rounded-[10px] bg-white dark:bg-secondary-dark-main shadow-sm overflow-hidden'
               ref={ref}
            >
               {children}
            </div>
         )}
      </>
   );
};

List.propTypes = {
   children: PropTypes.node.isRequired,
};

export default List;
