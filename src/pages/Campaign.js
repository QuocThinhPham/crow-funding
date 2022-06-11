import { IconPlus } from 'assets/icons';
import { Button } from 'components/Button';
import { Wrapper } from 'components/Layout';
import { Description, Heading } from 'components/Typography';
import { CampaignList } from 'module/campaign';
import { Link } from 'react-router-dom';

const Campaign = () => {
   return (
      <Wrapper>
         <div className='flex items-center justify-between w-full py-[30px] px-10 bg-white dark:bg-secondary-dark-main rounded-[20px]'>
            <div className='flex items-start gap-x-[25px]'>
               <Button
                  to='/campaign/create'
                  className='!p-[15px] !rounded-full text-white bg-secondary-light-40%'
               >
                  <IconPlus />
               </Button>
               <div className='flex flex-col items-start gap-y-2'>
                  <Heading className='text-[22px]'>
                     Create Your Campaign
                  </Heading>
                  <Description>
                     Jump right into our editor and create your first Virtue
                     campaign!
                  </Description>
                  <Link
                     to='/'
                     className='font-primary font-normal text-sm text-primary-main leading-6'
                  >
                     Need any help? Learn More...
                  </Link>
               </div>
            </div>
            <Button
               to='/campaign/create'
               className='text-secondary-light-main dark:text-white bg-secondary-light-80% dark:bg-secondary-dark-80%'
            >
               Create campaign
            </Button>
         </div>
         <CampaignList />
      </Wrapper>
   );
};

export default Campaign;
