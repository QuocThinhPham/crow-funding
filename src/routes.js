import {
   IconCampaign,
   IconDashboard,
   IconLogout,
   IconPayment,
   IconProfile,
   IconWithdraw,
} from 'assets/icons';
import { lazy } from 'react';

const Dashboard = lazy(() => import('pages/Dashboard'));
const Campaign = lazy(() => import('pages/Campaign'));
const CampaignView = lazy(() => import('module/campaign/CampaignView'));
const CampaignCreate = lazy(() => import('module/campaign/CampaignCreate'));
const Payment = lazy(() => import('pages/Payment'));
const Withdraw = lazy(() => import('pages/Withdraw'));
const Profile = lazy(() => import('pages/Profile'));

export const navigates = [
   { href: '/', icon: IconDashboard, label: 'Dashboard' },
   { href: '/campaign', icon: IconCampaign, label: 'Campaign' },
   { href: '/payment', icon: IconPayment, label: 'Payment' },
   { href: '/withdraw', icon: IconWithdraw, label: 'Withdraw' },
   { href: '/profile', icon: IconProfile, label: 'Profile' },
   { href: '/logout', icon: IconLogout, label: 'Logout' },
];

export const routes = [
   { path: '/', element: Dashboard },
   { path: '/campaign', element: Campaign },
   { path: '/campaign/:slug', element: CampaignView },
   { path: '/campaign/create', element: CampaignCreate },
   { path: '/payment', element: Payment },
   { path: '/withdraw', element: Withdraw },
   { path: '/profile', element: Profile },
];
