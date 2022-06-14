import { IconStar } from 'assets/icons';
import Avatar from 'assets/images/Avatar.png';
import CampaignPicture from 'assets/images/photo-1574494461515-c8005821fbe5.png';
import { Description, Heading } from 'components/Typography';
// import PropTypes from 'prop-types';

const Table = (props) => {
   return (
      <div className='w-full min-w-[796px] max-w-[796px] md:min-w-full md:max-w-max pb-[18px] rounded-t-[10px] bg-white dark:bg-secondary-dark-main overflow-x-auto'>
         <div className='w-full md:w-max flex items-center gap-x-[17px] px-[30px] py-[18px] bg-[#F7F7F8] dark:bg-[#22222B] rounded-t-[inherit]'>
            <div className='w-full min-w-[293px] max-w-[293px] font-primary font-semibold text-sm md:text-xs text-letter-1 dark:text-white'>
               Campaign
            </div>
            <div className='w-full min-w-[142px] max-w-[142px] font-primary font-semibold text-sm md:text-xs text-letter-1 dark:text-white'>
               Category
            </div>
            <div className='w-full min-w-[124px] max-w-[124px] font-primary font-semibold text-sm md:text-xs text-letter-1 dark:text-white'>
               Amount
            </div>
            <div className='w-full min-w-[142px] max-w-[142px] font-primary font-semibold text-sm md:text-xs text-letter-1 dark:text-white'>
               Backer
            </div>
         </div>
         <div className='w-full md:w-max flex flex-col gap-y-[30px] pt-[7.5px]'>
            {new Array(10).fill(0).map((item, index) => (
               <div
                  className='w-full flex items-center px-[30px] py-[7.5px] gap-x-[17px] transition-colors hover:bg-input-b dark:hover:bg-secondary-dark-stroke'
                  key={index}
               >
                  <div className='w-full min-w-[293px] max-w-[293px] flex items-center gap-x-[15px]'>
                     <div className='w-full max-w-[66px] rounded-[5px]'>
                        <img src={CampaignPicture} alt='Campaign' />
                     </div>
                     <div className='flex flex-col items-start gap-x-1'>
                        <Heading className='text-xs text-letter-1'>
                           One Special 4K Camera
                        </Heading>
                        <Description className='font-medium text-xs text-letter-3'>
                           Date: 25 Oct 2021
                        </Description>
                     </div>
                  </div>
                  <div className='w-full min-w-[142px] max-w-[142px] font-primary font-medium text-xs text-letter-3'>
                     Camera Gear
                  </div>
                  <div className='w-full min-w-[124px] max-w-[124px] font-primary font-semibold text-xs text-letter-1 dark:text-white'>
                     $&nbsp;5,850
                  </div>
                  <div className='w-full min-w-[142px] max-w-[142px]'>
                     <div className='flex items-center gap-x-[15px]'>
                        <div className='w-10 h-10'>
                           <img src={Avatar} alt='Avatar' />
                        </div>
                        <div className='flex flex-col items-start gap-y-[5px]'>
                           <span className='font-primary font-medium text-xs text-letter-1 dark:text-white leading-6'>
                              Mahfuzul Nabil
                           </span>
                           <div className='flex items-center gap-x-[3px]'>
                              <span className='text-[#F5A623]'>
                                 <IconStar className='w-[10.32px] h-[10.32px]' />
                              </span>
                              <span className='text-[#F5A623]'>
                                 <IconStar className='w-[10.32px] h-[10.32px]' />
                              </span>
                              <span className='text-[#F5A623]'>
                                 <IconStar className='w-[10.32px] h-[10.32px]' />
                              </span>
                              <span className='text-[#F5A623]'>
                                 <IconStar className='w-[10.32px] h-[10.32px]' />
                              </span>
                              <span className='text-[#F5A623]'>
                                 <IconStar className='w-[10.32px] h-[10.32px]' />
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

Table.propTypes = {};

export default Table;
