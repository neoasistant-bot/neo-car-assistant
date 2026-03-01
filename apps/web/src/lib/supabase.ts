import { createBrowserClient } from '@supabase/ssr'

// ─── Tipos del schema ────────────────────────────────────────────────────────

export type Car = {
  id: string
  user_id: string
  name: string
  brand: string
  model: string
  year: number
  plate: string
  mileage: number
  mileage_unit: 'km' | 'mi'
  photo_url: string | null
  created_at: string
  updated_at: string
}

export type ServiceType = {
  id: string
  name: string
  description: string | null
  interval_km: number | null
  interval_months: number | null
  priority: 'low' | 'medium' | 'high' | 'critical'
  is_default: boolean
}

export type ServiceRecord = {
  id: string
  car_id: string
  service_type_id: string
  date: string
  mileage_at_service: number | null
  next_date: string | null
  next_mileage: number | null
  shop: string | null
  cost: number | null
  notes: string | null
  created_at: string
}

export type VtvRecord = {
  id: string
  car_id: string
  date: string
  next_date: string | null
  station: string | null
  notes: string | null
  created_at: string
}

export type NotificationSettings = {
  id: string
  user_id: string
  car_id: string | null
  frequency: 'daily' | 'weekly' | 'monthly'
  preferred_hour: number
  enabled: boolean
  created_at: string
}

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          name: string | null
          email: string | null
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['profiles']['Row'], 'created_at'>
        Update: Partial<Database['public']['Tables']['profiles']['Insert']>
      }
      cars: {
        Row: Car
        Insert: Omit<Car, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Car, 'id' | 'created_at' | 'updated_at'>>
      }
      service_types: {
        Row: ServiceType
        Insert: Omit<ServiceType, 'id'>
        Update: Partial<Omit<ServiceType, 'id'>>
      }
      service_records: {
        Row: ServiceRecord
        Insert: Omit<ServiceRecord, 'id' | 'created_at'>
        Update: Partial<Omit<ServiceRecord, 'id' | 'created_at'>>
      }
      vtv_records: {
        Row: VtvRecord
        Insert: Omit<VtvRecord, 'id' | 'created_at'>
        Update: Partial<Omit<VtvRecord, 'id' | 'created_at'>>
      }
      notification_settings: {
        Row: NotificationSettings
        Insert: Omit<NotificationSettings, 'id' | 'created_at'>
        Update: Partial<Omit<NotificationSettings, 'id' | 'created_at'>>
      }
    }
  }
}

// ─── Cliente browser (Client Components) ─────────────────────────────────────

export function createSupabaseBrowserClient() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

// Singleton para uso directo en client components
export const supabase = createSupabaseBrowserClient()
