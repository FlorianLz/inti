import {Back} from "@/components/Back";
import Image from "next/image";
import destination1 from "@/public/images/destination1.png";
import destination2 from "@/public/images/destination2.png";
import destination3 from "@/public/images/destination3.png";
import destination4 from "@/public/images/destination4.png";
import destination5 from "@/public/images/destination5.png";
import destination6 from "@/public/images/destination6.png";

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
            {destinations.map(destination => <div key={destination.id}>
                <span className="number-result text-secondary-500">{destination.id}</span>
                <Image src={destination.picture} alt="" className="rounded-2xl"/>
                <div className="flex flex-col shadow-2xl p-4 rounded-2xl mx-4 -mt-[80px] bg-white relative">
                    <span className="text-caption text-neutral-100">{destination.country}</span>
                    <h2 className="title-s pb-6 text-neutral-100">{destination.name}</h2>
                    <p className="text-neutral-100 text-caption">{destination.duration} jours - {destination.duration - 1} nuits</p>
                    <p className="text-neutral-300 text-caption"><span
                        className="bold title-s text-neutral-100">{destination.price}€</span>/personne</p>
                </div>
            </div>)}
        </div>
    </div>
}