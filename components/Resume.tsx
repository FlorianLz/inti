import React from 'react';
import {Back} from "@/components/Back";
import Swiper from "@/components/Swiper";

export const jsonData: any = {
    nbPerson: {
        adults: 4,
        children: 0,
        babies: 0,
    },
    mail:['mail1@gmail.com', 'mail2@gmail.com' , 'mail3@gmail.com' , 'mail4@gmail.com'],
    transport: {
        train: false,
        car: true,
        plane: true,
        bus: false,
        boat: false,
        other: false,
    },
    budget: {
        min: 0,
        max: 10000,
    },
    departure: {
        latitude: 50.63249610631816,
        longitude: 3.052219302864069,
    },
    destination: {
        city: 'Bordeaux',
    },
    date: {
        startDate: '2023-07-20',
        endDate: '2023-07-27',
        nbDays: 8,
        isFlexible: false,
    },
    handicap: false,
    mood: 8,
    locationType: {
        hotel: true,
        apartment: false,
        camping: false,
        other: false,
    },
    formuleType: {
        allInclusive: true,
        halfBoard: false,
        fullBoard: false,
        breakfast: false,
        nothing: false,
    },
    landscape: {
        sea: true,
    },
    nearFromCity: false,
    equipments: {
        swimmingPool: true,
    },
};

const Resume = () => {
    const {
        nbPerson,
        date,
    } = jsonData;

    return (
        <div className="h-full flex flex-col justify-between">
            <div>
                <Back/>
                <h1 className='title-l mb-6'>En résumé tu as un groupe</h1>
            </div>
            <div className='flex-grow flex flex-col justify-between'>
                <h3 className="text-neutral-100 font-bold text-xl mb-2">De x personnes</h3>
                <div className="mb-6">
                    <p className="text-neutral-100 border border-neutral-50 rounded-3xl w-max p-3">Nathalie</p>
                </div>
                <h3 className="text-neutral-100 font-bold text-xl mb-2">Qui part suur la periode</h3>
                <h3 className="text-neutral-100 font-bold text-xl mb-2">Vers la destination</h3>
                <h3 className="text-neutral-100 font-bold text-xl mb-2">Pour un budget</h3>
            </div>
        </div>
    );
};

export default Resume;
