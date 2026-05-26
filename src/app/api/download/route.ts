import { NextResponse } from 'next/server'

const gasUrl = process.env.GOOGLE_APPS_SCRIPT_URL
const r2BaseUrl = process.env.NEXT_PUBLIC_R2_BASE_URL

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, purpose, product_name, datasheet_url } = body

    if (!name || !email || !phone || !purpose || !datasheet_url) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (!gasUrl) {
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    // Log to Google Sheet (Sheet2) via GAS
    fetch(gasUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sheet: 'Sheet2',
        name,
        email,
        phone,
        purpose,
        product: product_name,
        datasheet: datasheet_url,
      }),
      redirect: 'follow',
    }).catch((err) => console.error('GAS log error:', err))

    // Build the full R2 URL
    const fullUrl = datasheet_url.startsWith('http')
      ? datasheet_url
      : `${r2BaseUrl}${datasheet_url}`

    return NextResponse.json({ url: fullUrl })
  } catch (error) {
    console.error('Download API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
