import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div>
      <h3>Dashboard Page</h3>
      <Link href={'/contact'}>View Contact Page</Link>
    </div>
  );
};

export default page;
