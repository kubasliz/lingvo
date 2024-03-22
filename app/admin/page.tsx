import dynamic from 'next/dynamic';
import { redirect } from 'next/navigation';

import { isAdmin } from '@/lib/admin';

const App = dynamic(() => import('@/app/admin/app'), { ssr: false });

const AdminPage = async () => {
  if (!isAdmin()) {
    redirect('/');
  }

  return <App />;
};

export default AdminPage;
