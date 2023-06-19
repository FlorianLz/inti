import React from 'react';

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
        <div>
            <h2 className="text-black">Résumé de la recherche</h2>
            <h3 className="text-black">Nombre de personnes</h3>
            <ul>
                {jsonData.mail.map((email: any, index: any) => (
                    <li className="text-black" key={index}>{email}</li>
                ))}
            </ul>
            <h3 className="text-black">Date</h3>
            <p className="text-black">Date de début: {date.startDate}</p>
            <p className="text-black">Date de fin: {date.endDate}</p>
            <p className="text-black">Nombre de jours: {date.nbDays}</p>
        </div>
    );
};

export default Resume;
