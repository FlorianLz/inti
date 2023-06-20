import {useContext, useEffect, useState} from "react";
import {FormStateContext} from "@/components/MultiStepsForm";
import {Back} from "@/components/Back";
import DatePicker from "@/components/DatePicker";

export const DateFormStep = (props: any) => {
    const [fieldValue, setFieldValue] = useState<any>(null);
    const form = useContext(FormStateContext);

    useEffect(() => {
        form.steps[props.stepIndex].fields = [
            {
                name: 'date',
                value: fieldValue
            }
        ]
    }, [fieldValue])

    return (
        <div>
            <Back/>
            <h1>Quand veux tu voyager ?</h1>
            <DatePicker onChange={(value) => setFieldValue(value)}/>
            <button onClick={props.next}>Suivant</button>
        </div>
    )
}