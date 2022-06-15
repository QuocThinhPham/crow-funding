import { IconDownload, IconPaypal, IconUnion } from 'assets/icons';
import USAFlag from 'assets/images/USA.png';
import { Button } from 'components/Button';
import { Wrapper } from 'components/Layout';
import { Table } from 'components/Table';
import { Description, Heading } from 'components/Typography';

const Withdraw = () => {
   return (
      <Wrapper>
         <div className='w-full flex md:flex-col-reverse gap-x-10 md:gap-y-5'>
            <Table></Table>
            <div className='relative w-full px-5 rounded-[10px] bg-white dark:bg-secondary-dark-main overflow-hidden'>
               <div className='w-full pt-10 pb-6 relative z-50 flex flex-col items-center gap-y-[58px] md:gap-y-[25px]'>
                  <div className='flex flex-col items-center gap-y-5'>
                     <div className='flex flex-col items-center gap-y-[10px] md:gap-y-[5px]'>
                        <span className='p-7 md:p-[14px] text-letter-2 bg-[#DBFCD0] rounded-full backdrop-blur-[200px]'>
                           <IconUnion className='w-[32.4px] h-[32.4px]' />
                        </span>
                        <span className='mt-[5px] font-primary font-medium text-sm md:text-xs leading-normal text-letter-2 dark:text-white'>
                           Your Balance
                        </span>
                        <span className='font-primary font-bold text-[40px] md:text-[25px] leading-normal text-letter-1 dark:text-white'>
                           1,206.89
                        </span>
                        <span className='flex items-center gap-x-2 text-sm md:text-xs font-medium text-letter-2 dark:text-white'>
                           <img
                              src={USAFlag}
                              alt='USA'
                              className='w-4 md:w-3 h-4 md:h-3 rounded-full'
                           />
                           USD
                        </span>
                     </div>
                     <Button className='px-[60px] md:px-[55px] text-white bg-primary-main gap-x-[10px] md:text-sm'>
                        <IconDownload />
                        Withdraw
                     </Button>
                  </div>
                  <div className='w-full'>
                     <div className='pl-5 md:pl-2 flex items-center justify-between mb-[18px]'>
                        <Heading className='text-xl md:text-base'>
                           Activity
                        </Heading>
                        <Button className='text-secondary-light-main md:text-xs'>
                           View All
                        </Button>
                     </div>
                     <div className='px-[10px] flex flex-col gap-y-6 md:gap-y-5'>
                        {new Array(5).fill(0).map((item, index) => (
                           <div
                              className='flex items-center gap-x-5'
                              key={index}
                           >
                              <div className='flex items-center justify-center w-[58px] md:w-[46px] h-[58px] md:h-[46px] rounded-[10px] md:rounded-lg bg-secondary-light-20% bg-opacity-5'>
                                 <IconPaypal />
                              </div>
                              <div className='flex flex-col gap-y-[2px]'>
                                 <Heading className='font-medium md:text-xs'>
                                    Paypal Withdraw
                                 </Heading>
                                 <Description className='font-medium text-xs text-letter-4 dark:text-letter-3'>
                                    31 Oct, 11:00pm
                                 </Description>
                              </div>
                              <span className='ml-auto font-primary font-medium text-lg md:text-sm leading-normal text-error'>
                                 $500.00
                              </span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
               <div className='absolute top-0 w-full h-[303px]'>
                  <div className='absolute top-[212px] w-full h-[91px] z-10 bg-withdraw dark:hidden'></div>
                  <div className='absolute top-[-87px] left-[-116px] w-[232px] h-[232px] rounded-full bg-[#7EF54D] blur-[80px]'></div>
                  <div className='absolute top-[-67px] left-1/2 -translate-x-1/2 w-[238px] h-[238px] rounded-full bg-[#E7F561] blur-[80px]'></div>
                  <div className='absolute top-[-67px] right-[-69px] w-[238px] h-[238px] rounded-full bg-[#92EBFF] blur-[80px]'></div>
               </div>
            </div>
         </div>
      </Wrapper>
   );
};

export default Withdraw;
