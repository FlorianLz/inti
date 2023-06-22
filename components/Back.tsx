import Image from "next/image";
import Arrow from '@/public/arrow.svg';
import React, {useContext} from "react";
import {FormStateContext} from "@/components/MultiStepsForm";

export const Back = ({prev}: {prev: () => void}) => {
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        prev();
    }

    return (
        <button onClick={handleClick}>
            <Image src={Arrow} alt={"Retour"} width={24} height={24}/>
        </button>
    )
}