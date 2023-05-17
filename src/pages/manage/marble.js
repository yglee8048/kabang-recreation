import { Layout as DashboardLayout } from '../../layouts/dashboard/layout';
import { useEffect } from 'react';
import { Box } from '@mui/material';

const Page = () => {
  useEffect(() => {
    window.open('http://localhost:8080', '_blank');
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
          src="/assets/banner/rewards-banner.png"
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
