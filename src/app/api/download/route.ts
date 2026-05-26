import { NextResponse } from 'next/server'

const gasUrl = process.env.GOOGLE_APPS_SCRIPT_URL

export const runtime = 'edge'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, company, email, phone, purpose, product_name, datasheet_url } = body

    if (!name || !company || !email || !phone || !purpose || !datasheet_url) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const filename = decodeURIComponent(datasheet_url.split('/').pop() || '')
    if (!filename) {
      return NextResponse.json({ error: 'Invalid datasheet URL' }, { status: 400 })
    }

    // Log to Google Sheet — fire and forget
    if (gasUrl) {
      fetch(gasUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sheet: 'Sheet2',
          name,
          company,
          email,
          phone,
          purpose,
          product: product_name,
          datasheet: filename,
        }),
        redirect: 'follow',
      }).catch((err) => console.error('GAS error:', err))
    }

    // Return the public URL — browser will download it directly
    return NextResponse.json({ url: datasheet_url })
  } catch (error) {
    console.error('Download error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
