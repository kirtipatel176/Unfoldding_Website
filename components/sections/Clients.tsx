'use client';

import React from 'react';
import Image from 'next/image';

const Clients: React.FC = () => {
  return (
    <section className="w-full relative flex items-center justify-center overflow-hidden">
      <Image
        src="/images/client.png"
        alt="Our Clients"
        width={1596}
        height={894}
        className="w-full h-auto object-contain"
        priority
        quality={100}
      />
    </section>
  );
};

export default Clients;