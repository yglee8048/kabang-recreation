import Head from 'next/head';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import ScoreBoard from 'src/sections/game/manage/score-board';
import { useState } from 'react';

const Page = () => {
  const [addOpen, setAddOpen] = useState(false);

  return (
    <>
      <Head>
        <title>
          게임 관리 | 홈캠프 워크샵
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1}>
                <Typography variant="h4">
                  점수 입력
                </Typography>
              </Stack>
              <div>
                <Button
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <PlusIcon/>
                    </SvgIcon>
                  )}
                  variant="contained"
                  onClick={() => setAddOpen(true)}
                >
                  Add
                </Button>
              </div>
            </Stack>
            <ScoreBoard
              addOpen={addOpen}
              setAddOpen={setAddOpen}
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
}

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
