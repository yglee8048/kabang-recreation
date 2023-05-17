import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import { SvgIcon } from '@mui/material';
import { Casino, Settings, SportsEsports } from '@mui/icons-material';
import FlagIcon from '@heroicons/react/24/solid/FlagIcon';

export const adminItems = [
  {
    title: '게임 관리',
    path: '/manage/games',
    icon: (
      <SvgIcon fontSize="small">
        <Casino/>
      </SvgIcon>
    )
  },
  {
    title: '개인 관리',
    path: '/manage/members',
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon/>
      </SvgIcon>
    )
  },
  {
    title: '팀 관리',
    path: '/manage/teams',
    icon: (
      <SvgIcon fontSize="small">
        <FlagIcon/>
      </SvgIcon>
    )
  },
  {
    title: '데이터 관리',
    path: '/manage/settings',
    icon: (
      <SvgIcon fontSize="small">
        <Settings/>
      </SvgIcon>
    )
  },
  {
    title: '구슬 뽑기',
    path: '/manage/marble',
    icon: (
      <SvgIcon fontSize="small">
        <SportsEsports/>
      </SvgIcon>
    )
  }
];
