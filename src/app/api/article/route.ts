import axios from 'axios';
import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';
import { useParams } from 'next/navigation';

async function getHtml(url: string) {
  return await axios
    .get(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36',
      },
    })
    .then((res) => res.data);
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const url = searchParams.get('url');

  if (url) {
    const html = await getHtml(url);
    const $ = cheerio.load(html);
    $('#top-wrapper').remove();
    $('#sponsor-wrapper').remove();
    $('[role=toolbar]').remove();
    $('#bottom-wrapper').remove();
    $('svg').remove();

    const articleHtml = $('#story').toString();

    return new NextResponse(articleHtml);
  } else {
    return NextResponse.json({ status: 500, statusText: 'incorrect param' });
  }
}
