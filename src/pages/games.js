import Head from 'next/head';
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { GameCard } from 'src/sections/game/game-card';
import { useEffect, useState } from 'react';
import { baseUrl } from '../api/url';

const Page = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/games`)
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(data => setGames(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <Head>
        <title>
          게임 보드 | 홈캠프 워크샵
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
                  게임 보드
                </Typography>
              </Stack>
            </Stack>
            <Grid
              container
              spacing={3}
            >
              {games.map((game) => (
                <Grid
                  xs={12}
                  md={12}
                  lg={12}
                  key={game.title}
                >
                  <GameCard game={game}/>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
