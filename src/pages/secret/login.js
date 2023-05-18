import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useAuth } from 'src/hooks/use-auth';
import { Layout as AuthLayout } from 'src/layouts/auth/layout';

const Page = () => {
  const router = useRouter();
  const auth = useAuth();

  const [id, setId] = useState('');

  const handleSignIn = () => {
    try {
      auth.signIn(id)
          .then(() => router.push('/manage/games'))
          .catch(err => console.error(err));
    } catch (err) {
      console.error(err);
      alert('에러!');
    }
  };

  const handleSkip = () => {
    router.push('/members');
  };

  return (
    <>
      <Head>
        <title>
          Admin Login | 홈캠프 레크레이션
        </title>
      </Head>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: '100px',
            width: '100%'
          }}
        >
          <div>
            <Stack
              spacing={1}
              sx={{ mb: 3 }}
            >
              <Typography variant="h4">
                Log In
              </Typography>
            </Stack>
            <Stack spacing={3}>
              <TextField
                fullWidth
                label="ID"
                name="id"
                onChange={(e) => setId(e.target.value)}
                type="password"
                value={id}
              />
            </Stack>
            <Button
              fullWidth
              size="large"
              sx={{ mt: 3 }}
              type="submit"
              variant="contained"
              onClick={handleSignIn}
            >
              Sign In
            </Button>
            <Button
              fullWidth
              size="large"
              sx={{ mt: 3 }}
              onClick={handleSkip}
            >
              Skip authentication
            </Button>
          </div>
        </Box>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <AuthLayout>
    {page}
  </AuthLayout>
);

export default Page;
