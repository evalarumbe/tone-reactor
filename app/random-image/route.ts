import 'server-only';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  console.log(request.query)

  // fetch a blob from external api
  const res = await fetch(
    `https://api.api-ninjas.com/v1/randomimage?category=abstract&tr-cacheref=${Date.now()}`,
    {
      headers: {
        'X-Api-Key': process.env.RANDOMIMAGE_API_KEY || '',
        'Accept': 'image/jpg',
      },
    }
  );
  const imageBlob = await res.blob();

  // return the blob to the caller in the response
  const response = new NextResponse(imageBlob, {
    status: 200,
  });

  // client can now make a URL from that blob
  return response;
}
