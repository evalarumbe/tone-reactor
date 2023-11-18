import 'server-only';
import { NextRequest, NextResponse } from 'next/server';

// i want a client component to programmatically call this endpoint
export async function GET(request: NextRequest) {
  // fetch a blob from external api

  const res = await fetch(
    'https://api.api-ninjas.com/v1/randomimage?category=abstract',
    {
      headers: { // TODO: TS error: Handle the undefined case: https://stackoverflow.com/questions/65296563/type-undefined-is-not-assignable-to-type-string-string
        'X-Api-Key': process.env.RANDOMIMAGE_API_KEY,
        'Accept': 'image/jpg',
      }
    }
  );
  const imageBlob = await res.blob();

  // return the blob to the caller in the response
  const response = new NextResponse(imageBlob, {
    status: 200
  });
  console.log('====================================');
  console.log('REQUEST');
  console.log(request);
  console.log('------------------------------------');
  console.log('RESPONSE');
  console.log(response);
  console.log('====================================');
  return response;
}
// client can now make a URL from that blob
