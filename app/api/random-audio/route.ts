import 'server-only';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const res = await fetch('https://freesound.org/apiv2/search/text/?' + new URLSearchParams({
    query: 'music',
    previews: '', // Docs say this is how to download sounds with basic Token auth
  }), {
    headers: {
      'Authorization': `Token ${process.env.FREESOUND_API_KEY}`,
    }
  });
  const json = await res.json();
  
  const response = new NextResponse(json.results, {
    status: 200
  });
  return response;
}
