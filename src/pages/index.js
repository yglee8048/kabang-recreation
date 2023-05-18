import { Layout as DashboardLayout } from '../layouts/dashboard/layout';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import Head from 'next/head';
import RewardProducts from '../sections/rewards/RewardProducts';

const Page = () => {

  return (
    <>
      <Head>
        <title>
          레크레이션 | 홈캠프 워크샵
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
          <Grid
            container
            spacing={3}
          >
            <Grid
              xs={12}
            >
              <RewardProducts
                title="개인상 (개인점수 + 팀점수)"
                products={[
                  {
                    id: '1',
                    image: '/assets/products/airpod.png',
                    name: '1등) 에어팟 프로 2세대',
                    description: '약 30만원 상당'
                  },
                  {
                    id: '2',
                    image: '/assets/products/meat.png',
                    name: '2등) 한우 세트',
                    description: '약 20만원 상당'
                  },
                  {
                    id: '2',
                    image: '/assets/products/hwajang.png',
                    name: '3등) 장인이 만든 화장품',
                    description: '약 10만원 상당'
                  }
                ]}
                sx={{ height: '100%' }}
                buttonDisabled={false}
                buttonText="내 당첨확률 보러가기"
              />
            </Grid>
            <Grid
              xs={12}
            >
              <RewardProducts
                title="특별상 (랜덤 추첨)"
                products={[
                  {
                    id: '1',
                    image: '/assets/products/jomeng.png',
                    name: '루이스폴센 카카오 조명',
                    description: '카카오 프렌즈'
                  },
                  {
                    id: '2',
                    image: '/assets/products/gabang.jpg',
                    name: '골프가방',
                    description: '고오급'
                  },
                  {
                    id: '3',
                    image: '/assets/products/anma.jpg',
                    name: '미니안마기',
                    description: '피로 사냥'
                  },
                  {
                    id: '4',
                    image: '/assets/products/tshirts.jpeg',
                    name: 'NETHERWORLD 티셔츠',
                    description: '약 10만원 상당'
                  },
                  {
                    id: '5',
                    image: '/assets/products/baji.jpg',
                    name: 'NETHERWORLD 바지',
                    description: '약 10만원 상당'
                  },
                  {
                    id: '6',
                    image: '/assets/products/pack.png',
                    name: '시투안 리플랙터 파우더팩 세트',
                    description: '약 13만원 상당'
                  }
                ]}
                sx={{ height: '100%' }}
                buttonText={'100% 랜덤 추첨'}
                buttonDisabled={true}
              />
            </Grid>
            <Grid
              xs={12}
            >
              <RewardProducts
                title="응원상 (MC 선정)"
                products={[
                  {
                    id: '1',
                    image: '/assets/products/thumblr.jpg',
                    name: '카카오 프렌즈 텀블러',
                    description: '카카오 프렌즈'
                  },
                  {
                    id: '2',
                    image: '/assets/products/umb.jpg',
                    name: '카카오 프렌즈 우산',
                    description: '카카오 프렌즈'
                  }
                ]}
                sx={{ height: '100%' }}
                buttonText={'참여도 높은 구성원'}
                buttonDisabled={true}
              />
            </Grid>
          </Grid>
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
