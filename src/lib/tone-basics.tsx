/**
 * TODO: This is just js until I do a TS refresher
 */

/**
 * TODO NEXT: How do I get this to run?
 * Open tabs:
 * - https://medium.com/@90lineng/how-to-use-tone-js-with-your-react-project-3019f4b2b002
 * - https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading#with-no-ssr
 */

console.log('Hello Console')
import * as Tone from 'tone';

// create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();
const now = Tone.now()

document.querySelector('#tr-play')?.addEventListener('click', async () => {
  await Tone.start();
  console.log('audio is ready')

  // play a middle 'C' for the duration of an 8th note
  synth.triggerAttackRelease('C4', '8n');
});
