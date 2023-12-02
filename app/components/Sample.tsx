'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

async function getImageSrc() {
  // fetch the image blob from internal api route
  const res = await fetch(`${window.location.origin}/api/random-image/`, {
    headers: {
      'Accept-type': 'image/jpeg',
    }
  });
  const imageBlob = await res.blob();
  const imageObjectURL = await URL.createObjectURL(imageBlob);
  return await imageObjectURL;
}

function Sample() {
  const [imageSrc, setImageSrc] = useState('https://user-images.githubusercontent.com/19648700/284762217-de5b3c2a-108e-4f2f-b4d7-6f9b292c8d75.png'); // TODO: fallback image
  useEffect(() => {
    (async () => {
      setImageSrc(await getImageSrc());
    })();
  },[])

  return (
    <Image
      priority
      className='lg:h-full aspect-auto'
      src={imageSrc}
      width={400}
      height={400}
      alt=""
    />
  );
}

export default Sample;
