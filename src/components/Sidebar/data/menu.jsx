import { SettingsIcon } from '@/assets/icons/SettingsIcon'
import { ReportingIcon } from '@/assets/icons/ReportingIcon.jsx'
import { CompanyIcon } from '@/assets/icons/CompanyIcon.jsx'
import { MachinesIcon } from '@/assets/icons/MachinesIcon.jsx'
import { DashboardIcon } from '@/assets/icons/DashboardIcon.jsx'
import { ProductionIcon } from '@/assets/icons/ProductionIcon.jsx'
import { WorkflowsIcon } from '@/assets/icons/WorkflowsIcon.jsx'
import { LogoutIcon } from '@/assets/icons/LogoutIcon.jsx'
import { HelpIcon } from '@/assets/icons/HelpIcon.jsx'

export const mainMenu = [
  {
    title: 'Company',
    link: '/dashboard',
    icon: <CompanyIcon />,
  },
  {
    title: 'Machines',
    link: '/asset-mapview',
    icon: <MachinesIcon />,
  },
  {
    title: 'Dashboards',
    link: '/asset-listing',
    icon: <DashboardIcon />,
  },
  {
    title: 'Reports',
    link: '/devices',
    icon: <ReportingIcon />,
  },
  {
    title: 'Production',
    link: '/events',
    icon: <ProductionIcon />,
  },
  {
    title: 'Workflows',
    link: '/reporting',
    icon: <WorkflowsIcon />,
  },
]

export const systemMenu = [
  {
    title: 'Help',
    link: '/messages',
    icon: <HelpIcon />,
  },
  {
    title: 'Settings',
    link: '/settings',
    icon: <SettingsIcon />,
  },
  {
    title: 'Log out',
    link: '/support',
    icon: <LogoutIcon />,
  },
]
