import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {createMiddlewareClient} from "@supabase/auth-helpers-nextjs";
import {supabaseAuthInfos} from "@/lib/supabaseClient";

export async function middleware(req: NextRequest) {
    const res = NextResponse.next()
    const supabase = createMiddlewareClient({ req, res }, {
        ...supabaseAuthInfos
    })
    const {data: {session}} = await supabase.auth.getSession();
    if (!session){
        return NextResponse.redirect(new URL('/', req.url))
    }
    return res;
}

export const config = {
    matcher: ['/search/:path*'],
}