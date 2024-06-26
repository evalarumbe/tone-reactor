'use client';

import React, { useState, useEffect } from 'react';
import { getAccessTokenClientSide } from '../lib/data';
import { toggleAudioOn } from '../lib/tone';
import { Sound } from '../vendor-types/freesound';
import Image from 'next/image';

interface SampleProps {
  soundId: number,
}

// async function getImageSrc(id: string): Promise<string> {
async function getImageSrc(): Promise<string> {
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

async function getAudioSrcClientSide(soundId: number): Promise<string> {
  const soundEndpoint = `https://www.freesound.org/apiv2/sounds/${soundId}/`;
  const tempCorsProxy = 'http://localhost:8080/';
  const res = await fetch(`${tempCorsProxy}${soundEndpoint}`, {
    headers: {
      'Authorization': `Token ${await getAccessTokenClientSide()}`,
    }
  });
  if (res.ok) {
    const json: Sound = await res.json();
    const audioSrc = json['previews']['preview-lq-mp3'];
    return audioSrc;
  } else {
    throw new Error(`Could not fetch sound. Response: ${JSON.stringify(res)}`)
  }
}

function Sample({ soundId }: SampleProps) {
  const [imageSrc, setImageSrc] = useState<string>(
    'https://user-images.githubusercontent.com/19648700/284762217-de5b3c2a-108e-4f2f-b4d7-6f9b292c8d75.png' // TODO: set fallback image
  );
  const [audioSrc, setAudioSrc] = useState<string>(
    '/audio/2023-07-20-Blind-studio-session---Simon-+-Eva-G-80bpm.mp3'
  );

  useEffect(() => {
    (async () => {
      setImageSrc(await getImageSrc());
      setAudioSrc(await getAudioSrcClientSide(soundId));
    })();
  }, [soundId])

  function handleToggleAudio(audioSrc: string): void {
    toggleAudioOn(audioSrc);
  }

  return (
    <button onClick={(): void => handleToggleAudio(audioSrc)}>
      <Image
        priority
        className="lg:h-full aspect-auto"
        src={imageSrc}
        width={400}
        height={400}
        alt=""
        />
        {/* <audio controls src={audioSrc}></audio> */}
    </button>
  );
}

export default Sample;
