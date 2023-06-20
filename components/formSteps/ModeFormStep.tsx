import {useContext, useEffect, useState} from "react";
import {FormStateContext} from "@/components/MultiStepsForm";
import {Back} from "@/components/Back";
import ButtonComponent from "@/components/Button";

export const ModeFormStep = (props: any) => {
    const [fieldValue, setFieldValue] = useState('');
    const form = useContext(FormStateContext);

    useEffect(() => {
        form.steps[props.stepIndex].fields = [
            {
                name: 'qui-choisis',
                value: fieldValue
            }
        ]
    }, [fieldValue])

    return (
        <div>
            <Back/>
            <h1>Qui choisis ?</h1>
            <ButtonComponent  buttons={[
                { 
                    text: 'Je choisis',
                    value: 'je-choisis'
                },
                {
                    text: 'On choisis ensemble',
                    value: 'on-choisis-ensemble'
                }
            ]} onChange={(value) => setFieldValue(value)}/>
            <button onClick={props.next}>Passer au nombre de personnes</button>
        </div>
    )
}