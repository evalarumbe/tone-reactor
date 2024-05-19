import 'server-only';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const response = new NextResponse(process.env.FREESOUND_API_KEY, {
        status: 200
    });
    return response;
  }