import SearchPlace from "@/components/SearchPlace";
import worldPicture from "@/public/images/world.png";
import spainPicture from "@/public/images/spain.png";
import italiaPicture from "@/public/images/italia.png";
import netherlandPicture from "@/public/images/netherland.png";
import Image from "next/image";

export default function SearchPage() {
    return <div className="container mx-auto p-4">
        <h1 className="text-3xl pb-6">Où veux-tu aller ?</h1>
        <SearchPlace/>
        <div className="py-6">
            <h2 className="text-2xl pb-4">Se laisser guider</h2>
            <Image src={worldPicture} alt="" className="w-full h-36 bg-amber-100 rounded-lg object-cover cursor-pointer" />
        </div>
        <div className="pb-6">
            <h2 className="text-2xl pb-4">Pays</h2>
            <div className="overflow-scroll w-full no-scrollbar">
                <div className="flex gap-4 w-fit">
                    <div className="w-36 aspect-auto flex flex-col gap-3">
                        <Image src={spainPicture} alt="" className="w-full h-36 bg-amber-100 rounded-lg object-cover cursor-pointer" />
                        <p>Espagne</p>
                    </div>
                    <div className="w-36 aspect-auto flex flex-col gap-3">
                        <Image src={italiaPicture} alt="" className="w-full h-36 bg-amber-100 rounded-lg object-cover cursor-pointer" />
                        <p>Italie</p>
                    </div>
                    <div className="w-36 aspect-auto flex flex-col gap-3">
                        <Image src={italiaPicture} alt="" className="w-full h-36 bg-amber-100 rounded-lg object-cover cursor-pointer" />
                        <p>Pays-Bas</p>
                    </div>
                    <div className="w-36 aspect-auto flex flex-col gap-3">
                        <Image src={italiaPicture} alt="" className="w-full h-36 bg-amber-100 rounded-lg object-cover cursor-pointer" />
                        <p>Allemagne</p>
                    </div>
                </div>
            </div>
        </div>
      <div className="pb-6">
            <h2 className="text-2xl pb-4">Région française</h2>
            <div className="overflow-scroll w-full no-scrollbar">
                <div className="flex gap-4 w-fit">
                    <div className="w-36 aspect-auto flex flex-col gap-3">
                        <Image src={spainPicture} alt="" className="w-full h-36 bg-amber-100 rounded-lg object-cover cursor-pointer" />
                        <p>Bretagne</p>
                    </div>
                    <div className="w-36 aspect-auto flex flex-col gap-3">
                        <Image src={spainPicture} alt="" className="w-full h-36 bg-amber-100 rounded-lg object-cover cursor-pointer" />
                        <p>Normandie</p>
                    </div>
                    <div className="w-36 aspect-auto flex flex-col gap-3">
                        <Image src={spainPicture} alt="" className="w-full h-36 bg-amber-100 rounded-lg object-cover cursor-pointer" />
                        <p>Auvergne</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}