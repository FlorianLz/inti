import React, {useContext, useEffect, useState} from "react";
import {FormStateContext} from "@/components/MultiStepsForm";
import {Back} from "@/components/Back";
import ButtonComponent from "@/components/Button";
import Image from "next/image";
import Arrow from "@/public/arrow.svg";
import Link from "next/link";

export const ModeFormStep = (props: any) => {
    const [fieldValue, setFieldValue] = useState('');
    const form = useContext(FormStateContext);

    const handleChange = (value: string) => {
        setFieldValue(value)
        form.formState.steps[props.stepIndex].fields = [
            {
                name: 'mode',
                value: value
            }
        ]
        props.next();
    }

    return (
        <div className="h-full flex flex-col justify-between">
            <div>
                <Link href='/'>
                    <Image src={Arrow} alt={"Retour"} width={24} height={24}/>
                </Link>
                <h1 className='title-l mb-6'>Qui choisis ?</h1>
            </div>
            <div className='h-full flex flex-col justify-between'>
                <ButtonComponent  buttons={[
                    {
                        text: 'Je choisis seul.e',
                        value: 'je-choisis'
                    },
                    {
                        text: 'On choisit à plusieurs',
                        value: 'on-choisis-ensemble'
                    }
                ]} onChange={(value) => handleChange(value)}/>
                <button onClick={props.next} className='button-primary w-full hover:bg-primary-700'>Passer aux personnes</button>
            </div>
        </div>
    )
}