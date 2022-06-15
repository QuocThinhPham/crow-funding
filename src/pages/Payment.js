import PayoneerPicture from 'assets/images/payoneer.png';
import PaypalPicture from 'assets/images/paypal.png';
import { Button } from 'components/Button';
import { Wrapper } from 'components/Layout';
import { Description, Heading } from 'components/Typography';

const Payment = () => {
   return (
      <Wrapper>
         <div className='w-full max-w-[624px] md:max-w-none mx-auto mt-[66px] flex flex-col items-center justify-center text-center'>
            <Heading className='!font-bold text-[25px] md:text-lg mb-[10px]'>
               Connect Your Payment Processor
            </Heading>
            <Description className='text-base md:text-xs md:max-w-[274px] mb-[60px] md:mb-[25px]'>
               To Start Processing credit card payments and donations, you will
               need to select either Paypal or Payoneer
            </Description>
            <div className='w-full grid grid-cols-2 md:grid-cols-1 md:px-[32.5px] gap-x-10 md:gap-y-5'>
               <div className='p-[25px] pt-[35px] md:p-5 bg-white dark:bg-secondary-dark-main shadow-[-10px_15px_20px_rgba(231,_228,_228,_0.15),_10px_10px_20px_rgba(231,_228,_228,_0.15)] dark:shadow-[0px_16px_30px_rgba(33,_25,_25,_0.17),_0px_30px_60px_rgba(1,_2,_9,_0.2)] flex flex-col items-center rounded-[20px] md:rounded-[15px]'>
                  <div className='w-20 md:w-[65px] h-20 md:h-[65px] mb-10 md:mb-[25px]'>
                     <img src={PaypalPicture} alt='Paypal' />
                  </div>
                  <Description className='md:text-xs'>
                     Get paid directly via Paypal.
                  </Description>
                  <Button className='mt-[25px] md:mt-5 w-full text-secondary-light-main dark:text-white bg-secondary-light-80% dark:bg-secondary-dark-80%'>
                     Connect
                  </Button>
               </div>
               <div className='p-[25px] pt-[35px] md:p-5 bg-white dark:bg-secondary-dark-main shadow-[-10px_15px_20px_rgba(231,_228,_228,_0.15),_10px_10px_20px_rgba(231,_228,_228,_0.15)] dark:shadow-[0px_16px_30px_rgba(33,_25,_25,_0.17),_0px_30px_60px_rgba(1,_2,_9,_0.2)] flex flex-col items-center rounded-[20px] md:rounded-[15px]'>
                  <div className='w-20 md:w-[65px] h-20 md:h-[65px] mb-10 md:mb-[25px]'>
                     <img src={PayoneerPicture} alt='Payoneer' />
                  </div>
                  <Description className='md:text-xs'>
                     Get paid directly via Payoneer.
                  </Description>
                  <Button className='mt-[25px] md:mt-5 w-full text-secondary-light-main dark:text-white bg-secondary-light-80% dark:bg-secondary-dark-80%'>
                     Connect
                  </Button>
               </div>
            </div>
         </div>
      </Wrapper>
   );
};

export default Payment;
