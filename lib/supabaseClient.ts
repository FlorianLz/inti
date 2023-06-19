import {createClient} from '@supabase/supabase-js'
import * as process from "process";

export const supabase = createClient(
    'SUPABASE_URL',
    'SUPABASE_KEY',
    {
        auth: {
            persistSession: false,
        },
    })


export async function signInWithGoogle() {
    const {data, error} = await supabase.auth.signInWithOAuth({
        provider: 'google',
    })
}

export async function signout() {
    const {error} = await supabase.auth.signOut()
}

export async function getSession() {
    return await supabase.auth.getSession();
}