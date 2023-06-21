import Image from "next/image";

export default function ResultCard(destination:any) {
    return (<div key={destination.id} className="mb-10">
        <Image src={destination.picture} alt="" className="rounded-2xl"/>
        <div className="flex flex-col shadow-2xl p-4 rounded-2xl mx-4 -mt-[80px] bg-white relative">
            <span className="text-caption text-neutral-100">{destination.country}</span>
            <h2 className="title-s pb-6 text-neutral-100">{destination.name}</h2>
            <p className="text-neutral-100 text-caption">{destination.duration} jours
                - {destination.duration - 1} nuits</p>
            <p className="text-neutral-300 text-caption"><span
                className="bold title-s text-neutral-100">{destination.price}€</span>/personne</p>
        </div>
    </div>)
}