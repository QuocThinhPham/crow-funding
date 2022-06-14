import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'components/Typography';

const CampaignSection = ({ children, title }) => {
   return (
      <div>
         <Heading className='text-lg mb-4'>{title}</Heading>
         {children}
      </div>
   );
};

CampaignSection.propTypes = {
   children: PropTypes.any.isRequired,
   title: PropTypes.string.isRequired,
};

export default CampaignSection;
