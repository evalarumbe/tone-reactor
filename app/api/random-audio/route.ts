import 'server-only';
import { NextResponse } from 'next/server';
import { SoundList } from '../../vendor-types/freesound';

export async function GET(request: Request): Promise<NextResponse> {
  const res: Response = await fetch('https://freesound.org/apiv2/search/text/?' + new URLSearchParams({
    query: 'music',
    previews: '', // Docs say this is how to download sounds with basic Token auth
  }), {
    headers: {
      'Authorization': `Token ${process.env.FREESOUND_API_KEY}`,
    }
  });
  const json = await res.json(); // TODO: Annotate type once this func is working & in use
  
  const response = new NextResponse(json.results, {
    status: 200
  });
  return response;
}
