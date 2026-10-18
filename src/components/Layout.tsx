import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';
import { Skeleton } from './Skeleton';

const PageLoadingFallback: React.FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <Skeleton variant="rectangular" className="h-8 w-48" />
        <Skeleton variant="rectangular" className="h-12 w-3/4 max-w-xl" />
        <Skeleton variant="text" className="h-5 w-full max-w-2xl" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="p-6 bg-surface rounded-[12px] border border-slate-100 flex flex-col gap-4">
            <Skeleton variant="rectangular" className="h-6 w-28" />
            <Skeleton variant="rectangular" className="h-4 w-full" />
            <Skeleton variant="rectangular" className="h-4 w-3/4" />
            <Skeleton variant="rectangular" className="h-10 w-full mt-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text antialiased">
      <Navbar />
      <main className="flex-1 w-full" id="main-content">
        <Suspense fallback={<PageLoadingFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
