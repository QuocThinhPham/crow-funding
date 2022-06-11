import { IconDark, IconLight } from 'assets/icons';
import useDarkMode from 'hooks/useDarkMode';
import { NavLink } from 'react-router-dom';
import { navigates } from 'routes';

const Sidebar = () => {
   const [darkMode, setDarkMode] = useDarkMode();
   const renderNavigates = () => {
      const navlinkClass =
         'flex items-center justify-center w-12 h-12 rounded-[10px] cursor-pointer';
      return (
         navigates &&
         navigates.map((nav) => (
            <li key={nav.href}>
               <NavLink
                  to={nav.href}
                  className={({ isActive }) =>
                     isActive
                        ? `${navlinkClass} bg-primary-extra-2 dark:bg-secondary-dark-stroke text-primary-main`
                        : `${navlinkClass} bg-transparent text-icon dark:text-letter-3 transition-all hover:bg-primary-extra-2 dark:hover:bg-secondary-dark-stroke hover:text-primary-main`
                  }
               >
                  <nav.icon />
               </NavLink>
            </li>
         ))
      );
   };
   return (
      <div className='w-full max-w-[76px] h-full py-10 px-[14px] rounded-[20px] bg-white dark:bg-secondary-dark-main shadow-light dark:shadow-dark'>
         <ul className='flex flex-col flex-1 items-center gap-y-[30px]'>
            {renderNavigates()}
            <li
               className='mt-auto flex items-center justify-center w-12 h-12 rounded-[10px] bg-white dark:bg-secondary-dark-main text-icon dark:text-letter-3 transition-all shadow-light dark:shadow-dark hover:bg-primary-extra-2 dark:hover:bg-secondary-dark-stroke hover:text-primary-main cursor-pointer'
               onClick={() => setDarkMode(!darkMode)}
            >
               {darkMode ? <IconLight /> : <IconDark />}
            </li>
         </ul>
      </div>
   );
};

export default Sidebar;
