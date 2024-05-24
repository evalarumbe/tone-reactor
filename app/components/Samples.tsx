'use client'

import React, { useState, useEffect } from 'react';
import { getAccessTokenClientSide } from '../lib/data';
import { SoundList, SoundListItem, Sound } from '../vendor-types/freesound';
import Sample from './Sample';

async function getSoundIds(): Promise<number[]> {

  const soundsEndpoint: string = 'https://freesound.org/apiv2/search/text/?query=music';
  const tempCorsProxy: string = 'http://localhost:8080/';
  const res: Response = await fetch(`${tempCorsProxy}${soundsEndpoint}`, {
    headers: {
      'Authorization': `Token ${await getAccessTokenClientSide()}`
    }
  });

  if (res.ok) {
    const fetchedSoundIds: number[] = [];
    const json: SoundList = await res.json();
    const results: SoundListItem[] = json.results;
    
    // Our app needs 3 samples
    for (let i: number = 0; i < 3; i++) {
      const randomIndex: number = Math.floor(Math.random() * results.length);
      fetchedSoundIds.push(results[randomIndex].id);
    }

    return fetchedSoundIds;
  } else {
    throw new Error(`Could not fetch sound IDs. Response: ${JSON.stringify(res)}`)
  }
}

function Samples () {
    const [soundIds, setSoundIds] = useState<number[]>(
      [557976, 557977, 557978] // fallback IDs
    )
    
    useEffect(() => {
      (async () => {
        setSoundIds(await getSoundIds());
      })();
    }, []);

    return (
        <ul className="grid grid-cols-3">
          <li><Sample key="sample-1" soundId={soundIds[0]} /></li>
          <li><Sample key="sample-2" soundId={soundIds[1]} /></li>
          <li><Sample key="sample-3" soundId={soundIds[2]} /></li>
        </ul>
    );
}

export default Samples;
