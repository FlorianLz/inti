import React, { useState } from 'react';
import Image from 'next/image';
import picHandi from '../public/handicap.png';
import close from '../public/close.svg';
import cognitif from '../public/handicap_cognitf.svg';
import moteur from '../public/handicap_motrice.svg';
import cardiaque from '../public/handicap_cardiac.svg';
import visuel from '../public/handicap_view.svg';
import auditif from '../public/handicap_audio.svg';

const Handicap = () => {
    const [checkboxes, setCheckboxes] = useState({
        Aucun: false,
        Cognitif: false,
        Moteur: false,
        Cardiaque: false,
        Visuel: false,
        Auditif: false
    });

    const handleCheckboxChange = (checkbox) => {
        if (checkbox === 'Aucun' && !checkboxes.Aucun) {
            // Si la case "Aucun" est cochée, décocher les autres cases
            setCheckboxes({
                Aucun: true,
                Cognitif: false,
                Moteur: false,
                Cardiaque: false,
                Visuel: false,
                Auditif: false
            });
        } else if (checkbox !== 'Aucun' && checkboxes.Aucun) {
            // Si une autre case est cochée, décocher la case "Aucun"
            setCheckboxes((prevCheckboxes) => ({
                ...prevCheckboxes,
                Aucun: false,
                [checkbox]: !prevCheckboxes[checkbox]
            }));
        } else {
            // Gérer les autres cas normalement
            setCheckboxes((prevCheckboxes) => ({
                ...prevCheckboxes,
                [checkbox]: !prevCheckboxes[checkbox]
            }));
        }
    };

    const handleSubmit = () => {
        console.log(checkboxes);
    };

    return (
        <div className="max-w-sm my-0 mx-auto px-5">
            <Image src={picHandi} alt="Picture of the author" width={358} height={352} />
            <div className="flex gap-2 flex-wrap mt-6">
                <label
                    className={`flex items-center w-[109px] h-[72px] text-neutral050 justify-center flex-col border border-neutral050 rounded-lg ${
                        checkboxes.Aucun ? 'bg-neutral050 text-white' : ''
                    }`}
                >
                    <input
                        type="checkbox"
                        checked={checkboxes.Aucun}
                        onChange={() => handleCheckboxChange('Aucun')}
                        className="sr-only"
                    />
                    <Image
                        src={close}
                        alt="close"
                        width={16}
                        height={16}
                        style={{ filter: checkboxes.Aucun ? 'invert(100%)' : 'none' }}
                    />
                    Aucun
                </label>
                <label
                    className={`flex items-center w-[109px] h-[72px] text-neutral050 justify-center flex-col border border-neutral050 rounded-lg ${
                        checkboxes.Cognitif ? 'bg-neutral050 text-white' : ''
                    }`}
                >
                    <input
                        type="checkbox"
                        checked={checkboxes.Cognitif}
                        onChange={() => handleCheckboxChange('Cognitif')}
                        className="sr-only"
                    />
                    <Image
                        src={cognitif}
                        alt="close"
                        width={16}
                        height={16}
                        style={{ filter: checkboxes.Cognitif ? 'invert(100%)' : 'none' }}
                    />
                    Cognitif
                </label>
                <label
                    className={`flex items-center w-[109px] h-[72px] text-neutral050 justify-center flex-col border border-neutral050 rounded-lg ${
                        checkboxes.Moteur ? 'bg-neutral050 text-white' : ''
                    }`}
                >
                    <input
                        type="checkbox"
                        checked={checkboxes.Moteur}
                        onChange={() => handleCheckboxChange('Moteur')}
                        className="sr-only"
                    />
                    <Image
                        src={moteur}
                        alt="close"
                        width={16}
                        height={16}
                        style={{ filter: checkboxes.Moteur ? 'invert(100%)' : 'none' }}
                    />
                    Moteur
                </label>
                <label
                    className={`flex items-center w-[109px] h-[72px] text-neutral050 justify-center flex-col border border-neutral050 rounded-lg ${
                        checkboxes.Cardiaque ? 'bg-neutral050 text-white' : ''
                    }`}
                >
                    <input
                        type="checkbox"
                        checked={checkboxes.Cardiaque}
                        onChange={() => handleCheckboxChange('Cardiaque')}
                        className="sr-only"
                    />
                    <Image
                        src={cardiaque}
                        alt="close"
                        width={16}
                        height={16}
                        style={{ filter: checkboxes.Cardiaque ? 'invert(100%)' : 'none' }}
                    />
                    Cardiaque
                </label>
                <label
                    className={`flex items-center w-[109px] h-[72px] text-neutral050 justify-center flex-col border border-neutral050 rounded-lg ${
                        checkboxes.Visuel ? 'bg-neutral050 text-white' : ''
                    }`}
                >
                    <input
                        type="checkbox"
                        checked={checkboxes.Visuel}
                        onChange={() => handleCheckboxChange('Visuel')}
                        className="sr-only"
                    />
                    <Image
                        src={visuel}
                        alt="close"
                        width={16}
                        height={16}
                        style={{ filter: checkboxes.Visuel ? 'invert(100%)' : 'none' }}
                    />
                    Visuel
                </label>
                <label
                    className={`flex items-center w-[109px] h-[72px] text-neutral050 justify-center flex-col border border-neutral050 rounded-lg ${
                        checkboxes.Auditif ? 'bg-neutral050 text-white' : ''
                    }`}
                >
                    <input
                        type="checkbox"
                        checked={checkboxes.Auditif}
                        onChange={() => handleCheckboxChange('Auditif')}
                        className="sr-only"
                    />
                    <Image
                        src={auditif}
                        alt="close"
                        width={16}
                        height={16}
                        style={{ filter: checkboxes.Auditif ? 'invert(100%)' : 'none' }}
                    />
                    Auditif
                </label>
            </div>
            <button className="text-black" onClick={handleSubmit}>log</button>
        </div>
    );
};

export default Handicap;
