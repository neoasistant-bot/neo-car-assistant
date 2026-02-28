import { createClient } from '@supabase/supabase-js'

// Variables de entorno — configurar en .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Faltan variables de entorno de Supabase. ' +
    'Copiá .env.example a .env.local y completá los valores.'
  )
}

// Cliente Supabase — singleton para uso en cliente y servidor
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos de base de datos (expandir con codegen de Supabase cuando el schema esté listo)
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
        Row: {
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
        Insert: Omit<Database['public']['Tables']['cars']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['cars']['Insert']>
      }
    }
  }
}
