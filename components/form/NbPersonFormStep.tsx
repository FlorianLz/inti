import {useContext, useEffect, useState} from "react";
import {FormStateContext} from "@/components/MultiStepsForm";
import {Back} from "@/components/Back";
import ButtonComponent from "@/components/Button";
import NbPerson from "@/components/NbPerson";

export const NbPersonFormStep = (props: any) => {
    const [fieldValue, setFieldValue] = useState('');
    const form = useContext(FormStateContext);

    const handleChange = (value: string) => {
        setFieldValue(value)
        form.formState.steps[props.stepIndex].fields = [
            {
                name: 'nbPersons',
                value: value
            }
        ]
    }

    return (
        <div className="h-full flex flex-col justify-between">
            <div>
                <Back prev={props.prev}/>
                <h1 className='title-l mb-6'>Qui choisis ?</h1>
            </div>
            <div className='h-full flex flex-col justify-between'>
                <NbPerson onChange={(nbPerson:any)=>handleChange(nbPerson)} />
                <button onClick={props.next} className='button-primary w-full hover:bg-primary-700'>Passer aux
                    personnes</button>
            </div>
        </div>
    )
}