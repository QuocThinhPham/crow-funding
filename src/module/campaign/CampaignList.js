import { Button } from 'components/Button';
import { Heading } from 'components/Typography';
import React from 'react';
import CampaignItem from './CampaignItem';
// import PropTypes from 'prop-types';

const CampaignList = (props) => {
   return (
      <div>
         <Heading className='text-lg mb-5'>
            Your Campaign&nbsp;
            <span className='text-secondary-light-main dark:text-white'>
               (4)
            </span>
         </Heading>
         <CampaignItem />
         <CampaignItem />
         <Button className='mx-auto md:py-[9px] md:px-[31.5px] md:text-sm text-secondary-light-main dark:text-white bg-secondary-light-80% dark:bg-secondary-light-main dark:bg-opacity-30'>
            See more+
         </Button>
      </div>
   );
};

// CampaignList.propTypes = {};

export default CampaignList;
