'use client'

import React, { useState } from 'react';
import Image from 'next/image';

function Sample(props) {
  // const res = await fetch('', {}); // my endpoint
  
  return (
    <Image 
      className='lg:h-full'
      src="https://user-images.githubusercontent.com/19648700/284762217-de5b3c2a-108e-4f2f-b4d7-6f9b292c8d75.png"
      height={902}
      width={2096}
      alt="Design spec showing four interactivity states of this app"
    />
  );
}

export default Sample;
