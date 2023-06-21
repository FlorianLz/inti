import {useContext, useEffect, useState} from "react";
import {FormStateContext} from "@/components/MultiStepsForm";
import {Back} from "@/components/Back";
import ButtonComponent from "@/components/Button";
import NbPerson from "@/components/NbPerson";

export const NbPersonFormStep = (props: any) => {
    const [fieldValue, setFieldValue] = useState('');
    const form = useContext(FormStateContext);

    useEffect(() => {
        form.steps[props.stepIndex].fields = [
            {
                name: 'nb-persons',
                value: fieldValue
            }
        ]
    }, [fieldValue])

    const handleChange = (value: string) => {
        setFieldValue(value)
        props.next();
    }

    return (
        <div className="h-full flex flex-col justify-between">
            <NbPerson onChange={(nbPerson:any)=>handleChange(nbPerson)} />
        </div>
    )
}