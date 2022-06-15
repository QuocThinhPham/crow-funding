import { IconPlus } from 'assets/icons';
import { Button } from 'components/Button';
import { Wrapper } from 'components/Layout';
import { Description, Heading } from 'components/Typography';
import { CampaignList } from 'module/campaign';
import { Link } from 'react-router-dom';

const Campaign = () => {
   return (
      <Wrapper>
         <div className='flex md:flex-col md:gap-y-[15px] items-center md:items-start justify-between w-full py-[30px] md:py-5 px-10 md:px-[15px] bg-white dark:bg-secondary-dark-main rounded-[20px] md:rounded-[15px]'>
            <div className='flex items-start gap-x-[25px] md:gap-x-[15px]'>
               <Button
                  to='/campaign/create'
                  className='!p-[15px] !rounded-full text-white bg-secondary-light-40% md:!p-2'
               >
                  <IconPlus />
               </Button>
               <div className='flex flex-col items-start gap-y-2'>
                  <Heading className='text-[22px] md:text-sm'>
                     Create Your Campaign
                  </Heading>
                  <Description className='md:text-xs'>
                     Jump right into our editor and create your first Virtue
                     campaign!
                  </Description>
                  <Link
                     to='/'
                     className='font-primary font-normal text-sm md:text-xs text-primary-main leading-normal'
                  >
                     Need any help? Learn More...
                  </Link>
               </div>
            </div>
            <Button
               to='/campaign/create'
               className='text-secondary-light-main dark:text-white bg-secondary-light-80% dark:bg-secondary-dark-80% md:ml-[55px] md:text-sm md:py-[9px] md:px-[19px]'
            >
               Create campaign
            </Button>
         </div>
         <CampaignList />
      </Wrapper>
   );
};

export default Campaign;
