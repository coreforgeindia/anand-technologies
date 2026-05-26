import { NextResponse } from 'next/server'

const gasUrl = process.env.GOOGLE_APPS_SCRIPT_URL

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, company, email, phone, product_list, message } = body

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (!gasUrl) {
      console.error('GOOGLE_APPS_SCRIPT_URL is not set')
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    const payload = JSON.stringify({
      name,
      company: company || '',
      email,
      phone,
      product: (product_list || []).join(', '),
      message,
    })

    // Use waitUntil so Cloudflare Worker stays alive until GAS completes
    const ctx = (request as unknown as { waitUntil?: (p: Promise<unknown>) => void }).waitUntil
    const gasFetch = fetch(gasUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: payload,
      redirect: 'follow',
    }).catch((err) => console.error('GAS fetch error:', err))

    if (ctx) {
      ctx(gasFetch)
    } else {
      await gasFetch
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
