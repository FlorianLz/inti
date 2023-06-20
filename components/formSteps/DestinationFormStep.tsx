import {useContext, useEffect, useState} from "react";
import {FormStateContext} from "@/components/MultiStepsForm";
import {Back} from "@/components/Back";
import ButtonComponent from "@/components/Button";
import Search from "@/components/SearchPlace";

export const DestinationFormStep = (props: any) => {
    const [fieldValue, setFieldValue] = useState('');
    const form = useContext(FormStateContext);

    useEffect(() => {
        form.steps[props.stepIndex].fields = [
            {
                name: 'destination',
                value: fieldValue
            }
        ]
    }, [fieldValue])

    return (
        <div>
            <Back/>
            <h1>Où veux-tu aller ?</h1>
            <Search onChange={(name) => setFieldValue(name)}/>
            <button onClick={props.next}>Suivant</button>
        </div>
    )
}