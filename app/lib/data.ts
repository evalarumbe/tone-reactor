export function fetchLocalRoute(endpoint: string) { // TODO: Annotate type
  // TODO: this is gonna be a wrapper right? so it should return a func that populates some of the request for a new fetch call to the backend.
  // maybe this func accepts another request, and uses that req to make a new req to the backend, then returns the response that this func gets from the back.
}

export async function getAccessTokenClientSide(): Promise<string> {
  const res = await fetch(`${window.location.origin}/api/freesound-access-token/`, {
    headers: {
      'Accept-type': 'text/plain;charset=UTF-8',
    }});
  return await res.text();
}
