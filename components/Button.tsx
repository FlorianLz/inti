import React, {useEffect, useState} from 'react';
import {ButtonComponentProps} from "@/interfaces/Button.interface";

const ButtonComponent: React.FC<ButtonComponentProps> = ({buttons, onChange}) => {
    const [value, setValue] = useState('');

    useEffect(() => {
        if (!value) return;
        if (onChange) onChange(value);
    }, [value]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, value: string) => {
        e.preventDefault();
        setValue(value);
    }

    return (
        <div className="flex gap-8 mb-8 flex-col justify-center">
            {buttons.map((button, index) => (
                <button className="w-full h-[208px] button-neutral hover:bg-neutral-50 hover:text-white"
                        key={index}
                        onClick={(e) => handleClick(e, button.value)}>
                    {button.text}
                </button>
            ))}
        </div>
    );
};

export default ButtonComponent;
