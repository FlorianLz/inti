import Login from "@/components/auth/login";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";
import {supabaseAuthInfos} from "@/lib/supabaseClient";

export default async function Page() {
    const supabase = createServerComponentClient<any>({cookies}, supabaseAuthInfos);
    const {data: {session}} = await supabase.auth.getSession();

    return (
        <div className="h-screen pt-4 pb-16">
            <Login session={session}/>
        </div>
    )
}