import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'components/Typography';
import { Button } from 'components/Button';
import { IconEdit } from 'assets/icons';

const ProfileUpdate = ({ children, title }) => {
   return (
      <div className='w-full mb-[51px]'>
         <div className='flex items-center justify-between'>
            <Heading className='font-bold text-xl'>{title}</Heading>
            <Button>
               <Heading className='text-xl text-secondary-light-20% dark:text-secondary-light-20% flex items-center gap-x-[10px]'>
                  <IconEdit />
                  Edit
               </Heading>
            </Button>
         </div>
         <div className='mt-[35px] flex flex-col gap-y-[25px]'>{children}</div>
      </div>
   );
};

ProfileUpdate.propTypes = {
   children: PropTypes.any.isRequired,
   title: PropTypes.string.isRequired,
};

export default ProfileUpdate;
