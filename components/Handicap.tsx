import React, { useState } from 'react';
import Image from 'next/image';
import picHandi from '../public/handicap.png';
import close from '../public/close.svg';
import cognitif from '../public/handicap_cognitf.svg';
import moteur from '../public/handicap_motrice.svg';
import cardiaque from '../public/handicap_cardiac.svg';
import visuel from '../public/handicap_view.svg';
import auditif from '../public/handicap_audio.svg';

const handicapTab = [
    { name: 'Aucun', image: close, value: false },
    { name: 'Cognitif', image: cognitif, value: false },
    { name: 'Moteur', image: moteur, value: false },
    { name: 'Cardiaque', image: cardiaque, value: false },
    { name: 'Visuel', image: visuel, value: false },
    { name: 'Auditif', image: auditif, value: false },
];

const Handicap = () => {
    const [selectedHandicaps, setSelectedHandicaps] = useState(handicapTab);

    const handleCheckboxChange = (index: number) => {
        setSelectedHandicaps((prevHandicaps) => {
            const updatedHandicaps = [...prevHandicaps];
            if (index === 0) {
                // "Aucun" est sélectionné, désélectionne les autres handicaps
                updatedHandicaps[0].value = !updatedHandicaps[0].value;
                for (let i = 1; i < updatedHandicaps.length; i++) {
                    updatedHandicaps[i].value = false;
                }
            } else {
                // Un autre handicap est sélectionné, désélectionne "Aucun"
                updatedHandicaps[0].value = false;
                updatedHandicaps[index].value = !updatedHandicaps[index].value;
            }
            return updatedHandicaps;
        });
    };

    const handleSubmit = () => {
        const selectedValues = selectedHandicaps.map((handicap) => ({
            name: handicap.name,
            value: handicap.value,
        }));
    };

    return (
        <div className="max-w-sm my-0 mx-auto px-5">
            <Image src={picHandi} alt="Picture of the author" width={358} height={352} />
            <div className="flex gap-2 flex-wrap mt-6">
                {selectedHandicaps.map((handicap, index) => (
                    <label
                        key={handicap.name}
                        className={`flex items-center w-[109px] h-[72px] text-neutral050 justify-center flex-col border border-neutral050 rounded-lg ${
                            handicap.value ? 'bg-neutral050 text-white' : ''
                        }`}
                    >
                        <input
                            type="checkbox"
                            checked={handicap.value}
                            onChange={() => handleCheckboxChange(index)}
                            className="sr-only"
                        />
                        <Image
                            src={handicap.image}
                            alt={handicap.name}
                            width={16}
                            height={16}
                            style={{ filter: handicap.value ? 'invert(100%)' : 'none' }}
                        />
                        {handicap.name}
                    </label>
                ))}
            </div>
            <button className="text-black" onClick={handleSubmit}>
                Log
            </button>
        </div>
    );
};

export default Handicap;
