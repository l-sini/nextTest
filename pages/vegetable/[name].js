import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const name = () => {
  const router = useRouter();
  console.log('router>>>>>>>>', router);
  return (
    <>
      <div>[name]</div>
      <Link href='/'>
        <a>홈으로</a>
      </Link>
    </>
  );
};

export default name;
