import {supabaseAuthInfos} from "@/lib/supabaseClient";
import {createClientComponentClient, createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";
import {ITrip} from "@/interfaces/Trip.interface";
import {Back} from "@/components/Back";
import ResultCard from "@/components/ResultCard";

export default async function Home({params}: { params: { uuid: string } }) {
    const supabase = createServerComponentClient<any>({cookies}, supabaseAuthInfos);
    const {data}: { data: any } = await supabase.from('search_requests').select().eq('uuid', params.uuid)
    const results : ITrip[] = data[0]?.result ?? [];
    console.log(data)

    return (
        <div className="flex flex-col py-4">
            <div>
                <h1 className='title-l'>Résultats</h1>
                <p className="text-neutral-100 mb-10">{results.length} résultats</p>
            </div>
            <div className="flex flex-col gap-7">
                {results.map((destination, index) =>
                    <ResultCard key={index}
                        id={index}
                        picture={destination.booking.thumbnail}
                        country={destination.booking.countryName}
                        name={destination.booking.hotelName}
                        duration={destination.booking.nbDays}
                        price={destination.travelerPrice}
                    />
                )}
            </div>
        </div>
    )
}
