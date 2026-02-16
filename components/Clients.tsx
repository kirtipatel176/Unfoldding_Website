'use client';

import React from 'react';
import Image from 'next/image';

const Clients: React.FC = () => {
  const clients = [
    { name: 'Tata Motors', logo: 'TATA MOTORS' },
    { name: 'Borzo', logo: 'BORZO' },
    { name: 'Pan Parag', logo: 'PAN PARAG' },
  ];

  return (
    <section
      className="w-full min-h-[100vh] py-16 md:py-40 relative overflow-hidden bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: `url(/images/client.png)`,
        backgroundSize: 'cover',
        backgroundAttachment: 'scroll'
      }}
    >
    </section>
  );
};

export default Clients;