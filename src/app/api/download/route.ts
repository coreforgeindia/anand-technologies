import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, company, email, phone, purpose, product_name, datasheet_url } = body

    if (!name || !company || !email || !phone || !purpose || !datasheet_url) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const filename = decodeURIComponent((datasheet_url as string).split('/').pop() || '')
    if (!filename) {
      return NextResponse.json({ error: 'Invalid datasheet URL' }, { status: 400 })
    }

    // Log to Google Sheet — fire and forget, never block the download
    const gasUrl = process.env.GOOGLE_APPS_SCRIPT_URL
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
      }).catch(() => {/* silent */})
    }

    return NextResponse.json({ url: datasheet_url })
  } catch (error) {
    console.error('Download error:', String(error))
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
