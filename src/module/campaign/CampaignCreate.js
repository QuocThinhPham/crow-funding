import { IconCalendar, IconMoneyBag, IconRocket } from 'assets/icons';
import { Button } from 'components/Button';
import { Dropdown } from 'components/Dropdown';
import { Input, Label, Textarea } from 'components/Form';
import Field from 'components/Form/Field';
import { Wrapper } from 'components/Layout';
import { Description, Heading } from 'components/Typography';

const categories = [
   {
      id: 1,
      name: 'Architecture',
   },
   {
      id: 2,
      name: 'Real Estate',
   },
   {
      id: 3,
      name: 'Film',
   },
   {
      id: 4,
      name: 'Camera Gear',
   },
];
const countries = [
   {
      id: 1,
      name: 'Vietnam',
   },
   {
      id: 3,
      name: 'China',
   },
   {
      id: 4,
      name: 'Japan',
   },
];

const CampaignCreate = () => {
   return (
      <Wrapper>
         <div className='flex flex-col items-center gap-y-10 md:gap-y-5 w-full max-w-[1140px] mx-auto py-10 md:py-[25px] px-[66px] md:px-5 rounded-[10px] bg-white dark:bg-secondary-dark-main'>
            <div className='flex items-center justify-center gap-x-[10px] py-4 md:py-3 px-[59px] md:px-[21px] w-full max-w-[379px] md:max-w-[213px] rounded-[10px] bg-letter-4 dark:bg-secondary-dark-stroke bg-opacity-[0.08]'>
               <Heading className='font-bold text-[25px] md:text-base text-letter-2'>
                  Start a Campaign
               </Heading>
               <IconRocket className='md:w-[18px] md:h-[18px]' />
            </div>
            <div className='flex flex-col items-center gap-y-[25px] w-full'>
               <div className='grid grid-cols-2 md:grid-cols-1 gap-x-[45px] w-full md:gap-y-[15px]'>
                  <Field>
                     <Label htmlFor='title'>Campaign Title *</Label>
                     <Input name='title' placeholder='Write a title' />
                  </Field>
                  <Field>
                     <Label htmlFor='category'>Select a category *</Label>
                     <Dropdown defaultPlaceholder='Select a category'>
                        <Dropdown.Placeholder />
                        <Dropdown.List>
                           {categories &&
                              categories.map((category) => (
                                 <Dropdown.Option
                                    key={category.id}
                                    data={category}
                                 >
                                    {category.name}
                                 </Dropdown.Option>
                              ))}
                        </Dropdown.List>
                     </Dropdown>
                  </Field>
               </div>
               <Field>
                  <Label htmlFor='short_desc'>Short Description *</Label>
                  <Textarea
                     name='short_desc'
                     placeholder='Write a short description....'
                  />
               </Field>
               <Field>
                  <Label htmlFor='story'>Story *</Label>
                  <Textarea name='story' placeholder='Write your story......' />
               </Field>
            </div>
            <div className='md:my-[5px] flex items-center gap-x-5 md:gap-x-[10px] w-full py-10 md:py-[19px] px-[45px] md:px-5 rounded-[10px] bg-secondary-light-20%'>
               <IconMoneyBag className='w-[19px] h-5' />
               <Heading className='font-bold md:font-semibold text-[25px] md:text-xs !text-white'>
                  You will get 90% of total raised
               </Heading>
            </div>
            <div className='flex flex-col items-center gap-y-[25px] w-full'>
               <div className='grid grid-cols-2 md:grid-cols-1 gap-x-[45px] w-full md:gap-y-[15px]'>
                  <Field>
                     <Label htmlFor='goal'>Goal *</Label>
                     <Input name='goal' placeholder='$0.00 USD' />
                  </Field>
                  <Field>
                     <Label htmlFor='raised_amount'>Raised Amount *</Label>
                     <Input name='raised_amount' placeholder='$0.00 USD' />
                  </Field>
               </div>
               <div className='grid grid-cols-2 md:grid-cols-1 gap-x-[45px] w-full md:gap-y-[15px]'>
                  <Field>
                     <Label htmlFor='amount_prefilled'>Amount Prefilled</Label>
                     <Input
                        name='amount_prefilled'
                        placeholder='Amount Prefilled'
                     />
                     <Description className='w-full max-w-[387px] md:text-xs'>
                        It will help fill amount box by click, place each amount
                        by comma, ex: 10,20,30,40
                     </Description>
                  </Field>
                  <Field>
                     <Label htmlFor='goal'>Video</Label>
                     <Input name='goal' placeholder='Video' />
                     <Description className='w-full max-w-[387px] md:text-xs'>
                        Place Youtube or Vimeo Video URL
                     </Description>
                  </Field>
               </div>
               <div className='grid grid-cols-2 md:grid-cols-1 gap-x-[45px] w-full md:gap-y-[15px]'>
                  <Field>
                     <Label htmlFor='end_method'>Campaign End Method</Label>
                     <Dropdown defaultPlaceholder='Select one'>
                        <Dropdown.Placeholder />
                        <Dropdown.List>
                           {countries &&
                              countries.map((country) => (
                                 <Dropdown.Option
                                    key={country.id}
                                    data={country}
                                 >
                                    {country.name}
                                 </Dropdown.Option>
                              ))}
                        </Dropdown.List>
                     </Dropdown>
                  </Field>
                  <Field>
                     <Label htmlFor='country'>Country</Label>
                     <Dropdown defaultPlaceholder='Select a country'>
                        <Dropdown.Placeholder />
                        <Dropdown.List>
                           {countries &&
                              countries.map((country) => (
                                 <Dropdown.Option
                                    key={country.id}
                                    data={country}
                                 >
                                    {country.name}
                                 </Dropdown.Option>
                              ))}
                        </Dropdown.List>
                     </Dropdown>
                  </Field>
               </div>
               <div className='grid grid-cols-2 md:grid-cols-1 gap-x-[45px] w-full md:gap-y-[15px]'>
                  <Field>
                     <Label htmlFor='start_date'>Start Date</Label>
                     <Input
                        name='start_date'
                        placeholder='Start Date'
                        icon={{ right: <IconCalendar /> }}
                     />
                  </Field>
                  <Field>
                     <Label htmlFor='end_date'>End Date</Label>
                     <Input
                        name='end_date'
                        placeholder='End Date'
                        icon={{ right: <IconCalendar /> }}
                     />
                  </Field>
               </div>
            </div>
            <Button className='!py-[13px] md:!py-[15px] !px-[39px] md:!px-[50px] bg-primary-main text-white md:text-sm'>
               Submit new campaign
            </Button>
         </div>
      </Wrapper>
   );
};

export default CampaignCreate;
