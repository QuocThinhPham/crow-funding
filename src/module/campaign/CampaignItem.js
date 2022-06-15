import React from 'react';
import CampaignPicture from 'assets/images/photo-1483366774565-c783b9f70e2c.png';
import { IconFolder, IconPlay } from 'assets/icons';
import { Description, Heading } from 'components/Typography';
import { Progress } from 'components/Loading';
// import PropTypes from 'prop-types'

const CampaignItem = () => {
   return (
      <div className='lg:w-max md:w-full lg:mx-auto flex lg:flex-col items-center lg:items-start gap-x-[30px] mb-10 md:mb-5 md:last:mb-[25px]'>
         <div className='relative rounded-[25px] group'>
            <img
               src={CampaignPicture}
               alt='Campaign'
               className='w-[583px] h-[266px] lg:h-[300px] md:h-[210px] rounded-[inherit]'
            />
            <span className='min-lg:scale-150 min-lg:opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-block p-[31px] bg-play backdrop-blur-[5px] rounded-full'>
               <IconPlay />
            </span>
         </div>
         <div className='flex flex-col flex-1 gap-y-[14px] py-5'>
            <div className='flex items-center gap-x-[10px] text-letter-3'>
               <IconFolder />
               <span className='text-sm leading-normal'>Architecture</span>
            </div>
            <Heading className='font-bold md:font-semibold text-xl md:text-lg'>
               Remake - We Make architecture exhibition
            </Heading>
            <Description className='max-w-[435px] md:text-[13px]'>
               Remake - We Make: an exhibition about architecture's social
               agency in the face of urbanisation
            </Description>
            <Progress className='max-w-[435px] my-[10px]' />
            <div className='flex items-center md:justify-between gap-x-[65px] md:gap-x-0'>
               <div className='flex flex-col gap-y-[2px]'>
                  <span className='font-bold text-lg md:text-base text-letter-2 dark:text-letter-4 leading-normal'>
                     $2,000
                  </span>
                  <span className='font-normal text-base md:text-sm text-letter-4 dark:text-letter-3 leading-normal'>
                     Raised of $2,500
                  </span>
               </div>
               <div className='flex flex-col gap-y-[2px]'>
                  <span className='font-bold text-lg md:text-base text-letter-2 dark:text-letter-4 leading-normal'>
                     173
                  </span>
                  <span className='font-normal text-base md:text-sm text-letter-4 dark:text-letter-3 leading-normal'>
                     Total backers
                  </span>
               </div>
               <div className='flex flex-col gap-y-[2px]'>
                  <span className='font-bold text-lg md:text-base text-letter-2 dark:text-letter-4 leading-normal'>
                     30
                  </span>
                  <span className='font-normal text-base md:text-sm text-letter-4 dark:text-letter-3 leading-normal'>
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
