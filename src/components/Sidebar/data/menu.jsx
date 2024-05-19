import { SettingsIcon } from '@/assets/icons/SettingsIcon';
import { DashboardIcon } from '@/assets/icons/DashboardIcon.jsx';
import { AssetMapViewIcon } from '@/assets/icons/AssetMapViewIcon.jsx';
import { AssetListingIcon } from '@/assets/icons/AssetListingIcon.jsx';
import { DevicesIcon } from '@/assets/icons/DevicesIcon.jsx';
import { EventsIcon } from '@/assets/icons/EventsIcon.jsx';
import { ReportingIcon } from '@/assets/icons/ReportingIcon.jsx';
import { MessagesIcon } from '@/assets/icons/MessagesIcon.jsx';
import { SupportIcon } from '@/assets/icons/SupportIcon.jsx';

export const mainMenu = [
    {
        title: 'Dashboard',
        link: '/dashboard',
        icon: <DashboardIcon />,
    },
    {
        title: 'Asset Mapview',
        link: '/asset-mapview',
        icon: <AssetMapViewIcon />,
    },
    {
        title: 'Asset Listing',
        link: '/asset-listing',
        icon: <AssetListingIcon />,
    },
    {
        title: 'Devices',
        link: '/devices',
        icon: <DevicesIcon />,
    },
    {
        title: 'Events',
        link: '/events',
        icon: <EventsIcon />,
        statusCode: 3,
        notificationsCount: 200,
    },
    {
        title: 'Reporting',
        link: '/reporting',
        icon: <ReportingIcon />,
    },
];

export const systemMenu = [
    {
        title: 'Messages',
        link: '/messages',
        icon: <MessagesIcon />,
        notificationsCount: 200,
    },
    {
        title: 'Settings',
        link: '/settings',
        icon: <SettingsIcon />,
    },
    {
        title: 'Support',
        link: '/support',
        icon: <SupportIcon />,
    },
];
