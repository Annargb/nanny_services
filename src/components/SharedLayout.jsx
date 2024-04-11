import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const SharedLayout = () => {
  return (
    <div className="container px-32px">
      <Header />
      <main className='overflow-hidden'>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default SharedLayout;
