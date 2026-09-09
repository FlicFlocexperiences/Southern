import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url');

    if (!url) {
        return NextResponse.json({ error: 'Missing url parameter' }, { status: 400 });
    }

    try {
        const imageRes = await fetch(url);
        if (!imageRes.ok) {
            return NextResponse.json({ error: 'Failed to fetch image from target URL' }, { status: imageRes.status });
        }

        const contentType = imageRes.headers.get('content-type') || 'image/png';
        const buffer = await imageRes.arrayBuffer();

        return new Response(buffer, {
            headers: {
                'Content-Type': contentType,
                'Cache-Control': 'public, max-age=86400',
            },
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message || 'Failed to proxy image' }, { status: 500 });
    }
}
