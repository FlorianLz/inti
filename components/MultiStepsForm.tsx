'use client';

import React, {createContext, useCallback, useEffect, useState} from "react";
import {IFormState} from "@/interfaces/Form.interface";
import {ModeFormStep} from "@/components/formSteps/ModeFormStep";
import {DestinationFormStep} from "@/components/formSteps/DestinationFormStep";
import {DateFormStep} from "@/components/formSteps/DateFormStep";
import {ISearchInput} from "@/interfaces/SearchInput.interface";
import {searchInputService} from "@/service/searchInput.service";
import {TransportsFormStep} from "@/components/formSteps/TransportsFormStep";
import {NbPersonFormStep} from "@/components/formSteps/NbPersonFormStep";

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
            name: 'transports',
            fields: [],
            component: TransportsFormStep,
        },
        /*{
            name: 'budget',
            fields: [],
            component: ExampleStepComponent,
        },
        {
            name: 'recap',
            fields: [],
            component: ExampleStepComponent,
        },*/
    ],
}

export const FormStateContext = createContext(DEFAULT_FORM_STATE);

export const MultiStepForm = () => {
    const [formState, setFormState]: [IFormState, any] = useState(DEFAULT_FORM_STATE);
    const [searchInput, setSearchInput] = useState<ISearchInput | null>(null);
    const submit = (e: any = null) => {
        if (e) e.preventDefault();
    };


    useEffect(() => {
        console.log('Build searchInput');
        console.log(formState);
        const searchInput = searchInputService.buildFromForm(formState);
        const lastStepIndex = formState.steps.length;
        if (formState.index !== lastStepIndex) return;
        submit();
    }, [formState])

    const next = (e: React.MouseEvent<any>|null) => {
        if (e) e.preventDefault();
        const updatedStepIndex = formState.index + 1;
        setFormState((prevState: IFormState) => ({
            index: updatedStepIndex,
            steps: prevState.steps
        }))

        updateBrowserHistory();
    };

    const prev = (e: React.MouseEvent<any>|null) => {
        if (e) e.preventDefault();
        const updatedStepIndex = formState.index - 1;

        setFormState((prevState: IFormState) => ({
            ...prevState,
            index: updatedStepIndex
        }))

        updateBrowserHistory();
    };

    const updateBrowserHistory = () => {
        const { index, steps } = formState;
        const { name } = steps[index];
        window.history.pushState({ index }, name, `?step=${index}`);
    };

    return (
        <FormStateContext.Provider value={formState}>
            <form className='h-full'>
                {formState.steps[formState.index].component({stepIndex: formState.index, next, prev, submit})}
            </form>
        </FormStateContext.Provider>
    )
}