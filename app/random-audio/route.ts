import 'server-only';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const res = await fetch('https://freesound.org/apiv2/search/text/?' + new URLSearchParams({
    query: 'music',
    filter: 'tag:guitar',
  }), {
    headers: {
      'Authorization': `Token ${process.env.FREESOUND_API_KEY}`,
    }
  });
  const json = await res.json();
  
  const response = new NextResponse(json, {
    status: 200
  });
  console.log('====================================');
  console.log('REQUEST');
  console.log(request);
  console.log('------------------------------------');
  console.log('RESPONSE');
  console.log(response);
  console.log('====================================');

  console.log('RES FROM FREESOUND')
  console.log(res)
  return response;
}
