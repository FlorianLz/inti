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
        <div className="h-full flex flex-col justify-between">
            <div>
                <Back/>
                <h1 className='title-l mb-6'>Quand veux-tu voyager ?</h1>
            </div>
            <div className='flex-grow flex flex-col justify-between'>
                <DatePicker onChange={(value) => setFieldValue(value)}/>
                <button onClick={props.next} className='button-primary w-full hover:bg-primary-700'>Passer à la destination</button>
            </div>
        </div>
    )
}