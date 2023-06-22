'use client';

import React, {createContext, useCallback, useEffect, useState} from "react";
import {IFormContext, IFormState} from "@/interfaces/Form.interface";
import {ModeFormStep} from "@/components/form/ModeFormStep";
import {DestinationFormStep} from "@/components/form/DestinationFormStep";
import {DateFormStep} from "@/components/form/DateFormStep";
import {ISearchInput} from "@/interfaces/SearchInput.interface";
import {TransportsFormStep} from "@/components/form/TransportsFormStep";
import {NbPersonFormStep} from "@/components/form/NbPersonFormStep";
import {BudgetFormStep} from "@/components/form/BudgetFormStep";
import {searchInputService} from "@/service/searchInput.service";
import {ResumeFormStep} from "@/components/form/ResumeFormStep";
import {searchRequestService} from "@/service/searchRequest.service";
import {ITrip} from "@/interfaces/Trip.interface";
import {Session} from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useRouter } from 'next/navigation';


const DEFAULT_FORM_STATE: IFormState = {
    index: 0,
    steps: [
        {
            name: 'mode',
            fields: [],
            component: ModeFormStep,
        },
        {
            name: 'nbPersons',
            fields: [],
            component: NbPersonFormStep,
        },
        {
            name: 'date',
            fields: [],
            component: DateFormStep,
        },
        {
            name: 'destination',
            fields: [],
            component: DestinationFormStep,
        },
        {
            name: 'budget',
            fields: [],
            component: BudgetFormStep,
        },
        {
            name: 'transports',
            fields: [],
            component: TransportsFormStep,
        },
    ],
}

export const FormStateContext = createContext<IFormContext>({formState: DEFAULT_FORM_STATE});

export const MultiStepForm = ({session}: {session: Session | null}) => {
    const [formState, setFormState]: [IFormState, any] = useState(DEFAULT_FORM_STATE);
    const [searchInput, setSearchInput]: [ISearchInput | null, any] = useState(null);
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<ITrip[]>([]);
    const [resultsUrl, setResultsUrl] = useState<string>('')
    const router = useRouter()

    useEffect(() => {
        if (formState.index < formState.steps.length) return;
        const searchInput: ISearchInput = searchInputService.buildFromForm(formState)
        setSearchInput(searchInput)
    }, [formState])

    const next = (e: React.MouseEvent<any> | null) => {
        if (e) e.preventDefault();
        const updatedStepIndex = formState.index + 1;
        setFormState((prevState: IFormState) => ({
            index: updatedStepIndex,
            steps: prevState.steps
        }))
    };

    const prev = (e: React.MouseEvent<any> | null) => {
        if (e) e.preventDefault();
        const updatedStepIndex = formState.index - 1;

        setFormState((prevState: IFormState) => ({
            ...prevState,
            index: updatedStepIndex
        }))
    };

    const handleSubmit = async () => {
        console.log('submit')
        if (!searchInput || !session) return;
        setLoading(true);
        const results = await searchRequestService.getSearchRequestResults(searchInput, session);
        setResults(results.results)
        setResultsUrl(`http://localhost:3000/search/${results.uuid}`)
        setLoading(false);
        await router.push(`/search/${results.uuid}`)
    }

    return (
        <FormStateContext.Provider value={{formState}}>
            <form className='h-full'>
                {formState.steps.map((step, index) => {
                    return (
                        <div key={index} className={`h-full ${formState.index === index ? '' : 'hidden'}`}>
                            {step.component({stepIndex: index, next, prev})}
                        </div>
                    )
                })}
                <div
                    className={`h-full ${formState.index < formState.steps.length || results.length > 0 || loading ? 'hidden' : ''}`}>
                    <ResumeFormStep searchInput={searchInput} prev={prev} onSubmit={handleSubmit}/>
                </div>
                <div className={`h-full ${loading ? '' : 'hidden'}`}>
                    Chargement...
                </div>
                <div className={`h-full ${results.length > 0 ? '' : 'hidden'}`}>
                    <Link href={resultsUrl}>Voir les {results.length} résultats</Link>
                </div>
            </form>
        </FormStateContext.Provider>
    )
}