import {supabaseAuthInfos} from "@/lib/supabaseClient";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";
import Menu from "@/components/Menu";
import Login from "@/components/auth/login";
import Image from "next/image";
import Logout from "@/components/auth/logout";

export default async function Account() {
    const supabase = createServerComponentClient<any>({cookies}, supabaseAuthInfos);
    const {data: {session}} = await supabase.auth.getSession();

    return (
        <div className="h-screen pt-4 pb-16">
            {session ? (
                <div className="w-full h-full flex flex-col justify-center gap-8">
                    <div className="flex flex-col justify-start gap-4 items-center">
                        {session.user.user_metadata.avatar_url &&
                            <div className="w-32 h-32 rounded-full overflow-hidden">
                                <Image src={session.user.user_metadata.avatar_url}
                                       alt={session.user.user_metadata.full_name}
                                       className="w-full h-full object-cover"
                                       width="300" height="300"/>
                            </div>}
                        <span className="font-bold text-lg">{session.user.user_metadata.full_name}</span>
                    </div>
                    <Logout/>
                </div>
            ) : (
                <Login session={session}/>
            )}
            <Menu/>
        </div>
    )
}
