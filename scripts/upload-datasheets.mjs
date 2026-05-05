/**
 * Upload all PDFs to Cloudflare R2.
 * Run: node scripts/upload-datasheets.mjs
 */

import { createReadStream, readdirSync, statSync } from 'fs'
import { join, basename } from 'path'

const PDF_ROOT = 'E:\\Anand Technologies Sort\\PDF'
const BUCKET   = 'anand-technologies-datasheets'
const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID
const API_TOKEN  = process.env.CLOUDFLARE_API_TOKEN

if (!ACCOUNT_ID || !API_TOKEN) {
  console.error(`
ERROR: Missing environment variables.
Set these before running:

  $env:CLOUDFLARE_ACCOUNT_ID = "your-account-id"
  $env:CLOUDFLARE_API_TOKEN  = "your-api-token"

Find them at:
  Account ID  → Cloudflare dashboard → right sidebar on any domain page
  API Token   → dash.cloudflare.com/profile/api-tokens → Create Token → R2 Edit template
`)
  process.exit(1)
}

function getAllPDFs(dir) {
  const results = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      results.push(...getAllPDFs(full))
    } else if (entry.toLowerCase().endsWith('.pdf')) {
      results.push(full)
    }
  }
  return results
}

async function uploadFile(filePath) {
  const key = basename(filePath)
  const url = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/r2/buckets/${BUCKET}/objects/${encodeURIComponent(key)}`

  const fileStream = createReadStream(filePath)
  const chunks = []
  for await (const chunk of fileStream) chunks.push(chunk)
  const body = Buffer.concat(chunks)

  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/pdf',
      'Content-Length': String(body.length),
    },
    body,
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`HTTP ${res.status}: ${text}`)
  }
}

const pdfs = getAllPDFs(PDF_ROOT)
console.log(`Found ${pdfs.length} PDFs — uploading to R2...\n`)

let uploaded = 0
let failed = 0
const failures = []

for (const pdfPath of pdfs) {
  const key = basename(pdfPath)
  try {
    await uploadFile(pdfPath)
    uploaded++
    process.stdout.write(`\r✓ ${uploaded}/${pdfs.length} uploaded`)
  } catch (err) {
    failed++
    failures.push({ key, error: err.message })
  }
}

console.log(`\n\nDone! ${uploaded} uploaded, ${failed} failed.`)

if (failures.length) {
  console.log('\nFailed files:')
  failures.forEach(f => console.log(`  ✗ ${f.key}\n    ${f.error}`))
}

if (uploaded > 0) {
  console.log('\nNext steps:')
  console.log('  1. Cloudflare Dashboard → R2 → anand-technologies-datasheets → Settings → Public Access → Allow')
  console.log('  2. Copy the public URL (e.g. https://pub-abc123.r2.dev)')
  console.log('  3. Add to .env.local:  NEXT_PUBLIC_R2_BASE_URL=https://pub-abc123.r2.dev')
  console.log('  4. npm run deploy')
}
