import { Layout as DashboardLayout } from '../../layouts/dashboard/layout';
import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { baseUrl } from '../../api/url';
import CheckboxesTags from '../../components/CheckBoxesTags';

const Page = () => {
  useEffect(() => {
    window.open('http://localhost:8080', '_blank');
  }, []);

  const [excludes, setExcludes] = useState([]);
  const [memberOptions, setMemberOptions] = useState([]);
  useEffect(() => {
    fetch(`${baseUrl}/members/options`)
      .then(res => {
        return res.json();
      })
      .then(data => setMemberOptions(data))
      .catch(err => console.log(err));
  }, []);

  const [scoredData, setScoredData] = useState([]);
  useEffect(() => {
    fetch(`${baseUrl}/marbles?excludes=${excludes.map(e => e.name)}`)
      .then(res => {
        return res.json();
      })
      .then(ranking => setScoredData(ranking))
      .catch(err => console.log(err));
  }, [excludes]);

  const [nonScoredData, setNonScoredData] = useState([]);
  useEffect(() => {
    fetch(`${baseUrl}/marbles/no-score`)
      .then(res => {
        return res.json();
      })
      .then(ranking => setNonScoredData(ranking))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <Box
        sx={{
          width: '100%'
        }}
      >
        <img
          alt="recreation-banner"
          src="/assets/banner/rewards-banner.png"
          width="400"
        />
      </Box>
      <Divider
        sx={{ paddingBottom: 3 }}
      />
      <Stack spacing={3}>
        <Card>
          <CardHeader
            subheader="점수를 기반으로 한 구슬 개수"
            title="구슬 목록"
          />
          <Divider/>
          <CardContent>
            <Stack spacing={1}>
              <Stack>
                <TextField
                  id="outlined-textarea"
                  label="점수 기반 목록"
                  multiline
                  disabled
                  value={scoredData.join(', ')}
                />
              </Stack>
            </Stack>
          </CardContent>
          <Divider/>
          <CardActions sx={{ justifyContent: 'flex-end' }}>
            <Stack
              sx={{ paddingTop: 2 }}
              direction="row"
              spacing={2}
            >
              <Typography>
                제외
              </Typography>
              <CheckboxesTags
                label="MEMBER"
                options={memberOptions}
                value={excludes}
                onChange={(values) => setExcludes(values)}
              />
            </Stack>
          </CardActions>
        </Card>
        <Card>
          <CardHeader
            subheader="점수와 무관한 목록"
            title="특별상"
          />
          <CardContent>
            <Stack spacing={1}>
              <Stack>
                <TextField
                  id="outlined-textarea"
                  label="점수와 무관한 목록"
                  multiline
                  disabled
                  value={nonScoredData.join(', ')}
                />
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
