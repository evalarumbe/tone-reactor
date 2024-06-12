import * as Tone from 'tone';

// Basic example of synth
export function makeSynth(): void {
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease("C4", "8n");
}

// TODO: manage audio so it actually toggles. Right now it just starts
export function toggleAudioOn(audioSrc: string): void {
  const player = new Tone.Player(audioSrc).toDestination();  
  player.autostart = true;
}

// TODO: Abstract to apply any effect to any audioSrc
export function playAudioWithFeedbackDelay(audioSrc?: string): void {
  const player = new Tone.Player(audioSrc || '/audio/2023-07-20-Blind-studio-session---Simon-+-Eva-G-80bpm.mp3');
  const feedbackDelay = new Tone.FeedbackDelay('8n', 0.5);

  player.connect(feedbackDelay);
  feedbackDelay.toDestination();

  player.autostart = true;
}

export function muteAll(isMute: boolean): void {
  Tone.Destination.mute = isMute;
}
