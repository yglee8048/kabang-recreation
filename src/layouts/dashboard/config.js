import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import FlagIcon from '@heroicons/react/24/solid/FlagIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import { SvgIcon } from '@mui/material';

export const items = [
  {
    title: 'Overview',
    path: '/',
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon/>
      </SvgIcon>
    )
  },
  {
    title: '내 정보',
    path: '/account',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon/>
      </SvgIcon>
    )
  },
  {
    title: '개인 현황',
    path: '/members',
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon/>
      </SvgIcon>
    )
  },
  {
    title: '개인 관리',
    path: '/customers',
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon/>
      </SvgIcon>
    )
  },
  {
    title: '팀 현황',
    path: '/companies',
    icon: (
      <SvgIcon fontSize="small">
        <FlagIcon/>
      </SvgIcon>
    )
  },
];
