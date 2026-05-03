import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const gasUrl = process.env.GOOGLE_APPS_SCRIPT_URL!

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, company, email, phone, product_list, message } = body

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Store in Supabase
    const supabase = createClient(supabaseUrl, supabaseServiceKey)
    const { error: dbError } = await supabase.from('enquiries').insert({
      name,
      company: company || '',
      email,
      phone,
      product_list: product_list || [],
      message,
    })

    if (dbError) {
      console.error('Supabase error:', dbError)
    }

    // Trigger Google Apps Script
    if (gasUrl) {
      try {
        await fetch(gasUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            company: company || '',
            email,
            phone,
            products: (product_list || []).join(', '),
            message,
            timestamp: new Date().toISOString(),
          }),
        })
      } catch (gasError) {
        console.error('Google Apps Script error:', gasError)
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
