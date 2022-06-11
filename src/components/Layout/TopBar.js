import React from 'react';
import Logo from 'assets/images/Logo.png';
import Avatar from 'assets/images/Avatar.png';
import { IconArrowDown, IconUp } from 'assets/icons';
import { Button } from 'components/Button';

const TopBar = () => {
   return (
      <div className='flex items-center justify-between px-3'>
         <div className='flex items-center gap-x-[53px]'>
            <img src={Logo} alt='Logo' loading='lazy' />
            <div className='relative w-[458px] h-[52px] shadow-light dark:shadow-dark rounded-[100px]'>
               <input
                  type='text'
                  placeholder='Do fundrise now'
                  className='relative block w-full h-full px-[25px] rounded-[inherit] font-primary text-sm font-normal dark:bg-secondary-dark-main text-letter-1 dark:text-white placeholder:text-letter-4 dark:placeholder:text-letter-2'
               />
               <button className='absolute top-[6px] right-[7px] flex items-center justify-center rounded-[20px] px-[27px] py-[11px] transition-all bg-primary-20% hover:bg-opacity-70'>
                  <svg
                     width='19'
                     height='18'
                     viewBox='0 0 19 18'
                     fill='none'
                     xmlns='http://www.w3.org/2000/svg'
                  >
                     <g clipPath='url(#clip0_2185_18937)'>
                        <path
                           d='M16.9702 16.5L13.2202 12.75M15.0952 8.0625C15.0952 8.9243 14.9255 9.77766 14.5957 10.5739C14.2659 11.3701 13.7825 12.0935 13.1731 12.7029C12.5637 13.3123 11.8403 13.7957 11.0441 14.1255C10.2479 14.4553 9.39451 14.625 8.53271 14.625C7.67092 14.625 6.81755 14.4553 6.02135 14.1255C5.22516 13.7957 4.50171 13.3123 3.89233 12.7029C3.28294 12.0935 2.79955 11.3701 2.46976 10.5739C2.13996 9.77766 1.97021 8.9243 1.97021 8.0625C1.97021 6.32202 2.66162 4.65282 3.89233 3.42211C5.12303 2.1914 6.79223 1.5 8.53271 1.5C10.2732 1.5 11.9424 2.1914 13.1731 3.42211C14.4038 4.65282 15.0952 6.32202 15.0952 8.0625Z'
                           stroke='white'
                           strokeWidth='2'
                           strokeLinecap='round'
                           strokeLinejoin='round'
                        />
                     </g>
                     <defs>
                        <clipPath id='clip0_2185_18937'>
                           <rect
                              width='18'
                              height='18'
                              fill='white'
                              transform='translate(0.470215)'
                           />
                        </clipPath>
                     </defs>
                  </svg>
               </button>
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
