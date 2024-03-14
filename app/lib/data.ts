export function fetchLocalRoute(endpoint: string) {
  // TODO: this is gonna be a wrapper right? so it should return a func that populates some of the request for a new fetch call to the backend.
  // maybe this func accepts another request, and uses that req to make a new req to the backend, then returns the response that this func gets from the back.
}

/**
 * Take a ReadableStream, such as those returned by freesound.org
 * Return a Blob (as a Promise), to be consumed by <audio>
 */
export async function streamToBlob(stream: ReadableStream<Uint8Array>) {
  const reader: ReadableStreamDefaultReader = stream.getReader();
  const chunks: Uint8Array[] = [];

  while (true) {
    const { done, value } = await reader.read();
    chunks.push(value);
    if (done) {
      break;
    }
  }

  // TODO NEXT: What am I passing into this object? am i telling Blob what to expect because wav is defined elsewhere, or a i defining wav here for the first time? how does this relate to file type coming from freesound? am i also setting headers about what file type i expect in my local api route?
  const blob = new Blob(chunks, { type: 'audio/wav; codecs=0' }); // TODO: try wav or mp3. (might also have to change the headers to receive the right format)

  return blob; // blob:http://localhost:3000/8744e81a-f68a-4027-af7d-20d91da057d6
}
