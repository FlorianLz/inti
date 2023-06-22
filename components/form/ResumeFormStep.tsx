import React from "react";
import {Back} from "@/components/Back";
import Resume from "@/components/Resume";

export const ResumeFormStep = (props:any) => {
    return (
        <div className="h-full flex flex-col justify-between">
            <div>
                <Back prev={props.prev}/>
                <h1 className='title-l mb-6'>En résumé tu as un groupe</h1>
            </div>
            <div className='h-full flex flex-col justify-between'>
                <Resume searchInput={props.searchInput} />
                <button onClick={(e) => {e.preventDefault();props.onSubmit()}} className='button-primary w-full hover:bg-primary-700'>Confirmer</button>
            </div>
        </div>
    )
}