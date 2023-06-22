import React, {useState} from 'react';
import {Back} from '@/components/Back';

const NbPerson = (props: any) => {
    const [counts, setCounts] = useState({
        adults: 0,
        children: 0,
        babies: 0,
    });

    const increment = (e: React.MouseEvent, type: string) => {
        e.preventDefault();
        setCounts((prevCounts: any) => ({
            ...prevCounts,
            [type]: prevCounts[type] + 1,
        }));
        props.onChange(counts);
    };

    const decrement = (e: React.MouseEvent, type: string) => {
        e.preventDefault();
        setCounts((prevCounts: any) => ({
            ...prevCounts,
            [type]: prevCounts[type] > 0 ? prevCounts[type] - 1 : 0,
        }));
        props.onChange(counts);
    };

    return (
        <div className="h-full flex flex-col justify-between">
            <div>
                <div className="flex flex-col gap-8">
                    <div className="flex justify-between items-center">
                        <button
                            className={`text-4xl p-4 border-2 border-neutral-100 rounded-xl aspect-square flex items-center w-12 h-12 justify-center ${counts.adults === 0 ? 'text-neutral-500 border-neutral-500' : ''}`}
                            onClick={(e) => decrement(e, 'adults')}>-
                        </button>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-neutral-100 font-bold title-l">{counts.adults}</span>
                            <label className="">Adultes</label>
                        </div>
                        <button
                            className="text-4xl p-4 border-2 border-neutral-100 rounded-xl aspect-square flex items-center w-12 h-12 justify-center"
                            onClick={(e) => increment(e, 'adults')}>+
                        </button>
                    </div>
                    <div className="flex justify-between items-center">
                        <button
                            className={`text-4xl p-4 border-2 border-neutral-100 rounded-xl aspect-square flex items-center w-12 h-12 justify-center ${counts.children === 0 ? 'text-neutral-500 border-neutral-500' : ''}`}
                            onClick={(e) => decrement(e, 'children')}>-
                        </button>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-neutral-100 font-bold title-l">{counts.children}</span>
                            <label className="">Enfants</label>
                        </div>
                        <button
                            className="text-4xl p-4 border-2 border-neutral-100 rounded-xl aspect-square flex items-center w-12 h-12 justify-center"
                            onClick={(e) => increment(e, 'children')}>+
                        </button>
                    </div>
                    <div className="flex justify-between items-center">
                        <button
                            className={`text-4xl p-4 border-2 border-neutral-100 rounded-xl aspect-square flex items-center w-12 h-12 justify-center ${counts.babies === 0 ? 'text-neutral-500 border-neutral-500' : ''}`}
                            onClick={(e) => decrement(e, 'babies')}>-
                        </button>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-neutral-100 font-bold title-l">{counts.babies}</span>
                            <label className="">Bébés</label>
                        </div>
                        <button
                            className="text-4xl p-4 border-2 border-neutral-100 rounded-xl aspect-square flex items-center w-12 h-12 justify-center"
                            onClick={(e) => increment(e, 'babies')}>+
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NbPerson;
