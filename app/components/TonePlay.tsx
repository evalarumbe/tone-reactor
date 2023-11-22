'use client';

import React from 'react';
import * as Tone from 'tone';
import { makeSynth } from '../lib/tr-tone';

export default function TonePlay() {
  
  async function handlePlay () {
    await Tone.start() // set Tone.context.state to 'running' instead of 'suspended'
    console.log('Tone:');
    console.log(Tone);
    makeSynth();
  }

  return (
    <button onClick={handlePlay} className="text-lg font-bold text-orange-600 hover:text-orange-400">Play</button>
  );
}
