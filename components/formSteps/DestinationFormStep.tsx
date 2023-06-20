import {useContext, useEffect, useState} from "react";
import {FormStateContext} from "@/components/MultiStepsForm";
import {Back} from "@/components/Back";
import worldPicture from "@/public/images/world.png";
import spainPicture from "@/public/images/spain.png";
import italiaPicture from "@/public/images/italia.png";
import Search from "@/components/SearchPlace";
import {ISearchPlace} from "@/interfaces/SearchPlace.interface";
import Image from "next/image";
import {locationHelper} from "@/helper/location.helper";

export const DestinationFormStep = (props: any) => {
    const [fieldValue, setFieldValue] = useState<ISearchPlace | null>(null);
    const form = useContext(FormStateContext);


    useEffect(() => {
        form.steps[props.stepIndex].fields = [
            {
                name: 'destination',
                value: fieldValue
            }
        ]
    }, [fieldValue])

    function handleSearch(world: string) {
        let choice = world;
        let isWorld = choice === "world";
        if (choice === "world") {
            let countries = ["spain", "italy", "netherlands", "germany"];
            let randomCountry = countries[Math.floor(Math.random() * countries.length)];
            choice = randomCountry;
        }
        if (choice === "spain") {
            setFieldValue({
                city: "",
                distanceFromParis: locationHelper.calculateDistance(-3.74922, 40.46366700000001, 2.3488, 48.85341),
                id: 1,
                name: 'Espagne',
                country: 'Espagne',
                coordinates: [-3.74922, 40.46366700000001],
                fromWorldChoice: isWorld
            });
        }
        if (choice === "italy") {
            setFieldValue({
                city: "",
                distanceFromParis: locationHelper.calculateDistance(12.56738, 41.87194, 2.3488, 48.85341),
                id: 2,
                name: 'Italie',
                country: 'Italie',
                coordinates: [12.56738, 41.87194],
                fromWorldChoice: isWorld
            });
        }
        if (choice === "netherlands") {
            setFieldValue({
                city: "",
                distanceFromParis: locationHelper.calculateDistance(4.895168, 52.370216, 2.3488, 48.85341),
                id: 3,
                name: 'Pays-Bas',
                country: 'Pays-Bas',
                coordinates: [4.895168, 52.370216],
                fromWorldChoice: isWorld
            });
        }
        if (choice === "germany") {
            setFieldValue({
                city: "",
                distanceFromParis: locationHelper.calculateDistance(13.404954, 52.520008, 2.3488, 48.85341),
                id: 4,
                name: 'Allemagne',
                country: 'Allemagne',
                coordinates: [13.404954, 52.520008],
                fromWorldChoice: isWorld
            });
        }
    }

return (
    <div className="h-full flex flex-col justify-between">
        <div>
            <Back/>
            <h1 className='title-l mb-6'>Où veux-tu aller ?</h1>
        </div>
        <div className='flex-grow flex flex-col justify-between'>
            <Search onChange={(name) => setFieldValue(name)}/>
            <div className='overflow-y-scroll'>
                <div className="py-6">
                    <h2 className="pb-3 title-s">Se laisser guider</h2>
                    <Image src={worldPicture} alt=""
                           className={`w-full h-36 rounded-lg object-cover cursor-pointer ${fieldValue?.fromWorldChoice ? 'border-2 border-amber-500 sepia' : ''}`}
                           onClick={() => handleSearch('world')} />
                </div>
                <div className="pb-6">
                    <h2 className="pb-3 title-s">Pays</h2>
                    <div className="overflow-scroll w-full no-scrollbar">
                        <div className="flex gap-4 w-fit">
                            <div className="w-36 aspect-auto flex flex-col gap-3">
                                <Image src={spainPicture} alt=""
                                       className={`w-full h-36 rounded-lg object-cover cursor-pointer ${fieldValue?.name === 'Espagne' && !fieldValue?.fromWorldChoice ? 'border-2 border-amber-500 sepia' : ''}`}
                                       onClick={() => handleSearch('spain')}/>
                                <p>Espagne</p>
                            </div>
                            <div className="w-36 aspect-auto flex flex-col gap-3">
                                <Image src={italiaPicture} alt=""
                                       className={`w-full h-36 rounded-lg object-cover cursor-pointer ${fieldValue?.name === 'Italie' && !fieldValue?.fromWorldChoice ? 'border-2 border-amber-500 sepia' : ''}`}
                                       onClick={() => handleSearch('italy')}/>
                                <p>Italie</p>
                            </div>
                            <div className="w-36 aspect-auto flex flex-col gap-3">
                                <Image src={italiaPicture} alt=""
                                       className={`w-full h-36 rounded-lg object-cover cursor-pointer ${fieldValue?.name === 'Pays-Bas' && !fieldValue?.fromWorldChoice ? 'border-2 border-amber-500 sepia' : ''}`}
                                       onClick={() => handleSearch('netherlands')}/>
                                <p>Pays-Bas</p>
                            </div>
                            <div className="w-36 aspect-auto flex flex-col gap-3">
                                <Image src={italiaPicture} alt=""
                                       className={`w-full h-36 rounded-lg object-cover cursor-pointer ${fieldValue?.name === 'Allemagne' && !fieldValue?.fromWorldChoice ? 'border-2 border-amber-500 sepia' : ''}`}
                                       onClick={() => handleSearch('germany')}/>
                                <p>Allemagne</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-6">
                    <h2 className="pb-3 title-s">Région française</h2>
                    <div className="overflow-scroll w-full no-scrollbar">
                        <div className="flex gap-4 w-fit">
                            <div className="w-36 aspect-auto flex flex-col gap-3">
                                <Image src={spainPicture} alt=""
                                       className="w-full h-36 rounded-lg object-cover cursor-pointer"/>
                                <p>Bretagne</p>
                            </div>
                            <div className="w-36 aspect-auto flex flex-col gap-3">
                                <Image src={spainPicture} alt=""
                                       className="w-full h-36 rounded-lg object-cover cursor-pointer"/>
                                <p>Normandie</p>
                            </div>
                            <div className="w-36 aspect-auto flex flex-col gap-3">
                                <Image src={spainPicture} alt=""
                                       className="w-full h-36 rounded-lg object-cover cursor-pointer"/>
                                <p>Auvergne</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={props.next} className='button-primary w-full hover:bg-primary-700'>Passer au budget</button>
        </div>
    </div>
)
}