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
import { useRouter } from 'next/navigation';
import Lottie from "react-lottie";
import animationData from "../public/animations/walk.json";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

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
        const updatedStepIndex = formState.index > 0 ? formState.index - 1 : 0;

        setFormState((prevState: IFormState) => ({
            ...prevState,
            index: updatedStepIndex
        }))
    };

    const handleSubmit = async () => {
        if (!searchInput || !session) return;
        setLoading(true);
        const results = await searchRequestService.getSearchRequestResults(searchInput, session);
        setResults(results.results)
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
                <div className={`h-full flex items-end relative ${loading ? '' : 'hidden'}`}>
                    <p className="text-xl w-full font-bold text-center absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        Recherche de votre futur voyage
                    </p>
                   <div className="-mb-4">
                       <Lottie options={defaultOptions} height={400} width={400} />
                   </div>
                </div>
            </form>
        </FormStateContext.Provider>
    )
}