import * as Tone from 'tone';

export function makeSynth() {
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease("C4", "8n");
}
