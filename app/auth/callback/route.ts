import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import {NextRequest, NextResponse} from 'next/server'
import process from "process";

export async function GET(request : NextRequest) {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')

    if (code) {
        const supabase = createRouteHandlerClient({ cookies }, {
            supabaseUrl: `${process.env.NEXT_PUBLIC_SUPABASE_URL}`,
            supabaseKey: `${process.env.NEXT_PUBLIC_SUPABASE_KEY}`,
        })
        await supabase.auth.exchangeCodeForSession(code)
    }

    return NextResponse.redirect(requestUrl.origin)
}