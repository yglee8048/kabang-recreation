import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import { SvgIcon } from '@mui/material';

export const adminItems = [
  {
    title: '점수 입력',
    path: '/scoring',
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
    title: '데이터 관리',
    path: '/settings',
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon/>
      </SvgIcon>
    )
  }
];
