import PropTypes from 'prop-types';
import { Swiper } from 'swiper/react';

const SwiperWrapper = ({ children, className }) => {
   return (
      <Swiper
         grabCursor={true}
         spaceBetween={30}
         slidesPerView='auto'
         className={className && className}
      >
         {children}
      </Swiper>
   );
};

SwiperWrapper.propTypes = {
   children: PropTypes.node.isRequired,
};

export default SwiperWrapper;
