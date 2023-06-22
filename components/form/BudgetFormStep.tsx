import React, {useContext, useEffect, useState} from "react";
import {FormStateContext} from "@/components/MultiStepsForm";
import {Back} from "@/components/Back";
import DatePicker from "@/components/DatePicker";
import Budget from "@/components/Budget";

export const BudgetFormStep = (props: any) => {
    const [fieldValue, setFieldValue] = useState<any>(null);
    const form = useContext(FormStateContext);

    useEffect(() => {
        form.formState.steps[props.stepIndex].fields = [
            {
                name: 'budget',
                value: fieldValue
            }
        ]
    }, [fieldValue])

    return (
        <div className="h-full flex flex-col justify-between">
            <div>
                <Back prev={props.prev}/>
                <h1 className="title-l mb-6">Quel est ton budget ?</h1>
                <p className="text-neutral-100 text-base">
                    On veut savoir quel budget tu te donnes pendant tout ton séjour.
                    <br />
                    On parle ici des transports et logements, donc hors-loisir.
                </p>
            </div>
            <div className='flex-grow flex flex-col justify-between'>
                <Budget onChange={(value) => setFieldValue(value)}/>
                <button onClick={props.next} className='button-primary w-full hover:bg-primary-700'>Passer à la destination</button>
            </div>
        </div>
    )
}