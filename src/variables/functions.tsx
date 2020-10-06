import React from 'react';
import Link from 'next/link';

const IndexPage: React.FC = () => {
  return (
    <Link
      href={{
        pathname: '/index',
        query: { id: 1 }
      }}
    >
      <a>Biblioteca</a>
    </Link>
  );
};

export default IndexPage;
