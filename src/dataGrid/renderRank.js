import * as React from 'react';
import { EmojiEvents, Looks3, LooksTwo } from '@mui/icons-material';

import { Box } from '@mui/material';

const Rank = React.memo((props) => {
  const { rank } = props;

  let icon;
  if (rank === 1) {
    icon = <EmojiEvents
      sx={{
        color: 'warning.main',
        alignSelf: 'center'
      }} />;
  } else if (rank === 2) {
    icon = <LooksTwo
      sx={{
        color: 'primary.main',
        alignSelf: 'center'
      }}/>;
  } else if (rank === 3) {
    icon = <Looks3
      sx={{
        color: 'success.main',
        alignSelf: 'center'
      }}/>;
  } else{
    icon = <span>{rank}</span>
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      {icon}
    </Box>
  );
});

export function renderRank(params) {
  if (params.value == null) {
    return '';
  }
  return <Rank rank={params.value}/>;
}