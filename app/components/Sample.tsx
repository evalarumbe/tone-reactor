'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// async function getImageSrc(id: string) {
async function getImageSrc() {
  // fetch the image blob from internal api route
  const res = await fetch(`${window.location.origin}/api/random-image/`, {
    headers: {
      'Accept-type': 'image/jpeg',
    }
  });
  if (res.ok) {
    const imageBlob = await res.blob();
    const imageObjectURL = await URL.createObjectURL(imageBlob);
    return await imageObjectURL;
  }
  else {
    throw new Error(`Could not fetch image. Response: ${JSON.stringify(res)}`)
  }
}

async function getAccessTokenClientSide() {
  const res = await fetch(`${window.location.origin}/api/freesound-access-token/`, {
    headers: {
      'Accept-type': 'text/plain;charset=UTF-8',
    }});
  return await res.text();
}

async function getAudioSrcClientSide(soundId: Number) {
  const res = await fetch(`http://www.freesound.org/apiv2/sounds/557976/`, { // TODO: use soundId
    headers: {
      'Authorization': `Token ${await getAccessTokenClientSide()}`,
    }
  });
  if (res.ok) {
    const json = await res.json();
    const audioSrc = json['previews']['preview-lq-mp3'];
    return audioSrc;
  } else {
    throw new Error(`Could not fetch sound. Response: ${JSON.stringify(res)}`)
  }
}

type SampleProps = {
  soundId: Number;
}

function Sample({ soundId }: SampleProps) {
  const [imageSrc, setImageSrc] = useState('https://user-images.githubusercontent.com/19648700/284762217-de5b3c2a-108e-4f2f-b4d7-6f9b292c8d75.png'); // TODO: fallback image
  const [audioSrc, setAudioSrc] = useState('/audio/2023-07-20-Blind-studio-session---Simon-+-Eva-G-80bpm.mp3');

  useEffect(() => {
    (async () => {
      setImageSrc(await getImageSrc());
      setAudioSrc(await getAudioSrcClientSide(soundId));
      console.log(await getAudioSrcClientSide(soundId))
    })();
  }, [soundId])

  return (
    <>
      <Image
        priority
        className='lg:h-full aspect-auto'
        src={imageSrc}
        width={400}
        height={400}
        alt=""
        />
        {/* TODO: Why don't I hear it? */}
        <audio controls src={audioSrc}></audio> {/* controls are disabled */}
        <audio controls>
          <source src={audioSrc} /> {/* default sound is playable (but source sound was expected) */}
        </audio>
        <audio controls>
          <source src={audioSrc} type="audio/mp3" /> {/* default sound is playable (but source sound was expected) */}
        </audio>
    </>
  );
}

export default Sample;
