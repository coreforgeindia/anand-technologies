import { NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import path from 'path'

const gasUrl = process.env.GOOGLE_APPS_SCRIPT_URL

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, company, email, phone, purpose, product_name, datasheet_url } = body

    if (!name || !company || !email || !phone || !purpose || !datasheet_url) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (!gasUrl) {
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    // Log to GAS / Sheet2 — fire and forget
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

    // datasheet_url is like /datasheets/AT-ANT-QGSM-SMA110-3.0%20(SL).pdf
    // Resolve to the actual file in /public
    const relative = decodeURIComponent(datasheet_url.replace(/^\//, ''))
    const filePath = path.join(process.cwd(), 'public', relative)

    let fileBuffer: Buffer
    try {
      fileBuffer = await readFile(filePath)
    } catch {
      return NextResponse.json({ error: 'Datasheet file not found' }, { status: 404 })
    }

    const filename = path.basename(filePath)

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Content-Length': String(fileBuffer.length),
      },
    })
  } catch (error) {
    console.error('Download API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
