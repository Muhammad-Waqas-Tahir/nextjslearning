'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const contact = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Contact Page</h1>
      <Link href={'/dashboard/seetting'}> go to Setting </Link>
      <button onClick={() => router.push('/')}>GO to Home Page</button>
    </div>
  );
};

export default contact;
