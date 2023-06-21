import {Back} from "@/components/Back";
import destination1 from "@/public/images/destination1.png";
import destination2 from "@/public/images/destination2.png";
import destination3 from "@/public/images/destination3.png";
import destination4 from "@/public/images/destination4.png";
import destination5 from "@/public/images/destination5.png";
import destination6 from "@/public/images/destination6.png";
import ResultCard from "@/components/ResultCard";

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
    },
    {
        id: 3,
        name: 'Rome',
        country: 'Italie',
        price: 699,
        duration: 7,
        picture: destination3
    },
    {
        id: 4,
        name: 'Viosa',
        country: 'Albanie',
        price: 802,
        duration: 7,
        picture: destination4
    },
    {
        id: 5,
        name: 'Calp',
        country: 'Espagne',
        price: 549,
        duration: 8,
        picture: destination5
    },
    {
        id: 6,
        name: 'Gorges du Verdon',
        country: 'France',
        price: 405,
        duration: 6,
        picture: destination6
    }
]

export default function ResultPage() {
    return <div className="flex flex-col py-4">
        <div>
            <Back/>
            <h1 className='title-l'>Résultats</h1>
            <p className="text-neutral-100">{destinations.length} résultats</p>
        </div>
        <div className="flex flex-col gap-7">
            {destinations.map(destination => <ResultCard key={destination.id} {...destination}/>)}
        </div>
    </div>
}