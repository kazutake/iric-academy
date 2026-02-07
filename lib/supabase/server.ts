// サーバー側で使うSupabaseクライアント（管理用）
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY!

export const supabaseAdmin = createClient(supabaseUrl, supabaseSecretKey)