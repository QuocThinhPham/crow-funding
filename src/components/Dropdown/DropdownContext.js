import React, { createContext, useContext, useState } from 'react';

const DropdownContext = createContext();

const DropdownProvider = ({ children, defaultPlaceholder = '' }) => {
   const [show, setShow] = useState(false);
   const [placeholder, setPlaceholder] = useState(defaultPlaceholder);
   const toggle = () => setShow(!show);

   const values = {
      show,
      setShow,
      toggle,
      defaultPlaceholder,
      placeholder,
      setPlaceholder,
   };
   return (
      <DropdownContext.Provider value={values}>
         {children}
      </DropdownContext.Provider>
   );
};

const useDropdown = () => {
   const context = useContext(DropdownContext);
   if (typeof context === 'undefined')
      throw new Error('useDropdown must be used within a DropdownProvider');
   return context;
};

export { DropdownProvider, useDropdown };
