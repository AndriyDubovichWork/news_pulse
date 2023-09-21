import axios from 'axios';
import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export async function GET() {
  const html = await axios
    .get('https://axios-http.com/docs/intro')
    .then((res) => res.data);
  const $ = cheerio.load(html);

  console.log($('p'));
  return NextResponse.json({ hello: 'hi' });
}
