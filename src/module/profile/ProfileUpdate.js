import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'components/Typography';
import { Button } from 'components/Button';
import { IconEdit } from 'assets/icons';

const ProfileUpdate = ({ children, title }) => {
   return (
      <div className='w-full mb-[51px] last:mb-0 md:mb-8'>
         <div className='flex items-center justify-between'>
            <Heading className='font-bold text-xl md:text-base'>
               {title}
            </Heading>
            <Button className='md:!p-0'>
               <Heading className='text-xl md:text-sm text-secondary-light-20% dark:text-secondary-light-20% flex items-center gap-x-[10px]'>
                  <IconEdit className='md:w-[18px] md:h-[18px]' />
                  Edit
               </Heading>
            </Button>
         </div>
         <div className='mt-[35px] md:mt-[15px] flex flex-col gap-y-[25px] md:gap-y-[15px]'>
            {children}
         </div>
      </div>
   );
};

ProfileUpdate.propTypes = {
   children: PropTypes.any.isRequired,
   title: PropTypes.string.isRequired,
};

export default ProfileUpdate;
