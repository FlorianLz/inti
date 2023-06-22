import * as process from "process";


export const supabaseAuthInfos = {
    supabaseUrl: `${process.env.NEXT_PUBLIC_SUPABASE_URL}`,
    supabaseKey: `${process.env.NEXT_PUBLIC_SUPABASE_KEY}`,
}