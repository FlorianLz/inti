import React, { useState } from 'react';
import { Back } from '@/components/Back';
import Image, { StaticImageData } from 'next/image';
import Standard from '../public/€.svg';
import Itermediaire from '../public/€€.svg';
import Premium from '../public/€€€.svg';
import Luxe from '../public/€€€€.svg';


const budgetTab = [
    { name: 'Standard', image: Standard, value: false, range: [600, 900], desc: 'Correct et propre' },
    { name: 'Intermédiaire', image: Itermediaire, value: false, range: [900, 1500], desc: 'Bon rapport qualité' },
    { name: 'Premium', image: Premium, value: false, range: [1500, 3000], desc: 'Très confortable' },
    { name: 'Luxe', image: Luxe, value: false, range: [3000, 7000], desc: 'Expérience unique' },
];

const Budget = () => {
    const [selectedBudget, setSelectedBudget] = useState(budgetTab);
    const [minBudget, setMinBudget] = useState<number | ''>('');
    const [maxBudget, setMaxBudget] = useState<number | ''>('');
    const handleRadioChange = (index: number) => {
        const updatedBudgetTab = selectedBudget.map((item, i) => {
            if (i === index) {
                return { ...item, value: !item.value };
            } else {
                return { ...item, value: false };
            }
        });
        setSelectedBudget(updatedBudgetTab);
        console.log(updatedBudgetTab);
    };

    const handleMinBudgetChange = (event: { target: { value: string; }; }) => {
        const min = parseInt(event.target.value);
        setMinBudget(isNaN(min) ? '' : min);

        if (!isNaN(min)) {
            const updatedBudgetTab = selectedBudget.map(item =>
                item.value ? { ...item, value: false } : item
            );
            setSelectedBudget(updatedBudgetTab);
        }
    };

    const handleMaxBudgetChange = (event: { target: { value: string; }; }) => {
        const max = parseInt(event.target.value);
        setMaxBudget(isNaN(max) ? '' : max);

        if (!isNaN(max)) {
            const updatedBudgetTab = selectedBudget.map(item =>
                item.value ? { ...item, value: false } : item
            );
            setSelectedBudget(updatedBudgetTab);
        }
    };

    return (
        <div className="h-full flex flex-col justify-between">
            <div>
                <Back />
                <h1 className="title-l mb-6">Quel est ton budget ?</h1>
                <p className="text-neutral-100 text-base">
                    On veut savoir quel budget tu te donnes pendant tout ton séjour.
                    <br />
                    On parle ici des transports et logements, donc hors-loisir.
                </p>
            </div>
            <div className="flex gap-2 flex-wrap justify-between mt-6">
                {selectedBudget.map((budgetItem, index) => (
                    <label
                        key={budgetItem.name}
                        className={`flex items-center w-[173px] h-[115px] text-neutral-50 text-sm justify-center flex-col cursor-pointer border border-neutral-100 rounded-lg ${
                            budgetItem.value ? 'bg-neutral-100 text-white' : ''
                        }`}
                    >
                        <input
                            type="radio"
                            name="budget"
                            checked={budgetItem.value}
                            onChange={() => handleRadioChange(index)}
                            className="sr-only"
                        />
                        <Image
                            src={budgetItem.image}
                            alt={budgetItem.name}
                            className="mb-3"
                            style={{ filter: budgetItem.value ? 'invert(100%)' : 'none' }}
                        />

                        {budgetItem.name}
                        <p className={`text-neutral-100 text-sm font-bold ${
                            budgetItem.value ? 'bg-neutral-100 text-white' : ''
                        }`}>
                            {budgetItem.range[0]}€ - {budgetItem.range[1]}€
                        </p>
                        <p className={`text-neutral-100 text-xs mt-3 ${
                            budgetItem.value ? 'bg-neutral-100 text-white' : ''
                        }`}>{budgetItem.desc}</p>
                    </label>
                ))}
            </div>
            <div className="flex justify-between mt-5 gap-3">
                <div className="w-1/2">
                    <p className="text-sm mb-1">Minimum en €</p>
                    <input
                        type="number"
                        value={minBudget}
                        onChange={handleMinBudgetChange}
                        className="input-sm mt-1 w-full"
                        placeholder="Min"
                    />
                </div>
                <div className="w-1/2 ">
                    <p className="text-sm mb-1">Maximum en €</p>
                    <input
                        type="number"
                        value={maxBudget}
                        onChange={handleMaxBudgetChange}
                        className="input-sm mt-1 w-full"
                        placeholder="Max"
                    />
                </div>
            </div>
        </div>
    );
};

export default Budget;
