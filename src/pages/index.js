import { Layout as DashboardLayout } from '../layouts/dashboard/layout';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import Router from 'next/router';

const Page = () => {
  useEffect(() => {
    Router.push('/members')
          .catch(err => console.log(err));
  });

  return (
    <>
      <Box
        sx={{
          width: '100%'
        }}
      >
        <img
          alt="recreation-banner"
          src="/assets/banner/recreation-banner.png"
          width="100%"
        />
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
