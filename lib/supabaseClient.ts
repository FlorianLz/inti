import {createClient} from '@supabase/supabase-js'
import * as process from "process";

export const supabase = createClient(
    'https://scksfmmylkkaqkckvvek.supabase.co/',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNja3NmbW15bGtrYXFrY2t2dmVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY2ODI3MDAsImV4cCI6MjAwMjI1ODcwMH0.-kN0uNm1Z4TAInLG6-9tBGjjseF7-SA5OzvWYviIIKo',
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