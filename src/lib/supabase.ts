
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wmvfuzprqlthggalehau.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtdmZ1enBycWx0aGdnYWxlaGF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzOTE3ODUsImV4cCI6MjA1NTk2Nzc4NX0.0UDKwIK69FCStV6jeHfbTSD7sk0ZKqX47e3X13X1vpY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
