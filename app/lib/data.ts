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

  return new Blob(chunks);
}
