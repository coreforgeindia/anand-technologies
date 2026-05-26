import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, company, email, phone, purpose, product_name, datasheet_url } = body

    if (!name || !company || !email || !phone || !purpose || !datasheet_url) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const gasUrl = process.env.GOOGLE_APPS_SCRIPT_URL
    if (!gasUrl) {
      console.error('GOOGLE_APPS_SCRIPT_URL is not set')
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    const filename = decodeURIComponent((datasheet_url as string).split('/').pop() || '')

    const ctx = (request as unknown as { waitUntil?: (p: Promise<unknown>) => void }).waitUntil
    const gasFetch = fetch(gasUrl, {
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
    }).catch((err) => console.error('GAS fetch error:', err))

    if (ctx) {
      ctx(gasFetch)
    } else {
      await gasFetch
    }

    return NextResponse.json({ url: datasheet_url })
  } catch (error) {
    console.error('Download API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
