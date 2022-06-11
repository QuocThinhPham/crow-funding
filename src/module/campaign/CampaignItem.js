import React from 'react';
import CampaignPicture from 'assets/images/photo-1483366774565-c783b9f70e2c.png';
import { IconFolder, IconPlay } from 'assets/icons';
import { Description, Heading } from 'components/Typography';
import { Progress } from 'components/Loading';
// import PropTypes from 'prop-types'

const CampaignItem = () => {
   return (
      <div className='flex items-center gap-x-[30px] mb-10 last:mb-0'>
         <div className='relative rounded-[25px] group'>
            <img
               src={CampaignPicture}
               alt='Campaign'
               className='w-[583px] h-[266px] rounded-[inherit]'
            />
            <span className='scale-150 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-block p-[31px] bg-play backdrop-blur-[5px] rounded-full'>
               <IconPlay />
            </span>
         </div>
         <div className='flex flex-col flex-1 gap-y-[14px] py-5'>
            <div className='flex items-center gap-x-[10px] text-letter-3'>
               <IconFolder />
               <span className='text-sm leading-6'>Architecture</span>
            </div>
            <Heading className='font-bold text-xl'>
               Remake - We Make architecture exhibition
            </Heading>
            <Description className='max-w-[435px]'>
               Remake - We Make: an exhibition about architecture's social
               agency in the face of urbanisation
            </Description>
            <Progress className='max-w-[435px] my-[10px]' />
            <div className='flex items-center gap-x-[65px]'>
               <div className='flex flex-col gap-y-[2px]'>
                  <span className='font-bold text-lg text-letter-2 dark:text-letter-4 leading-6'>
                     $2,000
                  </span>
                  <span className='font-normal text-base text-letter-4 dark:text-letter-3 leading-6'>
                     Raised of $2,500
                  </span>
               </div>
               <div className='flex flex-col gap-y-[2px]'>
                  <span className='font-bold text-lg text-letter-2 dark:text-letter-4 leading-6'>
                     173
                  </span>
                  <span className='font-normal text-base text-letter-4 dark:text-letter-3 leading-6'>
                     Total backers
                  </span>
               </div>
               <div className='flex flex-col gap-y-[2px]'>
                  <span className='font-bold text-lg text-letter-2 dark:text-letter-4 leading-6'>
                     30
                  </span>
                  <span className='font-normal text-base text-letter-4 dark:text-letter-3 leading-6'>
                     Days left
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
};

// CampaignItem.propTypes = {}

export default CampaignItem;
