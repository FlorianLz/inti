import {useContext, useEffect, useState} from "react";
import {FormStateContext} from "@/components/MultiStepsForm";
import {Back} from "@/components/Back";import worldPicture from "@/public/images/world.png";
import spainPicture from "@/public/images/spain.png";
import italiaPicture from "@/public/images/italia.png";
import Search from "@/components/SearchPlace";
import {ISearchPlace} from "@/interfaces/SearchPlace.interface";
import Image from "next/image";

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
                               className="w-full h-36 rounded-lg object-cover cursor-pointer"/>
                    </div>
                    <div className="pb-6">
                        <h2 className="pb-3 title-s">Pays</h2>
                        <div className="overflow-scroll w-full no-scrollbar">
                            <div className="flex gap-4 w-fit">
                                <div className="w-36 aspect-auto flex flex-col gap-3">
                                    <Image src={spainPicture} alt=""
                                           className="w-full h-36 rounded-lg object-cover cursor-pointer"/>
                                    <p>Espagne</p>
                                </div>
                                <div className="w-36 aspect-auto flex flex-col gap-3">
                                    <Image src={italiaPicture} alt=""
                                           className="w-full h-36 rounded-lg object-cover cursor-pointer"/>
                                    <p>Italie</p>
                                </div>
                                <div className="w-36 aspect-auto flex flex-col gap-3">
                                    <Image src={italiaPicture} alt=""
                                           className="w-full h-36 rounded-lg object-cover cursor-pointer"/>
                                    <p>Pays-Bas</p>
                                </div>
                                <div className="w-36 aspect-auto flex flex-col gap-3">
                                    <Image src={italiaPicture} alt=""
                                           className="w-full h-36 rounded-lg object-cover cursor-pointer"/>
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
                <button onClick={props.next} className='button-primary w-full'>Passer au budget</button>
            </div>
        </div>
    )
}