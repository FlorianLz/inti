import {useContext, useEffect, useState} from "react";
import {FormStateContext} from "@/components/MultiStepsForm";

export const ExampleStepComponent = (props: any) => {
    const [fieldValue, setFieldValue] = useState('');
    const form = useContext(FormStateContext);

    useEffect(() => {
        form.steps[props.stepIndex].fields = [
            {
                name: 'toto',
                value: fieldValue
            }
        ]
    }, [fieldValue])

    return (
        <div>z
            <h1>Example Step Component</h1>
            <input type="text" name="ttoo" onChange={(e) => setFieldValue(e.target.value)}/>
        </div>
    )
}