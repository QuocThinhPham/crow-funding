import { IconDark, IconLight, IconMenu } from 'assets/icons';
import Logo from 'assets/images/Logo.png';
import { Button } from 'components/Button';
import useDarkMode from 'hooks/useDarkMode';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { navigates } from 'routes';
import { toggleSidebar } from 'sagas/global/globalSlice';

const Sidebar = () => {
   const { showSidebar } = useSelector((state) => state.global);
   const dispatch = useDispatch();
   const [darkMode, setDarkMode] = useDarkMode();
   useEffect(() => {
      dispatch(toggleSidebar(false));
   }, [dispatch]);

   const renderNavigates = () => {
      const navlinkClass =
         'flex lg:gap-x-5 items-center justify-center lg:justify-start w-12 lg:w-full h-12 rounded-[10px] lg:rounded-none lg:py-[14px] lg:pl-5 cursor-pointer lg:text-sm lg:font-medium';
      return (
         navigates &&
         navigates.map((nav) => (
            <li key={nav.href} className='lg:w-full'>
               <NavLink
                  to={nav.href}
                  className={({ isActive }) =>
                     isActive
                        ? `${navlinkClass} bg-primary-extra-2 dark:bg-secondary-dark-stroke text-primary-main`
                        : `${navlinkClass} bg-transparent text-icon dark:text-letter-3 transition-all hover:bg-primary-extra-2 dark:hover:bg-secondary-dark-stroke hover:text-primary-main`
                  }
               >
                  <nav.icon />
                  <span>{nav.label}</span>
               </NavLink>
            </li>
         ))
      );
   };
   return (
      <div
         className={`w-full max-w-[76px] py-10 px-[14px] rounded-[20px] bg-white dark:bg-secondary-dark-main shadow-light dark:shadow-dark transition-transform lg:z-[9999] lg:h-full lg:px-6 lg:py-[26px] lg:fixed lg:top-0 lg:left-0 lg:max-w-none lg:max-h-screen lg:overflow-hidden lg:p-0 lg:rounded-none ${
            showSidebar ? 'translate-x-0' : '-translate-x-full'
         }`}
      >
         <div className='w-full flex items-center justify-between min-lg:hidden'>
            <img
               src={Logo}
               alt='Logo'
               loading='lazy'
               className='lg:w-10 lg:h-10'
            />
            <Button className='text-white bg-secondary-light-20%'>
               Start a campaign
            </Button>
            <div
               className='mobile-toggle text-letter-3'
               onClick={() => dispatch(toggleSidebar())}
            >
               <IconMenu className='lg:w-8 md:w-6 lg:h-8 md:h-6' />
            </div>
         </div>
         <ul className='flex flex-col flex-1 items-center gap-y-[30px] lg:gap-y-[15px] lg:py-8'>
            {renderNavigates()}
            <li
               className='mt-auto min-lg:bg-white min-lg:dark:bg-secondary-dark-main text-icon dark:text-letter-3 transition-all min-lg:shadow-light min-lg:dark:shadow-dark min-lg:hover:bg-primary-extra-2 min-lg:dark:hover:bg-secondary-dark-stroke min-lg:hover:text-primary-main flex lg:gap-x-5 items-center justify-center lg:justify-start w-12 lg:w-full h-12 rounded-[10px] lg:rounded-none lg:py-[14px] lg:pl-5 cursor-pointer'
               onClick={() => setDarkMode(!darkMode)}
            >
               {darkMode ? <IconLight /> : <IconDark />}
               <span>Light/Dark</span>
            </li>
         </ul>
      </div>
   );
};

export default Sidebar;
