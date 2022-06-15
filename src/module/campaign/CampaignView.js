import {
   IconFbSquare,
   IconFolder,
   IconHalfStar,
   IconPlay,
   IconShare,
   IconStar,
   IconTwitter,
} from 'assets/icons';
import Avatar from 'assets/images/Avatar.png';
import CardPicture1 from 'assets/images/photo-1517059224940-d4af9eec41b7.png';
import CardPicture2 from 'assets/images/photo-1567538096621-38d2284b23ff.png';
import CampaignPicture from 'assets/images/photo-1574494461515-c8005821fbe5.png';
import { Button } from 'components/Button';
import { Input } from 'components/Form';
import { SwiperWrapper, Wrapper } from 'components/Layout';
import { Progress } from 'components/Loading';
import { Description, Heading } from 'components/Typography';
import { SwiperSlide } from 'swiper/react';
import CampaignCard from './CampaignCard';
import CampaignSection from './CampaignSection';

const CampaignView = () => {
   // const { slug } = useParams();
   return (
      <Wrapper>
         <div className='flex flex-col items-start gap-y-10 md:gap-y-[30px] w-full'>
            <div className='flex items-center justify-center py-10 md:py-[45px] rounded-[25px] w-full bg-banner bg-cover bg-no-repeat bg-center relative min-h-[140px] md:min-h-0'>
               <div className='absolute rounded-[inherit] bg-banner-gradient opacity-40 w-full h-full'></div>
               <Heading className='relative !font-bold text-[40px] md:text-xl !text-white'>
                  Education
               </Heading>
            </div>
            <div className='w-full flex md:flex-col items-start gap-x-10 md:gap-y-[27px]'>
               <div className='relative rounded-[25px] md:rounded-[15px] group'>
                  <img
                     src={CampaignPicture}
                     alt='Campaign'
                     className='w-[583px] h-[398px] md:h-[210px] rounded-[inherit]'
                  />
                  {/* <span className='scale-150 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-block p-[31px] bg-play backdrop-blur-[5px] rounded-full'>
                     <IconPlay />
                  </span> */}
               </div>
               <div className='w-full max-w-[443px] py-[7.5px] flex flex-col flex-1 gap-y-[15px]'>
                  <div className='flex items-center justify-between'>
                     <div className='flex items-center gap-x-[10px] text-letter-3'>
                        <IconFolder />
                        <span className='font-medium text-sm leading-normal'>
                           Architecture
                        </span>
                     </div>
                     <div className='flex items-center gap-x-[15px]'>
                        <span className='text-letter-3 cursor-pointer'>
                           <IconFbSquare />
                        </span>
                        <span className='text-letter-3 cursor-pointer'>
                           <IconTwitter />
                        </span>
                        <span className='text-letter-3 cursor-pointer'>
                           <IconShare />
                        </span>
                     </div>
                  </div>
                  <Heading className='font-bold md:font-semibold text-xl md:text-lg'>
                     Meet - AI Virtual Background 4k Webcam
                  </Heading>
                  <Description className='max-w-[435px] md:text-[13px]'>
                     The first-ever 4K webcam that embeded AI technology to
                     protect your background during video calls.
                  </Description>
                  <div className='flex items-center gap-x-5 my-[10px]'>
                     <div className='md:w-10 md:h-10'>
                        <img src={Avatar} alt='Avatar' />
                     </div>
                     <div className='flex flex-col items-start gap-y-[2px]'>
                        <div className='flex items-center gap-x-[15px]'>
                           <span className='font-primary font-medium text-lg md:text-sm text-letter-1 dark:text-white leading-normal'>
                              Saiful Islam
                           </span>
                           <div className='flex items-center gap-x-[5px]'>
                              <span className='text-[#F5A623]'>
                                 <IconStar className='md:w-[10.9px] md:h-[10.9px]' />
                              </span>
                              <span className='text-[#F5A623]'>
                                 <IconStar className='md:w-[10.9px] md:h-[10.9px]' />
                              </span>
                              <span className='text-[#F5A623]'>
                                 <IconStar className='md:w-[10.9px] md:h-[10.9px]' />
                              </span>
                              <span className='text-[#F5A623]'>
                                 <IconHalfStar className='md:w-[10.9px] md:h-[10.9px]' />
                              </span>
                              <span className='text-letter-3'>
                                 <IconStar className='md:w-[10.9px] md:h-[10.9px]' />
                              </span>
                           </div>
                        </div>
                        <div className='flex items-center gap-x-[10px]'>
                           <span className='font-primary font-semibold text-sm md:text-xs text-primary-20% leading-normal'>
                              02 Campaign
                           </span>
                           <span className='inline-block w-[6px] h-[6px] bg-letter-3 rounded-full'></span>
                           <span className='font-primary font-normal text-sm md:text-xs text-letter-3 leading-normal'>
                              Dhaka, Bangladesh
                           </span>
                        </div>
                     </div>
                  </div>
                  <Progress className='max-w-[435px] my-[10px]' />
                  <div className='flex items-center md:justify-between gap-x-[65px] md:gap-x-0'>
                     <div className='flex flex-col gap-y-[2px]'>
                        <span className='font-bold text-lg md:text-base text-letter-2 dark:text-letter-4 leading-normal'>
                           $2,000
                        </span>
                        <span className='font-normal text-base md:text-sm text-letter-4 dark:text-letter-3 leading-normal'>
                           Raised of $2,500
                        </span>
                     </div>
                     <div className='flex flex-col gap-y-[2px]'>
                        <span className='font-bold text-lg md:text-base text-letter-2 dark:text-letter-4 leading-normal'>
                           173
                        </span>
                        <span className='font-normal text-base md:text-sm text-letter-4 dark:text-letter-3 leading-normal'>
                           Total backers
                        </span>
                     </div>
                     <div className='flex flex-col gap-y-[2px]'>
                        <span className='font-bold text-lg md:text-base text-letter-2 dark:text-letter-4 leading-normal'>
                           30
                        </span>
                        <span className='font-normal text-base md:text-sm text-letter-4 dark:text-letter-3 leading-normal'>
                           Days left
                        </span>
                     </div>
                  </div>
                  <Button className='text-white bg-primary-main md:mt-[5px]'>
                     Back this project
                  </Button>
               </div>
            </div>
            <div className='w-full max-w-[1170px] flex md:flex-col md:gap-y-10 items-start justify-between'>
               <div className='w-full max-w-[605px]'>
                  <Heading className='text-lg md:text-sm uppercase mb-5 md:mb-[15px]'>
                     Story
                  </Heading>
                  <div className='pb-10 bg-white dark:bg-secondary-dark-main'>
                     <div className='mb-5 md:mb-[5px]'>
                        <img src={CampaignPicture} alt='Campaign' />
                     </div>
                     <Description className='py-[10px] px-[30px] md:px-[15px] text-base md:text-sm'>
                        Capture everything in 4k, with extended battery life and
                        pro-g inspired features. Choose from three&nbsp;
                        <span className='font-semibold text-letter-2 dark:text-letter-4'>
                           4k recording modes
                        </span>
                        : UHD, HD and cinematic 24p. Use the Wi-Fi feature to
                        connect and stream your footage wirelessly directly to
                        your iOS and Android smartphones or tablets for instant
                        sharing. The monitor has a 3.5" touch screen for easy
                        navigation and built-in wifi that automatically connects
                        to the last used smartphone or tablet once paired.
                     </Description>
                     <div className='mt-[35px] md:mt-5 mb-5'>
                        <img src={CampaignPicture} alt='Campaign' />
                     </div>
                     <Description className='py-[10px] px-[30px] md:px-[15px] text-base md:text-sm'>
                        Built with an advanced&nbsp;
                        <span className='font-semibold text-letter-2 dark:text-letter-4'>
                           4K image sensor and a Super 35
                        </span>
                        &nbsp;imaging processer the GH4 is able to capture
                        cinema quality images with astonishing detail. This
                        camera has evolved into a great all-rounder for
                        photography or filmmaking.
                     </Description>
                     <div className='mt-[35px] md:mt-5 mb-[30px] relative group'>
                        <img src={CampaignPicture} alt='Campaign' />
                        <span className='scale-150 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-block p-[31px] bg-play backdrop-blur-[5px] rounded-full'>
                           <IconPlay />
                        </span>
                     </div>
                     <div className='px-[30px]'>
                        <Heading className='text-xl md:text-base'>
                           Digital Cameras
                        </Heading>
                        <ol className='flex flex-col gap-y-[15px] md:gap-y-[10px] list-decimal mt-5 md:mt-[15px] pl-5 text-letter-2 dark:text-letter-3 md:text-sm'>
                           <li>
                              Images can be instantly checked, and retaken if
                              necessary.
                           </li>
                           <li>
                              Black and White and sepia-tone photos can be
                              easily created.
                           </li>
                           <li>
                              Macro photography lets you shoot down to a few
                              centimeters away.
                           </li>
                           <li>
                              Most digital cameras can also take moving
                              pictures.
                           </li>
                           <li>
                              No film purchase or development costs,
                              Rechargeable battery packs are economical🤑🤑🤑.
                           </li>
                           <li>
                              Macro photography lets you shoot down to a few
                              centimeters away.
                           </li>
                        </ol>
                     </div>
                  </div>
               </div>
               <div className='w-full max-w-[441px]'>
                  <Heading className='text-lg md:text-sm mb-5 md:mb-[15px]'>
                     Support
                  </Heading>
                  <div className='flex flex-col gap-y-5 md:gap-y-[15px] w-full bg-white dark:bg-secondary-dark-main py-5 md:py-[15px] px-[25px] md:px-5 shadow-[-4px_4px_8px_rgba(226,_226,_226,_0.2),_4px_4px_8px_rgba(226,_226,_226,_0.2)] dark:shadow-none rounded-[10px]'>
                     <Heading className='mt-[10px] !font-medium text-xl md:text-base !text-letter-3 text-center'>
                        Pledge without reward
                     </Heading>
                     <Input
                        name='pledge'
                        placeholder='$10'
                        className='md:text-base md:py-[5px] md:px-[15px] md:rounded-[5px]'
                     />
                     <div className='p-5 bg-[#F7F7F7] dark:bg-[#13131A] rounded-[10px]'>
                        <Heading className='text-letter-2 md:text-xs'>
                           Back it because you believe in it.
                        </Heading>
                        <Description className='mt-5 md:mt-[10px] md:text-xs'>
                           Support the project for no reward, just because it
                           speaks to you.
                        </Description>
                     </div>
                     <Button className='w-full md:text-sm text-white bg-secondary-light-20%'>
                        Continue
                     </Button>
                  </div>
               </div>
            </div>
            <CampaignSection title='You also may be interested in'>
               <SwiperWrapper>
                  <SwiperSlide>
                     <CampaignCard imgSrc={CardPicture1} />
                  </SwiperSlide>
                  <SwiperSlide>
                     <CampaignCard imgSrc={CardPicture2} />
                  </SwiperSlide>
                  <SwiperSlide>
                     <CampaignCard imgSrc={CardPicture1} />
                  </SwiperSlide>
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
            </CampaignSection>
         </div>
      </Wrapper>
   );
};

export default CampaignView;
