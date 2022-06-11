import { Wrapper } from 'components/Layout';
import { CampaignList } from 'module/campaign';
import { DashboardPopular, DashboardRecent } from 'module/dashboard';

const Dashboard = () => {
   return (
      <Wrapper>
         <CampaignList />
         <DashboardPopular />
         <DashboardRecent />
      </Wrapper>
   );
};

export default Dashboard;
