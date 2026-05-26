import { NextResponse } from 'next/server'
import { getCloudflareContext } from '@opennextjs/cloudflare'

const gasUrl = process.env.GOOGLE_APPS_SCRIPT_URL

export const runtime = 'edge'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, company, email, phone, purpose, product_name, datasheet_url } = body

    if (!name || !company || !email || !phone || !purpose || !datasheet_url) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Log to GAS / Sheet2 — fire and forget
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
          datasheet: datasheet_url,
        }),
        redirect: 'follow',
      }).catch((err) => console.error('GAS log error:', err))
    }

    // Fetch the PDF from the static assets binding (works on Cloudflare and local dev)
    const { env } = await getCloudflareContext({ async: true })
    const assetUrl = new URL(datasheet_url, request.url)
    const assetResponse = await (env.ASSETS as { fetch: (r: Request) => Promise<Response> }).fetch(
      new Request(assetUrl.toString())
    )

    if (!assetResponse.ok) {
      return NextResponse.json({ error: 'Datasheet file not found' }, { status: 404 })
    }

    const filename = decodeURIComponent(datasheet_url.split('/').pop() || 'datasheet.pdf')

    return new NextResponse(assetResponse.body, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    })
  } catch (error) {
    console.error('Download API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
