import { Layout as DashboardLayout } from '../layouts/dashboard/layout';

const Page = () => {
  return (<>welcome</>);
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
