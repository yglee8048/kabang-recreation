import FlagIcon from '@heroicons/react/24/solid/FlagIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import { SvgIcon } from '@mui/material';
import { Casino } from '@mui/icons-material';

export const items = [
  {
    title: '게임 보드',
    path: '/games',
    icon: (
      <SvgIcon fontSize="small">
        <Casino/>
      </SvgIcon>
    )
  },
  {
    title: '개인 순위',
    path: '/members',
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon/>
      </SvgIcon>
    )
  },
  {
    title: '팀 순위',
    path: '/teams',
    icon: (
      <SvgIcon fontSize="small">
        <FlagIcon/>
      </SvgIcon>
    )
  }
];
