import React from 'react';
import {ButtonComponentProps} from "@/interfaces/Button.interface";

const ButtonComponent: React.FC<ButtonComponentProps> = ({ buttonText1, buttonText2 }) => {
    const handleButtonClick1 = () => {
        console.log(`Button 1 clicked! Text: ${buttonText1}`);
    };

    const handleButtonClick2 = () => {
        console.log(`Button 2 clicked! Text: ${buttonText2}`);
    };

    return (
        <div className="flex gap-8 flex-col justify-center">
            <button className="w-[358px] h-[208px]  mx-auto my-0 text-black bg-neutral-500" onClick={handleButtonClick1}>
                {buttonText1}
            </button>
            <button className="w-[358px] h-[208px]  mx-auto my-0 text-black bg-neutral-500" onClick={handleButtonClick2}>
                {buttonText2}
            </button>
        </div>
    );
};

export default ButtonComponent;
