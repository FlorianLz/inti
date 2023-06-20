import React, {useEffect, useState} from 'react';
import {ButtonComponentProps} from "@/interfaces/Button.interface";

const ButtonComponent: React.FC<ButtonComponentProps> = ({buttons, onChange}) => {
    const [value, setValue] = useState('');

    useEffect(() => {
        if (onChange) onChange(value);
    }, [onChange, value]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, value: string) => {
        e.preventDefault();
        setValue(value);
    }

    return (
        <div className="flex gap-8 flex-col justify-center">
            {buttons.map((button, index) => (
                <button className="w-[358px] h-[208px]  mx-auto my-0 text-black bg-neutral-500"
                        key={index}
                        onClick={(e) => handleClick(e, button.value)}>
                    {button.text}
                </button>
            ))}
        </div>
    );
};

export default ButtonComponent;
