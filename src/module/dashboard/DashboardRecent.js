import CardPicture1 from 'assets/images/photo-1517059224940-d4af9eec41b7.png';
import CardPicture2 from 'assets/images/photo-1567538096621-38d2284b23ff.png';
import { SwiperWrapper } from 'components/Layout';
import { CampaignCard } from 'module/campaign';
import PropTypes from 'prop-types';
import { SwiperSlide } from 'swiper/react';
import DashboardSection from './DashboardSection';

const DashboardRecent = (props) => {
   return (
      <DashboardSection title='Recent Campaign'>
         <SwiperWrapper>
            <SwiperSlide>
               <CampaignCard imgSrc={CardPicture2} />
            </SwiperSlide>
            <SwiperSlide>
               <CampaignCard imgSrc={CardPicture1} />
            </SwiperSlide>
            <SwiperSlide>
               <CampaignCard imgSrc={CardPicture2} />
            </SwiperSlide>
         </SwiperWrapper>
      </DashboardSection>
   );
};

DashboardRecent.propTypes = {
   props: PropTypes.object,
};

export default DashboardRecent;
