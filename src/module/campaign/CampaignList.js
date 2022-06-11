import { Heading } from 'components/Typography';
import React from 'react';
import CampaignItem from './CampaignItem';
// import PropTypes from 'prop-types';

const CampaignList = (props) => {
   return (
      <div>
         <Heading className='text-lg mb-4'>
            Your Campaign&nbsp;
            <span className='text-secondary-light-main dark:text-white'>
               (4)
            </span>
         </Heading>
         <CampaignItem />
      </div>
   );
};

// CampaignList.propTypes = {};

export default CampaignList;
