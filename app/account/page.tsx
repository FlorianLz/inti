import {supabaseAuthInfos} from "@/lib/supabaseClient";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";
import Menu from "@/components/Menu";
import Login from "@/components/auth/login";

export default async function Account() {
    const supabase = createServerComponentClient<any>({ cookies }, supabaseAuthInfos);
    const {data: { session }} = await supabase.auth.getSession();

    return (
        <div className="pt-4 pb-16">
            <div>Salut beau gosse</div>
            <Login session={session}/>
            <Menu />
        </div>
    )
}
