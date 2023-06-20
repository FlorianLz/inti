'use client';

import Image from "next/image";
import Arrow from '@/public/arrow.svg';
import React, {useContext} from "react";
import {FormStateContext} from "@/components/MultiStepsForm";

export const Back = () => {
    const form = useContext(FormStateContext);
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
       form.index = form.index > 0 ? form.index - 1 : 0;
    }

    return (
        <button onClick={handleClick}>
            <Image src={Arrow} alt={"Retour"} width={24} height={24}/>
        </button>
    )
}