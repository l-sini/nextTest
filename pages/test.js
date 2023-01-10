import Link from 'next/link';
import React from 'react';

const test = () => {
  return (
    <div>
      <div>test</div>
      <Link href='/test2'>test2 moving</Link>
    </div>
  );
};

export default test;
