import Photos from '@/components/home/Photos';
import UsersC from '@/components/home/Users';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Next.js users',
};

export default async function Users() {
  return (
    <>
      <h1>Hello, Users page!</h1>

      <div className="row">
        <Suspense fallback={<p>Loading users...</p>}>
          <UsersC />
        </Suspense>
        <Suspense fallback={<p>Loading photos...</p>}>
          <Photos />
        </Suspense>
      </div>
    </>
  );
}
