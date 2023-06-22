import {supabaseAuthInfos} from "@/lib/supabaseClient";
import {createClientComponentClient, createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";
import {ITrip} from "@/interfaces/Trip.interface";

export default async function Home({params}: { params: { id: string } }) {
    const supabase = createServerComponentClient<any>({cookies}, supabaseAuthInfos);
    const {data}: { data: any } = await supabase.from('search_requests').select().eq('id', params.id)
    const results : ITrip[] = data[0]?.result ?? [];
    console.log(data)

    return (
        <div className="h-screen py-4">
            Salut
            {results.map((result, index)=> (
                <div key={index}>
                    <span>{result.booking.hotelName}</span>
                </div>
            ))}
        </div>
    )
}
