import destination1 from "@/public/images/destination1.png";
import destination2 from "@/public/images/destination2.png";
import DestinationCard from "@/components/DestinationCard";
import ResultCard from "@/components/ResultCard";
import top1 from "@/public/images/top1.png";
import top2 from "@/public/images/top2.png";
import top3 from "@/public/images/top3.png";
import top4 from "@/public/images/top4.png";
import top5 from "@/public/images/top5.png";
import top6 from "@/public/images/top6.png";
import top7 from "@/public/images/top7.png";
import top8 from "@/public/images/top8.png";
import top9 from "@/public/images/top9.png";
import top10 from "@/public/images/top10.png";
import Link from "next/link";
import Menu from "@/components/Menu";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";
import {supabaseAuthInfos} from "@/lib/supabaseClient";

const destinations = [
    {
        id: 1,
        name: 'Kotor',
        country: 'Monténégro',
        price: 799,
        duration: 8,
        picture: destination1
    },
    {
        id: 2,
        name: 'Athènes',
        country: 'Grèce',
        price: 699,
        duration: 6,
        picture: destination2
    }
]

const topDestinations = [
    {
        id: 1,
        country: 'France',
        picture: top1
    },
    {
        id: 2,
        country: 'Espagne',
        picture: top2
    },
    {
        id: 3,
        country: 'Etats-Unis',
        picture: top3
    },
    {
        id: 4,
        country: 'Italie',
        picture: top4
    },
    {
        id: 5,
        country: 'Portugal',
        picture: top5
    },
    {
        id: 6,
        country: 'Angleterre',
        picture: top6
    },
    {
        id: 7,
        country: 'Thaïlande',
        picture: top7
    },
    {
        id: 8,
        country: 'Grèce',
        picture: top8
    },
    {
        id: 9,
        country: 'Canada',
        picture: top9
    },
    {
        id: 10,
        country: 'Croatie',
        picture: top10
    }
]
export default async function HomePage() {
    const supabase = createServerComponentClient<any>({cookies}, supabaseAuthInfos);
    const {data: {session}} = await supabase.auth.getSession();
    const fullName = session?.user.user_metadata.full_name
    const firstName = fullName?.split(' ')[0] ?? ''

    return (
        <div className="pt-4 pb-16 h-full">

            <h1 className="title-m pt-2 pb-6">Bonjour {firstName}</h1>
            <div className="bg-primary-950 rounded-2xl p-8 mb-10">
                <div className="pb-6 text-center">
                    <p className="title-s">Partir en vacances</p>
                    <p className="text-base">Créez un voyage pour organiser vos voyages entre amis, en famille ou en
                        solo.</p>
                </div>
                <Link href="/search" className='button-primary hover:bg-primary-700 block text-center'>Créez un
                    voyage</Link>
            </div>

            <h2 className="title-s pb-6">Les voyages en promotion</h2>
            <div className="flex flex-col items-center">
                {destinations.map(destination => <ResultCard key={destination.id} {...destination} />)}
            </div>
            <h2 className="title-s pb-6">Top 10 des destinations internationales</h2>

            <div className="flex flex-wrap justify-between gap-2">
                {topDestinations.map(destination => <DestinationCard key={destination.id} {...destination} />)}
            </div>
            <Menu/>
        </div>
    )
}
