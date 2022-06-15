import { IconFolder } from 'assets/icons';
import { Description, Heading } from 'components/Typography';
import React from 'react';
import Avatar from 'assets/images/Avatar.png';

const CampaignCard = ({ imgSrc }) => {
   return (
      <div className='flex flex-col rounded-[15px] shadow-card dark:shadow-none bg-white dark:bg-secondary-dark-main'>
         <div className='rounded-[inherit]'>
            <img src={imgSrc} alt='Card' className='w-full max-h-[158px]' />
         </div>
         <div className='flex flex-col flex-1 px-5 py-[15px]'>
            <div className='flex items-center gap-x-[10px] text-letter-3 mb-[15px] md:mb-3'>
               <IconFolder width='18' height='18' />
               <span className='font-medium text-xs leading-normal'>
                  Real Estate
               </span>
            </div>
            <Heading className='md:text-sm'>New iMac For My Business!</Heading>
            <Description className='text-xs mt-[5px] md:mt-[10px]'>
               My computer decided to die. As a result, my small business.
            </Description>
            <div className='flex items-center justify-between mt-[15px] md:mt-[10px]'>
               <div className='flex flex-col gap-y-[2px] md:gap-y-[3px]'>
                  <span className='font-semibold text-sm md:text-xs text-letter-2 dark:text-letter-4 leading-normal'>
                     $2,000
                  </span>
                  <span className='font-normal text-xs text-letter-4 dark:text-letter-3 leading-normal'>
                     Raised of $2,500
                  </span>
               </div>
               <div className='flex flex-col gap-y-[2px] md:gap-y-[3px]'>
                  <span className='font-semibold text-sm md:text-xs text-letter-2 dark:text-letter-4 leading-normal'>
                     173
                  </span>
                  <span className='font-normal text-xs text-letter-4 dark:text-letter-3 leading-normal'>
                     Total backers
                  </span>
               </div>
            </div>
            <div className='mt-5 flex items-center gap-x-[10px] text-xs text-letter-3 leading-normal'>
               <img src={Avatar} alt={Avatar} className='w-[30px] h-[30px]' />
               <span>by</span>
               <span className='font-semibold text-letter-2 dark:text-letter-4'>
                  Mahfuzul Nabil
               </span>
            </div>
         </div>
      </div>
   );
};

export default CampaignCard;
