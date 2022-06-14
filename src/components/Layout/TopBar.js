import React from 'react';
import Logo from 'assets/images/Logo.png';
import Avatar from 'assets/images/Avatar.png';
import { IconArrowDown, IconSearch, IconUp } from 'assets/icons';
import { Button } from 'components/Button';

const TopBar = () => {
   return (
      <div className='md:hidden flex items-center justify-between px-3'>
         <div className='flex items-center gap-x-[53px]'>
            <img src={Logo} alt='Logo' loading='lazy' />
            <div className='relative w-[458px] h-[52px] shadow-light dark:shadow-dark rounded-[100px]'>
               <input
                  type='text'
                  placeholder='Do fundrise now'
                  className='relative block w-full h-full px-[25px] rounded-[inherit] font-primary text-sm font-normal dark:bg-secondary-dark-main text-letter-1 dark:text-white placeholder:text-letter-4 dark:placeholder:text-letter-2'
               />
               <Button className='absolute top-[6px] right-[7px] !rounded-[20px] !px-[27px] !py-[11px] bg-primary-20%'>
                  <IconSearch />
               </Button>
            </div>
         </div>
         <div className='flex items-center gap-x-10'>
            <div className='flex items-center gap-x-[7px] text-icon dark:text-letter-3'>
               <IconUp />
               <span className='font-primary font-semibold text-base text-letter-2 dark:text-letter-3'>
                  Fundrising for
               </span>
               <IconArrowDown />
            </div>
            <Button className='text-white bg-secondary-light-20%'>
               Start a campaign
            </Button>
            {/* <button className='flex items-center justify-center px-[26px] py-[13px] rounded-[10px] bg-secondary-light-1/5 hover:bg-opacity-70 text-white font-primary font-semibold text-base transition-all'>
               Start a campaign
            </button> */}
            <div>
               <img src={Avatar} alt='Avatar' />
            </div>
         </div>
      </div>
   );
};

export default TopBar;
