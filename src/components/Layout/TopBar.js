import { IconArrowDown, IconMenu, IconSearch, IconUp } from 'assets/icons';
import Avatar from 'assets/images/Avatar.png';
import Logo from 'assets/images/Logo.png';
import { Button } from 'components/Button';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from 'sagas/global/globalSlice';

const TopBar = () => {
   // const { showSidebar } = useSelector((state) => state.global);
   const dispatch = useDispatch();
   return (
      <div className='flex items-center justify-between px-3 md:px-0'>
         <div
            className='mobile-toggle min-lg:hidden text-letter-3'
            onClick={() => dispatch(toggleSidebar())}
         >
            <IconMenu className='lg:w-8 md:w-6 lg:h-8 md:h-6' />
         </div>
         <div className='flex items-center gap-x-[53px]'>
            <img src={Logo} alt='Logo' loading='lazy' className='lg:hidden' />
            <div className='relative w-[458px] md:w-[217px] h-[52px] md:h-10 shadow-light dark:shadow-dark rounded-[100px] md:rounded-[25px]'>
               <input
                  type='text'
                  placeholder='Do fundrise now'
                  className='relative block w-full h-full px-[25px] rounded-[inherit] font-primary text-sm md:text-xs font-normal dark:bg-secondary-dark-main text-letter-1 dark:text-white placeholder:text-letter-4 dark:placeholder:text-letter-2'
               />
               <Button className='absolute top-[6px] right-[7px] !rounded-[20px] !px-[27px] !py-[11px] md:!px-[13px] md:!py-[6px] bg-primary-20%'>
                  <IconSearch />
               </Button>
            </div>
         </div>
         <div className='flex items-center gap-x-10'>
            <div className='flex items-center gap-x-[7px] text-icon dark:text-letter-3 lg:hidden'>
               <IconUp />
               <span className='font-primary font-semibold text-base text-letter-2 dark:text-letter-3'>
                  Fundrising for
               </span>
               <IconArrowDown />
            </div>
            <Button className='text-white bg-secondary-light-20% lg:hidden'>
               Start a campaign
            </Button>
            {/* <button className='flex items-center justify-center px-[26px] py-[13px] rounded-[10px] bg-secondary-light-1/5 hover:bg-opacity-70 text-white font-primary font-semibold text-base transition-all'>
               Start a campaign
            </button> */}
            <div className='lg:w-[52px] lg:h-[52px] md:w-10 md:h-10'>
               <img src={Avatar} alt='Avatar' />
            </div>
         </div>
      </div>
   );
};

export default TopBar;
