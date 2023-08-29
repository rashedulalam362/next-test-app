

import { NextResponse } from 'next/server';
export async function POST (req, res) {

  const theme =req.cookies.get('theme')['value']

  return NextResponse.json({
    msg:theme,
  })

}