import {MultiStepForm} from "@/components/MultiStepsForm";
import {supabaseAuthInfos} from "@/lib/supabaseClient";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";

export default async function Home() {
    const supabase = createServerComponentClient<any>({ cookies }, supabaseAuthInfos);
    const {data: { session }} = await supabase.auth.getSession();

    return (
        <div className="h-screen py-4">
            <MultiStepForm session={session}/>
        </div>
    )
}
