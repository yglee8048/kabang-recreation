import * as React from 'react';
import { Button, Card, CardActions, CardHeader, Divider, Stack } from '@mui/material';
import { baseUrl } from 'src/api/url';

export const SettingsNotifications = () => {
  const clearData = () => {
    fetch(`${baseUrl}/settings`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'DELETE'
    })
      .then(res => {
        if (res.status === 200) {
          alert('성공!');
        } else {
          alert('실패!');
        }
      })
      .catch(() => alert('에러!'));
  };

  return (
    <Stack spacing={3}>
      <Card>
        <CardHeader
          subheader="clear winners"
          title="점수 데이터 초기화"
        />
        <Divider/>
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button
            variant="contained"
            onClick={clearData}
          >
            Reset
          </Button>
        </CardActions>
      </Card>
    </Stack>
  );
};
