import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'components/Typography';

const DashboardSection = ({ children, title }) => {
   return (
      <div>
         <Heading className='text-lg mb-4'>{title}</Heading>
         {children}
      </div>
   );
};

DashboardSection.defaultProps = {};

DashboardSection.propTypes = {
   children: PropTypes.any.isRequired,
   title: PropTypes.string.isRequired,
};

export default DashboardSection;
