import React from 'react';
import {ISearchInput} from "@/interfaces/SearchInput.interface";


const Resume = ({searchInput}: { searchInput: ISearchInput | null }) => {

    const personsCount = searchInput ? searchInput.nbPerson.adults + searchInput.nbPerson.children + searchInput.nbPerson.babies : 0;

    return (
        <div className="h-full flex flex-col justify-between">
            <div className='flex-grow flex flex-col gap-6'>
                <div>
                    <h3 className="text-neutral-100 font-bold text-xl mb-2">De {personsCount} personne{personsCount > 1 ? 's' : ''}</h3>
                    <p className="text-neutral-100 border border-neutral-50 rounded-3xl w-max p-3">Moi</p>
                </div>
                <div>
                    <h3 className="text-neutral-100 font-bold text-xl mb-2">Qui part sur la periode</h3>
                    <p className="text-neutral-100 border border-neutral-50 rounded-3xl w-max p-3">
                        {searchInput ? searchInput.date.startDate : ''} au {searchInput ? searchInput.date.endDate : ''}
                    </p>
                </div>
                <div>
                    <h3 className="text-neutral-100 font-bold text-xl mb-2">Vers la destination</h3>
                    <p className="text-neutral-100 border border-neutral-50 rounded-3xl w-max p-3">
                        {searchInput ? searchInput.destination.city : ''} {searchInput ? searchInput.destination.country : ''}
                    </p>
                </div>
                <div>
                    <h3 className="text-neutral-100 font-bold text-xl mb-2">Pour un budget</h3>
                    <p className="text-neutral-100 border border-neutral-50 rounded-3xl w-max p-3">
                        {searchInput ? searchInput.budget?.min : ''}€ - {searchInput ? searchInput.budget?.max : ''}€
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Resume;
