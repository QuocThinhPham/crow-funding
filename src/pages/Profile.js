import { IconCalendar, IconEmail, IconEyeOn, IconLock } from 'assets/icons';
import { Button } from 'components/Button';
import { Input, Label } from 'components/Form';
import Field from 'components/Form/Field';
import { Wrapper } from 'components/Layout';
import { Description, Heading } from 'components/Typography';
import { ProfileUpdate } from 'module/profile';

const Profile = () => {
   return (
      <Wrapper>
         <div className='flex flex-col items-start py-[50px] md:py-5 px-[130px] md:px-[25px] w-full max-w-[1097px] mx-auto rounded-[10px] bg-white dark:bg-secondary-dark-main'>
            <div className='w-full mb-[55px] md:mb-8'>
               <Heading className='font-bold text-[25px] mb-[5px] md:text-lg'>
                  Account Information
               </Heading>
               <Description className='!text-xs'>
                  Update your account information
               </Description>
            </div>
            <ProfileUpdate title='Personal Information'>
               <div className='grid grid-cols-2 md:grid-cols-1 gap-x-[41px] md:gap-y-[15px]'>
                  <Field>
                     <Label htmlFor='firstName'>First Name</Label>
                     <Input name='firstName' placeholder='Mahfuzul Nabil' />
                  </Field>
                  <Field>
                     <Label htmlFor='lastName'>Last Name</Label>
                     <Input name='lastName' placeholder='Nabil' />
                  </Field>
               </div>
               <div className='grid grid-cols-2 md:grid-cols-1 gap-x-[41px] md:gap-y-[15px]'>
                  <Field>
                     <Label htmlFor='DoB'>Date of Birth</Label>
                     <Input
                        name='DoB'
                        placeholder='17/12/2000'
                        icon={{ right: <IconCalendar /> }}
                     />
                  </Field>
                  <Field>
                     <Label htmlFor='tel'>Mobile Number</Label>
                     <Input type='tel' name='tel' placeholder='+123 456 7890' />
                  </Field>
               </div>
               <Button className='mt-[5px] max-w-[190px] text-white bg-primary-main md:px-[38px] md:text-sm md:max-w-max'>
                  Update
               </Button>
            </ProfileUpdate>
            <ProfileUpdate title='Credentials'>
               <Field>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                     type='email'
                     name='email'
                     placeholder='hellouihut@gmail.com'
                     icon={{
                        left: <IconEmail />,
                     }}
                  />
               </Field>
               <div className='grid grid-cols-2 md:grid-cols-1 gap-x-[41px] md:gap-y-[15px]'>
                  <Field>
                     <Label htmlFor='password'>New Password</Label>
                     <Input
                        type='password'
                        name='password'
                        placeholder='New Password'
                        icon={{
                           left: <IconLock />,
                           right: <IconEyeOn />,
                        }}
                     />
                  </Field>
                  <Field>
                     <Label htmlFor='comfirm_password'>Confirm Password</Label>
                     <Input
                        type='password'
                        name='comfirm_password'
                        placeholder='Confirm Password'
                        icon={{
                           left: <IconLock />,
                           right: <IconEyeOn />,
                        }}
                     />
                  </Field>
               </div>
               <Button className='mt-[5px] max-w-[190px] text-white bg-primary-main md:px-[38px] md:text-sm md:max-w-max'>
                  Update
               </Button>
            </ProfileUpdate>
         </div>
      </Wrapper>
   );
};

export default Profile;
