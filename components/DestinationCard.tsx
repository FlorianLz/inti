import Image from "next/image";

export default function DestinationCard(destination:any) {
    return (<div key={destination.id} className="mb-10 imgTop h-[205px] object-cover">
        <Image src={destination.picture} alt="" className="rounded-2xl h-full object-cover"/>
        <p className= "font-medium pt-2">{destination.country}</p>
    </div>)
}