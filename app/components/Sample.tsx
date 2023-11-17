'use client'

import { React, useState } from 'react';
import Image from 'next/image';

async function Sample(props) {
  // const res = await fetch('', {}); // my endpoint
  
  return (
    <div>
      <Image
        priority
        src={'https://github.com/evalarumbe/my-first-webpack-config/raw/master/webpack-logo.gif'}
        width="400"
        height="400"
        alt=""
      />
    </div>
  );
}

export default Sample;
