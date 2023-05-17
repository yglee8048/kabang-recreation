import * as React from 'react';
import { useCallback, useState } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { baseUrl } from 'src/api/url';

export const SettingsNotifications = () => {
  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
    },
    []
  );

  const [teamInit, setTeamInit] = useState('');
  const handleTeamChange = useCallback(
    (event) => {
      setTeamInit(() => (event.target.value));
    },
    []
  );
  const [memberInit, setMemberInit] = useState('');
  const handleMemberChange = useCallback(
    (event) => {
      setMemberInit(() => (event.target.value));
    },
    []
  );
  const submitMembers = () => {
    const bodyData = {
      members: memberInit,
      teams: teamInit
    };

    fetch(`${baseUrl}/set-up/members`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(bodyData, null, 2)
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

  const [gameInit, setGameInit] = useState('');
  const handleGameChange = useCallback(
    (event) => {
      setGameInit(() => (event.target.value));
    },
    []
  );

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <Card>
          <CardHeader
            subheader="구성원 관련 데이터 초기화"
            title="구성원 데이터 설정"
          />
          <Divider/>
          <CardContent>
            <Grid
              container
              spacing={6}
              wrap="wrap"
            >
              <Grid
                item
                xs={6}
              >
                <Stack spacing={1}>
                  <Typography variant="h6">
                    팀 데이터
                  </Typography>
                  <Stack>
                    <TextField
                      id="outlined-textarea"
                      label="팀 초기 데이터"
                      helperText="name, leader_id"
                      multiline
                      required
                      onChange={handleTeamChange}
                      value={teamInit}
                    />
                  </Stack>
                </Stack>
              </Grid>
              <Grid
                item
                xs={6}
              >
                <Stack spacing={1}>
                  <Typography variant="h6">
                    멤버 데이터
                  </Typography>
                  <Stack>
                    <TextField
                      id="outlined-textarea"
                      label="멤버 초기 데이터"
                      helperText="id, name, team_name"
                      multiline
                      required
                      onChange={handleMemberChange}
                      value={memberInit}
                    />
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </CardContent>
          <Divider/>
          <CardActions sx={{ justifyContent: 'flex-end' }}>
            <Button
              variant="contained"
              onClick={submitMembers}
            >
              Reset
            </Button>
          </CardActions>
        </Card>
        <Card>
          <CardHeader
            subheader="게임 관련 데이터 초기화"
            title="게임 데이터 설정"
          />
          <Divider/>
          <CardContent>
            <Grid
              container
              spacing={6}
              wrap="wrap"
            >
              <Grid
                item
                xs={6}
              >
                <Stack spacing={1}>
                  <Typography variant="h6">
                    게임 데이터
                  </Typography>
                  <Stack>
                    <TextField
                      id="outlined-textarea"
                      label="게임 초기 데이터"
                      helperText="title, type, description, image, time, score"
                      multiline
                      required
                      onChange={handleGameChange}
                      value={gameInit}
                    />
                  </Stack>
                </Stack>
              </Grid>
              <Grid
                item
                xs={6}
              >
                <FormControlLabel
                  control={<Checkbox defaultChecked/>}
                  label="게임보드 노출"
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider/>
          <CardActions sx={{ justifyContent: 'flex-end' }}>
            <Button variant="contained">
              Reset
            </Button>
          </CardActions>
        </Card>
      </Stack>
    </form>
  );
};
