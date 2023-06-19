'use client';

import {createContext, useCallback, useEffect, useState} from "react";
import {IFormState} from "@/interfaces/form.interface";
import {ExampleStepComponent} from "@/components/ExampleStepComponent";

const DEFAULT_FORM_STATE: IFormState = {
    index: 0,
    selected_index: 0,
    steps: [
        {
            name: 'step-1',
            fields: [],
            component: ExampleStepComponent,
        }
    ],
}

export const FormStateContext = createContext(DEFAULT_FORM_STATE);

export const MultiStepForm = () => {
    const [formState, setFormState]: [IFormState, any] = useState(DEFAULT_FORM_STATE);
    const onSubmit = useCallback((e: any = null) => {
        if (e) e.preventDefault();
        console.log(formState);
    }, [])


    useEffect(() => {
        const lastStepIndex = formState.steps.length;
        if (formState.index !== lastStepIndex) return;
        onSubmit();
    }, [formState.index, formState.steps.length, onSubmit])

    const next = useCallback(() => {
        const updatedStepIndex = formState.index + 1;

        setFormState((prevState: IFormState) => ({
            ...prevState,
            index: updatedStepIndex
        }))

        updateBrowserHistory();
    }, []);

    const prev = useCallback(() => {
        const updatedStepIndex = formState.index - 1;

        setFormState((prevState: IFormState) => ({
            ...prevState,
            index: updatedStepIndex
        }))

        updateBrowserHistory();
    }, []);

    const updateBrowserHistory = useCallback(() => {
        const { index, steps } = formState;
        const { name } = steps[index];
        window.history.pushState({ index }, name, `?step=${index}`);
    }, []);

    return (
        <FormStateContext.Provider value={formState}>
            <form>
                {formState.steps[formState.index].component({stepIndex: formState.index, next, prev})}
                <button onClick={onSubmit}>Submit</button>
            </form>
        </FormStateContext.Provider>
    )
}