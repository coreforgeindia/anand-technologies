-- Anand Technologies - Supabase Schema
-- Run this in your Supabase SQL editor

-- Products table
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  category TEXT NOT NULL,
  short_spec TEXT NOT NULL DEFAULT '',
  frequency_range TEXT NOT NULL DEFAULT '',
  description TEXT NOT NULL DEFAULT '',
  specs JSONB NOT NULL DEFAULT '{}',
  datasheet_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enquiries table
CREATE TABLE IF NOT EXISTS enquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  company TEXT NOT NULL DEFAULT '',
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  product_list TEXT[] NOT NULL DEFAULT '{}',
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new',  -- new | contacted | closed
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS products_slug_idx ON products(slug);
CREATE INDEX IF NOT EXISTS products_category_idx ON products(category);
CREATE INDEX IF NOT EXISTS enquiries_email_idx ON enquiries(email);
CREATE INDEX IF NOT EXISTS enquiries_created_at_idx ON enquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS enquiries_status_idx ON enquiries(status);

-- Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

-- Products: publicly readable, only service role can write
CREATE POLICY "Products are publicly viewable" ON products
  FOR SELECT USING (true);

CREATE POLICY "Service role can insert products" ON products
  FOR INSERT WITH CHECK (auth.role() = 'service_role');

CREATE POLICY "Service role can update products" ON products
  FOR UPDATE USING (auth.role() = 'service_role');

-- Enquiries: only service role can read and write (never expose to public)
CREATE POLICY "Service role can manage enquiries" ON enquiries
  FOR ALL USING (auth.role() = 'service_role');

-- Allow anonymous INSERT for enquiry form submissions via API route
-- (API route uses service role key, so this is safe)
CREATE POLICY "Allow enquiry submission via API" ON enquiries
  FOR INSERT WITH CHECK (true);

-- Updated_at trigger for products
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Storage bucket for product datasheets
INSERT INTO storage.buckets (id, name, public)
VALUES ('datasheets', 'datasheets', true)
ON CONFLICT (id) DO NOTHING;

-- Datasheets: publicly readable
CREATE POLICY "Datasheets are publicly readable" ON storage.objects
  FOR SELECT USING (bucket_id = 'datasheets');

CREATE POLICY "Service role can upload datasheets" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'datasheets' AND auth.role() = 'service_role');
