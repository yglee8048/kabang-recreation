import Head from 'next/head';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import TeamAddDialog from 'src/sections/team/manage/dialog/team-add-dialog';
import { useState } from 'react';
import TeamManageTable from 'src/sections/team/manage/team-manage-table';

const Page = () => {
  const [openAdd, setOpenAdd] = useState(false);

  return (
    <>
      <Head>
        <title>
          팀 관리 | 홈캠프 워크샵
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
                  팀 관리
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
                  onClick={() => setOpenAdd(true)}
                >
                  Add
                </Button>
              </div>
            </Stack>
            <TeamManageTable
              openAdd={openAdd}
            />
          </Stack>
        </Container>
      </Box>
      <TeamAddDialog
        open={openAdd}
        setOpen={setOpenAdd}
      />
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
