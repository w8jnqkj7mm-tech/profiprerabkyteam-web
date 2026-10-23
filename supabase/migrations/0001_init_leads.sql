-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create leads table
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),

  -- Metadata
  source TEXT DEFAULT 'web', -- 'web', 'phone', 'email', 'referral', etc.
  status TEXT DEFAULT 'new', -- 'new', 'responded', 'in_progress', 'completed', 'lost'

  -- Contact info
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  address TEXT, -- Lokalita stavby

  -- Project details
  type TEXT, -- 'small_work' / 'renovation'
  trade TEXT, -- 'complete', 'bathroom', 'electrical', 'plumbing', 'ac', 'handyman', 'carpentry', 'commercial'
  description TEXT, -- do 4000 znakov
  preferred_date DATE,

  -- Files
  photos JSONB, -- Array of {url, name, size} - stored in Supabase Storage

  -- Consent
  consent_at TIMESTAMPTZ,

  -- Internal use
  notes TEXT, -- Internal notes - do 4000 znakov
  assigned_to UUID, -- FK to auth.users (later, when connected with app)

  CONSTRAINT status_check CHECK (status IN ('new', 'responded', 'in_progress', 'completed', 'lost'))
);

-- Create indexes
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_source ON leads(source);
CREATE INDEX idx_leads_phone ON leads(phone);

-- Enable RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Anonymous users can INSERT only
CREATE POLICY "Anonymous users can insert leads"
  ON leads
  FOR INSERT
  WITH CHECK (auth.role() = 'anon');

-- RLS Policy: Only authenticated users (admin/manager) can SELECT and UPDATE
CREATE POLICY "Only authenticated users can read"
  ON leads
  FOR SELECT
  USING (auth.role() != 'anon');

CREATE POLICY "Only authenticated users can update"
  ON leads
  FOR UPDATE
  USING (auth.role() != 'anon');

-- Create pricing table (for cenník)
CREATE TABLE pricing (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  deleted_at TIMESTAMPTZ,

  category TEXT NOT NULL, -- 'service', 'travel', 'ac', etc.
  name TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  vat_included BOOLEAN DEFAULT TRUE, -- DPH zahrnutá?
  unit TEXT, -- 'hour', 'km', 'piece', 'meter', etc.
  ordering INT DEFAULT 0,
  active BOOLEAN DEFAULT TRUE,

  UNIQUE(category, name)
);

-- Create index
CREATE INDEX idx_pricing_active ON pricing(active, ordering);

-- RLS for pricing
ALTER TABLE pricing ENABLE ROW LEVEL SECURITY;

-- Anyone can read pricing
CREATE POLICY "Anyone can read pricing"
  ON pricing
  FOR SELECT
  USING (active = TRUE AND deleted_at IS NULL);

-- Only authenticated can modify
CREATE POLICY "Only authenticated can modify pricing"
  ON pricing
  FOR INSERT
  WITH CHECK (auth.role() != 'anon');

CREATE POLICY "Only authenticated can update pricing"
  ON pricing
  FOR UPDATE
  USING (auth.role() != 'anon');

-- Insert default pricing
INSERT INTO pricing (category, name, price, unit, ordering) VALUES
  ('service', 'Výjazd / konzultácia pri malej práci', 61.50, 'visit', 1),
  ('service', 'Každá ďalšia hodina', 55.35, 'hour', 2),
  ('service', 'Obhliadka pri veľkej zákazke (Bratislava)', 61.50, 'visit', 3),
  ('service', 'Obhliadka mimo Bratislavy', 61.50, 'visit', 4),
  ('travel', 'Doprava mimo Bratislavy', 0.65, 'km', 5),
  ('ac', 'Montáž klimatizácie (do 3,5 kW)', 350.00, 'installation', 6),
  ('ac', 'Každý ďalší meter rozvodu klimatizácie', 42.00, 'meter', 7)
ON CONFLICT (category, name) DO NOTHING;

-- Create storage bucket for lead photos
INSERT INTO storage.buckets (id, name, public, allowed_mime_types, file_size_limit)
VALUES (
  'lead-photos',
  'lead-photos',
  FALSE,
  ARRAY['image/jpeg', 'image/png', 'image/webp'],
  5242880 -- 5MB per file
)
ON CONFLICT DO NOTHING;

-- RLS for storage
CREATE POLICY "Anonymous can upload lead photos"
  ON storage.objects
  FOR INSERT
  WITH CHECK (
    bucket_id = 'lead-photos'
    AND auth.role() = 'anon'
    AND (storage.foldername(name))[1] = 'leads'
  );
