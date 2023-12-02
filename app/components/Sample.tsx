'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

async function getImageSrc(key: string) {
  // fetch the image blob from internal api route
  const internalRoute = new URL(`${window.location.origin}/random-image`);
  internalRoute.search = new URLSearchParams({ tr_cacheref: key}).toString();
  
  const res = await fetch(internalRoute, {
    headers: {
      'Accept-type': 'image/jpeg',
    }
  });
  const imageBlob = await res.blob();
  const imageObjectURL = await URL.createObjectURL(imageBlob);
  const fullString = await imageObjectURL;
  const truncatedString = await fullString.slice(5);
  console.log('await')
  console.log(typeof (await imageObjectURL))
  console.log(imageObjectURL)
  return await imageObjectURL;
}

type SampleProps = {
  key: string;
}

function Sample({ key }: SampleProps) {
  const [imageSrc, setImageSrc] = useState(''); // TODO: fallback image
  useEffect(() => {
    (async function fetchRandomImage() {
      setImageSrc(await getImageSrc(key));
    })();
  },[key])

  console.log('====================================');
  console.log(imageSrc); // blob:http://localhost:3000/ea4ed1dc-ca1f-4f36-b6b5-a5ad28254166
  console.log('====================================');

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
