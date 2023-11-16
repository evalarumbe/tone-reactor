'use client';

import React from 'react';
import * as Tone from 'tone';

export default function TonePlay() {
  function makeSynth() {

  }

  async function handlePlay () {
    await Tone.start() // set Tone.context.state to 'running' instead of 'suspended'
    makeSynth();
  }

  return (
    <button onClick={handlePlay}>Play</button>
  );
}
