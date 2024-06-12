'use client';

import React from 'react';
import * as Tone from 'tone';
import { makeSynth, playAudioWithFeedbackDelay } from '../lib/tone';

function TonePlay() {
  
  async function handlePlay (): Promise<void> {
    await Tone.start() // set Tone.context.state to 'running' instead of 'suspended'
    console.log('Tone:');
    console.log(Tone);
    // makeSynth();
    playAudioWithFeedbackDelay();
  }

  return (
    <button onClick={handlePlay} className="text-lg font-bold text-orange-600 hover:text-orange-400">Play</button>
  );
}

export default TonePlay;
