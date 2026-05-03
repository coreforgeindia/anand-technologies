import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Product = {
  id: string
  name: string
  slug: string
  category: string
  specs: Record<string, string>
  description: string
  datasheet_url: string | null
  short_spec: string
  frequency_range: string
  created_at: string
}

export type Enquiry = {
  id?: string
  name: string
  email: string
  phone: string
  company: string
  product_list: string[]
  message: string
  created_at?: string
}
