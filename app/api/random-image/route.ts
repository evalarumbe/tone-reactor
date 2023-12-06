import 'server-only';
import { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from 'next/server';

// export async function GET(req: NextApiRequest) {
export async function GET(req: NextRequest) {
  console.log(req);
  // console.log(req.query.id);
  
  // fetch a blob from external api
  const response = await fetch(
    `https://api.api-ninjas.com/v1/randomimage?category=abstract&trCacheref=${Date.now()}`,
    {
      headers: {
        'X-Api-Key': process.env.RANDOMIMAGE_API_KEY || '',
        'Accept': 'image/jpg',
      },
    }
  );
  const imageBlob = await response.blob();

  // return the blob to the caller in the response
  const res = new NextResponse(imageBlob, {
    status: 200,
    headers: {
      'Content-Type': 'image/jpg',
    },
  })
  return res;
}
