import * as Tone from 'tone';

export function makeSynth(): void {
  const synth: Tone.Synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease("C4", "8n");
}
