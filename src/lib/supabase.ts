import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

// Types for leads
export interface Lead {
  id: string;
  created_at: string;
  updated_at: string;
  source: 'web' | 'phone' | 'email' | 'referral' | 'other';
  status: 'new' | 'responded' | 'in_progress' | 'completed' | 'lost';
  name: string;
  phone: string;
  email: string;
  address?: string;
  type?: 'small_work' | 'renovation';
  trade?: string;
  description?: string;
  preferred_date?: string;
  photos?: Array<{ url: string; name: string; size: number }>;
  consent_at?: string;
  notes?: string;
  assigned_to?: string;
}

// Submit lead to Supabase
export async function submitLead(data: Partial<Lead> & { name: string; phone: string; email: string }) {
  const { data: lead, error } = await supabase
    .from('leads')
    .insert({
      ...data,
      source: 'web',
      status: 'new',
      consent_at: new Date().toISOString(),
    })
    .select()
    .single();

  if (error) {
    console.error('Error submitting lead:', error);
    throw error;
  }

  return lead;
}

// Upload photos to storage
export async function uploadLeadPhotos(leadId: string, files: File[]) {
  const uploadedPhotos = [];

  for (const file of files) {
    const fileName = `leads/${leadId}/${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage.from('lead-photos').upload(fileName, file);

    if (error) {
      console.error('Error uploading photo:', error);
      continue;
    }

    uploadedPhotos.push({
      url: data.path,
      name: file.name,
      size: file.size,
    });
  }

  return uploadedPhotos;
}

// Get pricing
export async function getPricing() {
  const { data: pricing, error } = await supabase
    .from('pricing')
    .select('*')
    .eq('active', true)
    .is('deleted_at', null)
    .order('ordering');

  if (error) {
    console.error('Error fetching pricing:', error);
    return [];
  }

  return pricing || [];
}

// Calculate price with/without VAT
export function formatPrice(price: number, includeVat: boolean = true, vatRate: number = 0.23) {
  if (includeVat) {
    return price;
  }
  return price / (1 + vatRate);
}

export function getPriceWithoutVat(price: number, vatRate: number = 0.23) {
  return price / (1 + vatRate);
}

export function getPriceWithVat(price: number, vatRate: number = 0.23) {
  return price * (1 + vatRate);
}
