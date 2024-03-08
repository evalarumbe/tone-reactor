'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { streamToBlob } from '../lib/data'

// async function getImageSrc(id: string) {
async function getImageSrc() {
  // fetch the image blob from internal api route
  // const res = await fetch(`${window.location.origin}/api/random-image/${id}`, {
  const res = await fetch(`${window.location.origin}/api/random-image/`, {
    headers: {
      'Accept-type': 'image/jpeg',
    }
  });
  const imageBlob = await res.blob();
  const imageObjectURL = await URL.createObjectURL(imageBlob);
  return await imageObjectURL;
}

async function getAudioSrc() {
  // fetch the audio URI from internal api route
  // const res = await fetch(`${window.location.origin}/api/random-audio/${id}`, {
  const res = await fetch(`${window.location.origin}/api/random-audio/`, {
    headers: {
      'Accept-type': 'audio/wav', // TODO: mp3?
    }
  });
  let audioObjectURL = '';
  // Check that the ReadableStream res.body isn't null before we depend on it.
  if (res.body !== null) {
    const audioBlob = await streamToBlob(res.body);
    audioObjectURL = await URL.createObjectURL(audioBlob);
  }
  console.log(audioObjectURL)
  return audioObjectURL;
}

type SampleProps = {
  id: string;
}

// function Sample({ id }: SampleProps) {
function Sample() {
  const [imageSrc, setImageSrc] = useState('https://user-images.githubusercontent.com/19648700/284762217-de5b3c2a-108e-4f2f-b4d7-6f9b292c8d75.png'); // TODO: fallback image
  const [audioSrc, setAudioSrc] = useState('/audio/2023-07-20-Blind-studio-session---Simon-+-Eva-G-80bpm.mp3');
  
  useEffect(() => {
    (async () => {
      // setImageSrc(await getImageSrc(imageId));
      // setAudioSrc(await getAudioSrc(audioId));
      setImageSrc(await getImageSrc());
      setAudioSrc(await getAudioSrc());
    })();
    // },[imageId, audioId])
  }, [])

  // TODO: Fetch the audio from FreeSound.org

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
        <h1>{audioSrc}</h1>
        <audio controls src={audioSrc}></audio> {/* UPCOMING TODO: Why don't I hear it? */}
    </>
  );
}

export default Sample;
