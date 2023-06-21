import React, { useState } from 'react';
import { Back } from '@/components/Back';

const NbPerson = (props:any) => {
    const [counts, setCounts] = useState({
        adults: 0,
        children: 0,
        babies: 0,
    });

    const increment = (type:any) => {
        setCounts((prevCounts:any) => ({
            ...prevCounts,
            [type]: prevCounts[type] + 1,
        }));
        props.onChange(counts);
    };

    const decrement = (type:any) => {
        setCounts((prevCounts:any) => ({
            ...prevCounts,
            [type]: prevCounts[type] > 0 ? prevCounts[type] - 1 : 0,
        }));
        props.onChange(counts);
    };

    return (
        <div className="h-full flex flex-col justify-between">
            <div>
                <Back />
                <h1 className="title-l mb-6">Tu pars à combien ?</h1>
                <div className="flex flex-col gap-8">
                    <div className="flex justify-between items-center">
                        <button className={`text-4xl p-4 border-2 border-neutral-100 rounded-xl aspect-square flex items-center w-12 h-12 justify-center ${counts.adults === 0 ? 'text-neutral-500 border-neutral-500' : ''}`} onClick={() => decrement('adults')}>-</button>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-neutral-100 font-bold title-l">{counts.adults}</span>
                            <label className="">Adultes</label>
                        </div>
                        <button className="text-4xl p-4 border-2 border-neutral-100 rounded-xl aspect-square flex items-center w-12 h-12 justify-center" onClick={() => increment('adults')}>+</button>
                    </div>
                    <div className="flex justify-between items-center">
                        <button className={`text-4xl p-4 border-2 border-neutral-100 rounded-xl aspect-square flex items-center w-12 h-12 justify-center ${counts.children === 0 ? 'text-neutral-500 border-neutral-500' : ''}`} onClick={() => decrement('children')}>-</button>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-neutral-100 font-bold title-l">{counts.children}</span>
                            <label className="">Enfants</label>
                        </div>
                        <button className="text-4xl p-4 border-2 border-neutral-100 rounded-xl aspect-square flex items-center w-12 h-12 justify-center" onClick={() => increment('children')}>+</button>
                    </div>
                    <div className="flex justify-between items-center">
                        <button className={`text-4xl p-4 border-2 border-neutral-100 rounded-xl aspect-square flex items-center w-12 h-12 justify-center ${counts.babies === 0 ? 'text-neutral-500 border-neutral-500' : ''}`} onClick={() => decrement('babies')}>-</button>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-neutral-100 font-bold title-l">{counts.babies}</span>
                            <label className="">Bébés</label>
                        </div>
                        <button className="text-4xl p-4 border-2 border-neutral-100 rounded-xl aspect-square flex items-center w-12 h-12 justify-center" onClick={() => increment('babies')}>+</button>
                    </div>
                </div>
                <button onClick={props.next} className='button-primary w-full hover:bg-primary-700'>Passer aux personnes</button>
            </div>
        </div>
    );
};

export default NbPerson;
